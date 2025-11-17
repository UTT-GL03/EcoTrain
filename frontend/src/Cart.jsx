import dayjs from 'dayjs';
import { useLocation } from 'react-router';
import React from 'react';
import { useState, useEffect } from 'react'

function Cart() {
  const [trip, setTrip] = useState({})
  const [selectedClass, setSelectedClass] = useState('second');
  const { search } = useLocation();
  const params = React.useMemo(() => Object.fromEntries(new URLSearchParams(search)), [search]);
  const passengers = Math.max(1, parseInt(params.passengers || '1', 10));

  useEffect(() => {
    fetch('/sample_data.json')
      .then(x => x.json())
      .then(data => {
        const byId = data.docs.find(t => t._id === params._id);
        setTrip(byId || data.docs[0]);
        setSelectedClass(params.class === 'first' ? 'first' : 'second');
      }
    )},[])
  

const datetimedeparture = dayjs(trip.datetime_departure);
const datetimearrival = dayjs(trip.datetime_arrival);
const durationInMinutes = datetimearrival.diff(datetimedeparture, 'minute');
const hours = Math.floor(durationInMinutes / 60);
const minutes = durationInMinutes % 60;
const formattedDuration = `${hours}h${minutes.toString().padStart(2, '0')}`;
const priceSecond = Number(trip.price_second ?? 0);
const priceFirst = Number(trip.price_first ?? 0);
const selectedPrice = selectedClass === 'first' ? priceFirst : priceSecond;
const totalPrice = selectedPrice * passengers;

  return (
    <section className="container">
      <h2>Panier</h2>
      <ul>
        <article>
          <section className="container">
            <div className="grid">
              <div>
                <time>{datetimedeparture.format('HH:mm')}</time>
                <br />
                <time>{datetimearrival.format('HH:mm')}</time>
                <br />
                <time>Durée : {formattedDuration}</time>
              </div>
              <div>
                <span>{trip.station_departure}</span>
                <br />
                <span>{trip.station_arrival}</span>
              </div>
              <div>
                <div><strong>{selectedPrice}€</strong></div>
                <div style={{ opacity: 0.7 }}>Classe: {selectedClass === 'first' ? '1ère' : '2nde'}</div>
                <div style={{ opacity: 0.7 }}>Passagers: {passengers}</div>
              </div>
              <div>
                <button className="remove-button outline contrast" disabled>🗑️</button>
              </div>
            </div>
          </section>
        </article>
      </ul>
      <div className="total-price">
        <h2 style={{ fontWeight: 800 }}>Total : {totalPrice}€</h2>
      </div>
      <div className="pay-button">
        <button>Passer au paiement</button>
      </div>
    </section>
  );
}

export default Cart;