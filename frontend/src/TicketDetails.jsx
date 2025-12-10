import { useState, useEffect } from 'react'
import dayjs from 'dayjs'

function TicketDetails({ }) {
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

    return (
        <div>
            <div className="trip-header">
                <h2>Votre voyage du {ticket.datetime_departure}</h2>
            </div>
            <div>
                <h3>{ticket.station_departure} → {ticket.station_arrival}</h3>
                <div className="trip-date">
                </div>
            </div>
            <div className="grid trip-details">
                <div>
                    <div><strong>Départ:</strong> {ticket.datetime_departure}</div>
                    <div><strong>Arrivée:</strong> {ticket.datetime_arrival}</div>
                    <br />
                    <div><strong>Durée : </strong>{ticket.duration}
                        <div>
                            <strong>Prix total :</strong> {ticket.total_price}€
                        </div>
                    </div>
                </div>
                <div>
                    <div className="station">{ticket.station_departure}</div>
                    <div className="station">{ticket.station_arrival}</div>
                </div>
            </div>
            <br />
            <div className="grid">
                <div>
                    <button className="outline" onClick={() => navigate(-1)}>Retour à la page précédente</button>
                </div>
            </div>
        </div>
    );
}

export default TicketDetails