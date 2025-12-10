import { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import { useNavigate } from 'react-router'

function TicketDetails({ }) {
    const navigate = useNavigate();
    const [ticket, setTicket] = useState([]);
    useEffect(() => {
        fetch('../public/sample_data_tickets.json')
            .then(x => x.json())
            .then((data) => {
                const user = data.users.find((user) => user.user_id === "0");
                const ticket = user.tickets.find((ticket) => ticket.trip_id[0]);
                setTicket(ticket);
            })
            .catch((error) => console.error('Erreur lors du chargement des tickets:', error));
    }, []);
    const datetimedeparture = dayjs(ticket.datetime_departure);
    const datetimearrival = dayjs(ticket.datetime_arrival);

    return (
        <div>
            <div className="trip-header">
                <h2>Votre voyage du {datetimedeparture.format('DD/MM/YYYY')}</h2>
            </div>
            <div>
                <h3>{ticket.station_departure} → {ticket.station_arrival}</h3>
            </div>
            <div>
                <ul>
                    <li>Départ de {ticket.station_departure} à {datetimedeparture.format('HH:mm')}</li>
                    <li>Arrivée à {ticket.station_arrival} à {datetimearrival.format('HH:mm')}</li>
                    <li>Durée : {ticket.duration}</li>
                    <li>Prix total : {ticket.total_price}€</li>
                </ul>
            </div>
            <br />
            <div>
                <div className="overflow-auto">
                    <h3>Passagers :</h3>
                    {ticket.passengers && ticket.passengers.length === 0 ? (
                        <p>Aucun passager pour ce billet.</p>
                    ) : (
                        <table>
                            <thead>
                                <tr>
                                    <th>Nom</th>
                                    <th>Prénom</th>
                                    <th>Classe</th>
                                    <th>Siège</th>
                                    <th>Billet PDF</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ticket.passengers?.map((passenger, j) => (
                                    <tr key={j}>
                                        <td>{passenger.lastname}</td>
                                        <td>{passenger.firstname}</td>
                                        <td>{passenger.class}</td>
                                        <td>{passenger.seat}</td>
                                        <td>
                                            {passenger.ticket_url ? (
                                                <a href={passenger.ticket_url} target="_blank" rel="noopener noreferrer">Télécharger</a>
                                            ) : (
                                                'Non disponible'
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
            <br />
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <button className="outline" onClick={() => navigate("../account/")}>Retour à mes voyages à venir</button>
            </div>
        </div>
    );
}

export default TicketDetails