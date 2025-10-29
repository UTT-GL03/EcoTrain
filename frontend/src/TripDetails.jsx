import { Link } from 'react-router'
import data from './assets/sample_data.json'
import { useParams } from 'react-router'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import dayjs from 'dayjs'
import { useContext } from 'react';
import { CartContext } from './CartContext';

dayjs.extend(localizedFormat);

function TripDetails({ }) {
  const { trip_id } = useParams();
  const { addToCart } = useContext(CartContext);
  const trip = data.trips.find(x => trip_id === x.trip_id);
  const datetimearrival = dayjs(trip.datetime_arrival);
  const datetimedeparture = dayjs(trip.datetime_departure);
  const durationInMinutes = datetimearrival.diff(datetimedeparture, 'minute');

  const hours = Math.floor(durationInMinutes / 60);
  const minutes = durationInMinutes % 60;
  const formattedDuration = `${hours}h${minutes.toString().padStart(2, '0')}`;

  if (!trip) {
    return (
      <div className="trip-not-found">
        <h2>Trajet non trouvé</h2>
        <p>Nous n'avons pas trouvé de voyage correspondant au voyage n°{trip_id}</p>
        <Link to="/">Retour à la page d'accueil</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(trip);
    alert('Billet ajouté au panier !');
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
            <div></div><strong>Prix:</strong> {trip.price}€</div>
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
          <button className="outline"><Link to="../trips" className="back-button">Retour à la page précédente</Link></button>
        </div>
      </div>
    </div>
  );
}

export default TripDetails;