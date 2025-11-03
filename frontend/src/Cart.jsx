import dayjs from 'dayjs';
import { calculateTripTimes } from './TripDetails';
import { Link } from 'react-router';
import React from 'react';
import { useState, useEffect } from 'react'

function Cart() {
  const [trips, setResults] = useState([])

  useEffect(() => {
    fetch('/sample_data.json')
      .then(x => x.json())
      .then(data => {
        setResults(data.trips[0])
      }
    )},[])
  

const datetimedeparture = dayjs(trips.datetime_departure);
const datetimearrival = dayjs(trips.datetime_arrival);
const durationInMinutes = datetimearrival.diff(datetimedeparture, 'minute');
const hours = Math.floor(durationInMinutes / 60);
const minutes = durationInMinutes % 60;
const formattedDuration = `${hours}h${minutes.toString().padStart(2, '0')}`;
const totalPrice = trips.price;

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
                <span>{trips.station_departure}</span>
                <br />
                <span>{trips.station_arrival}</span>
              </div>
              <div>
                <strong>{trips.price}€</strong>
              </div>
              <div>
                <button className="remove-button outline contrast" disabled>🗑️</button>
              </div>
            </div>
          </section>
        </article>
      </ul>
      <div className="total-price">
        <h3>Total : {totalPrice}€</h3>
      </div>
      <div className="pay-button">
        <button>Passer au paiement</button>
      </div>
    </section>
  );
}

export default Cart;