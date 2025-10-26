import { Link } from 'react-router'
import data from './assets/sample_data.json'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import dayjs from 'dayjs'

dayjs.extend(localizedFormat);

function SearchResults({}) {
  return (
    <section className="container">
      <h2>Voyages trouvés :</h2>
      {data.trips.map((x, i) => <SearchResult {...x} key={i} />)}
    </section>
  )
}

function SearchResult({ station_departure, station_arrival, datetime_departure, datetime_arrival, price, trip_id }) {
  const datetimearrival = dayjs(datetime_arrival);
  const datetimedeparture = dayjs(datetime_departure);
  const durationInMinutes = datetimearrival.diff(datetimedeparture, 'minute');

  // Calcul des heures et des minutes
  const hours = Math.floor(durationInMinutes / 60);
  const minutes = durationInMinutes % 60;
  const formattedDuration = `${hours}h${minutes.toString().padStart(2, '0')}`; // Format HHhmm

  return (
    <article>
      <section className="container">
        <div className="grid">
          <div>
            <time> {datetimedeparture.format('HH:mm')} </time>
            <br />
            <time> {datetimearrival.format('HH:mm')} </time>
            <br />
            <time>Durée : {formattedDuration}</time>
          </div>
          <div>
            <span> {station_departure} </span>
            <br />
            <span> {station_arrival} </span>
          </div>
          <div>
            <Link to={trip_id}>
              <button className="outline"> À partir de {price}€ </button>
            </Link>
          </div>
        </div>
      </section >
    </article >
  )
}


export default SearchResults;