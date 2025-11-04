import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import dayjs from 'dayjs'


dayjs.extend(localizedFormat);

export function calculateTripTimes(trip) {
  const datetimearrival = dayjs(trip.datetime_arrival);
  const datetimedeparture = dayjs(trip.datetime_departure);
  const durationInMinutes = datetimearrival.diff(datetimedeparture, 'minute');

  const hours = Math.floor(durationInMinutes / 60);
  const minutes = durationInMinutes % 60;
  const formattedDuration = `${hours}h${minutes.toString().padStart(2, '0')}`;

  return { datetimearrival, datetimedeparture, formattedDuration };
}

function TripDetails({ }) {
  const navigate = useNavigate();
  const { trip_id } = useParams();

  const [trip, setTrip] = useState ({})
  const [selectedClass, setSelectedClass] = useState('second');

  useEffect(() => {
    fetch('/sample_data.json')
    .then (x => x.json())
    .then(data => {
      setTrip(data.trips.find(x => trip_id === x.trip_id))
    }
  )},[trip_id])
  
  const { datetimearrival, datetimedeparture, formattedDuration } = calculateTripTimes(trip);
  const priceSecond = Number(trip.price_second ?? 0);
  const priceFirst = Number(trip.price_first ?? 0);
  const displayedPrice = selectedClass === 'first' ? priceFirst : priceSecond;

  const handleAddToCart = () => {
    const params = new URLSearchParams({ trip_id: trip_id || '', class: selectedClass }).toString();
    navigate(`/cart?${params}`);
  };

  return (
    <div>
      <div className="trip-header">
        <h2>Votre voyage du {datetimedeparture.format('DD/MM/YYYY')}</h2>
      </div>
      <div>
        <h3>{trip.station_departure} → {trip.station_arrival}</h3>
        <div className="trip-date">
        </div>
      </div>
      <div className="grid trip-details">
        <div>
          <div><strong>Départ:</strong> {datetimedeparture.format('HH:mm')}</div>
          <div><strong>Arrivée:</strong> {datetimearrival.format('HH:mm')}</div>
          <br />
          <div><strong>Durée : </strong>{formattedDuration}
            <br />
            <div>
              <label><strong>Classe :</strong></label>
              <div className="class-toggle" role="group" aria-label="Choix de la classe">
                <button
                  type="button"
                  className={`class-option outline ${selectedClass === 'second' ? 'selected' : ''}`}
                  aria-pressed={selectedClass === 'second'}
                  onClick={() => setSelectedClass('second')}
                >
                  2nde classe — {priceSecond}€
                </button>
                <button
                  type="button"
                  className={`class-option outline ${selectedClass === 'first' ? 'selected' : ''}`}
                  aria-pressed={selectedClass === 'first'}
                  onClick={() => setSelectedClass('first')}
                >
                  1ère classe — {priceFirst}€
                </button>
              </div>
            </div>
            <div>
              <strong>Prix :</strong> {displayedPrice}€
            </div>
          </div>
        </div>
        <div>
          <div className="station">{trip.station_departure}</div>
          <div className="station">{trip.station_arrival}</div>
        </div>
      </div>
      <br/>
      <div className="grid">
        <div>
          <button onClick={handleAddToCart}>Ajouter au panier</button>
        </div>
        <div>
          <button className="outline" onClick={() => navigate(-1)}>Retour à la page précédente</button>
        </div>
      </div>
    </div>
  );
}

export default TripDetails