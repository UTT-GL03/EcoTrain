import dayjs from 'dayjs';
import React, { useState, useEffect } from 'react';

function Account() {
    const [tickets, setTickets] = useState([]);
    const [user_firstname, setUserFirstname] = useState('');

    useEffect(() => {
        fetch('../public/sample_data_tickets.json')
            .then(x => x.json())
            .then((data) => {
                const user = data.users.find((user) => user.user_id === "0");
                setUserFirstname(user.firstname);
                setTickets(user.tickets);
            })
            .catch((error) => console.error('Erreur lors du chargement des tickets:', error));
    }, []);

    return (
        <section className="container">
            <h2>Bonjour {user_firstname} !</h2>
            <h2>Mes voyages à venir</h2>
            {tickets.length === 0 ? (
                <p>Aucun voyage à venir.</p>
            ) : (
                tickets.map((ticket, i) => {
                    return (
                        <article key={i}>
                            <section className="container">
                                <div className="grid">
                                    <div>
                                        <time>{ticket.datetime_departure}</time>
                                        <br />
                                        <time>{ticket.datetime_arrival}</time>
                                        <br />
                                        <time>Durée : {ticket.duration}</time>
                                    </div>
                                    <div>
                                        <span>{ticket.station_departure}</span>
                                        <br />
                                        <span>{ticket.station_arrival}</span>
                                    </div>
                                    <div>
                                        <div><strong>{ticket.total_price}€</strong></div>
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