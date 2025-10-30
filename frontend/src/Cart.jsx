import dayjs from 'dayjs';
import { calculateTripTimes } from './TripDetails';
import { Link } from 'react-router';
import React from 'react';
import data from './assets/sample_data.json';

const trips = data.trips;
const randomIndex = Math.floor(Math.random() * trips.length);
const item = trips[randomIndex];
const datetimedeparture = dayjs(item.datetime_departure);
const datetimearrival = dayjs(item.datetime_arrival);
const durationInMinutes = datetimearrival.diff(datetimedeparture, 'minute');
const hours = Math.floor(durationInMinutes / 60);
const minutes = durationInMinutes % 60;
const formattedDuration = `${hours}h${minutes.toString().padStart(2, '0')}`;
const totalPrice = item.price;

function Cart() {
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
                <span>{item.station_departure}</span>
                <br />
                <span>{item.station_arrival}</span>
              </div>
              <div>
                <strong>{item.price}€</strong>
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