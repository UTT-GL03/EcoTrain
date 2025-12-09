import dayjs from 'dayjs';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

function Account() {
    const [tickets, setTickets] = useState([]); // Stocker les tickets liés à l'user_id 1
    const [selectedClass, setSelectedClass] = useState('second');
    let params = useParams();
    const passengers = Math.max(1, parseInt(params.passengers || '1', 10));

    useEffect(() => {
        fetch('../public/sample_data_tickets.json')
            .then(x => x.json())
            .then(data => {
                // Filtrer les tickets pour ne garder que ceux liés à l'user_id 1
                const userTickets = data.tickets.filter(ticket => ticket.user_id === "1");
                setTickets(userTickets);
                setSelectedClass(params.class === 'first' ? 'first' : 'second');
            })
            .catch(error => console.error('Erreur lors du chargement des tickets:', error));
    }, []);

    return (
        <section className="container">
            <h2>Mes billets</h2>
            {tickets.length === 0 ? (
                <p>Aucun billet trouvé pour cet utilisateur.</p>
            ) : (
                tickets.map((ticket, i) => {
                    const datetimedeparture = dayjs(ticket.datetime_departure);
                    const datetimearrival = dayjs(ticket.datetime_arrival);
                    const duration = ticket.duration;
                    const priceSecond = Number(ticket.price_second ?? 0);
                    const priceFirst = Number(ticket.price_first ?? 0);
                    const selectedPrice = selectedClass === 'first' ? priceFirst : priceSecond;

                    return (
                        <article key={i}>
                            <section className="container">
                                <div className="grid">
                                    <div>
                                        <time>{datetimedeparture.format('HH:mm')}</time>
                                        <br />
                                        <time>{datetimearrival.format('HH:mm')}</time>
                                        <br />
                                        <time>Durée : {duration}</time>
                                    </div>
                                    <div>
                                        <span>{ticket.station_departure}</span>
                                        <br />
                                        <span>{ticket.station_arrival}</span>
                                    </div>
                                    <div>
                                        <div><strong>{selectedPrice}€</strong></div>
                                        <div style={{ opacity: 0.7 }}>Classe: {selectedClass === 'first' ? '1ère' : '2nde'}</div>
                                        <div style={{ opacity: 0.7 }}>Passagers: {passengers}</div>
                                    </div>
                                    <div>
                                        <a href={ticket.ticket_url} target="_blank" rel="noopener noreferrer">
                                            <button className="outline">Télécharger le billet</button>
                                        </a>
                                    </div>
                                </div>
                            </section>
                        </article>
                    );
                })
            )}
        </section>
    );
}

export default Account;