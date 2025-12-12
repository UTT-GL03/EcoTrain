import dayjs from 'dayjs';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';

function Account() {
    const [tickets, setTickets] = useState([]);
    const [user_firstname, setUserFirstname] = useState('');

    useEffect(() => {
        fetch('/sample_data_tickets.json')
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
                    const datetimedeparture = dayjs(ticket.datetime_departure);
                    const datetimearrival = dayjs(ticket.datetime_arrival);
                    return (
                        <article key={i}>
                            <section className="container">
                                <div className="grid">
                                    <div>
                                        <date>Le {datetimedeparture.format('DD/MM/YYYY')}</date>
                                        <br />
                                        <time>Départ : {datetimedeparture.format('HH:mm')}</time>
                                        <br />
                                        <time>Arrivée : {datetimearrival.format('HH:mm')}</time>
                                    </div>
                                    <div>
                                        <span>{ticket.station_departure}</span>
                                        <br />
                                        <span>{ticket.station_arrival}</span>
                                        <br />
                                        <span>{ticket.passengers.length} passagers</span>
                                    </div>
                                    <div>
                                        <Link to={`${ticket.trip_id}`}>
                                            <button className="outline">Voir le détail</button>
                                        </Link>
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