import { useState, useEffect } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router'
import dayjs from 'dayjs'

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
  const { _id } = useParams();
  const { search } = useLocation();
  const passengers = Math.max(1, parseInt((new URLSearchParams(search)).get('passengers') || '1', 10));

  const [trip, setTrip] = useState({})
  const [selectedClass, setSelectedClass] = useState('second');

  useEffect(() => {
    fetch(`http://localhost:5984/ecotrain/${_id}`)
      .then((response) => response.json())
      .then((data) => {
        setTrip(data);
      })
      .catch((error) => {
        console.error('Error fetching trip:', error);
      });
  }, [_id]);

  const { datetimearrival, datetimedeparture, formattedDuration } = calculateTripTimes(trip);
  const priceSecond = Number(trip.price_second ?? 0);
  const priceFirst = Number(trip.price_first ?? 0);
  const displayedPrice = selectedClass === 'first' ? priceFirst : priceSecond;
  const totalDisplayedPrice = displayedPrice * passengers;

  const handleAddToCart = () => {
    const params = new URLSearchParams({ _id: _id || '', class: selectedClass, passengers: String(passengers) }).toString();
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
            <div style={{ fontWeight: 700, fontSize: '1.15rem', marginTop: '0.25rem' }}>
              Total pour {passengers} passager{passengers > 1 ? 's' : ''} : {totalDisplayedPrice}€
            </div>
          </div>
        </div>
        <div>
          <div className="station">{trip.station_departure}</div>
          <div className="station">{trip.station_arrival}</div>
        </div>
      </div>
      <br />
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