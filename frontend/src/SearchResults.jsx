import { Link, useLocation, useNavigate } from 'react-router';
import { useState, useEffect, useMemo } from 'react';
import dayjs from 'dayjs';

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => Object.fromEntries(new URLSearchParams(search)), [search]);
}

function SearchResults() {
  const [results, setResults] = useState([]);
  const [requestedBookmark, setRequestedBookmark] = useState(''); // Current bookmark
  const [nextBookmark, setNextBookmark] = useState(null); // Next bookmark
  const query = useQuery();
  const navigate = useNavigate();
  const passengers = Math.max(1, parseInt(query.passengers || '1', 10));

  const stations = useMemo(() => ([
    'Paris',
    'Nogent-sur-Seine',
    'Romilly-sur-Seine',
    'Troyes',
  ]), []);

  const [form, setForm] = useState({
    departureStation: query.departure || '',
    arrivalStation: query.arrival || '',
    date: query.date || '2025-01-01',
    departureTime: query.time || '00h',
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!stations.includes(form.departureStation) || !stations.includes(form.arrivalStation)) {
      alert('Veuillez sélectionner des gares valides dans la liste.');
      return;
    }
    const passengers = query.passengers || '1';
    const params = new URLSearchParams({
      departure: form.departureStation,
      arrival: form.arrivalStation,
      date: form.date,
      time: form.departureTime.replace('h', ''),
      passengers,
    }).toString();
    navigate(`/trips?${params}`);
    setResults([]); // Clear previous results
    setRequestedBookmark(''); // Reset the bookmark for a new search
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);

    const stationDeparture = urlParams.get('departure');
    const stationArrival = urlParams.get('arrival');
    const date = urlParams.get('date');
    const time = urlParams.get('time');

    // Merge date and time into a datetime value
    const datetimeDepartureGt = `${date} ${time}`;
    const datetimeDepartureLt = `${date} 23:59`;

    fetch('http://localhost:5984/ecotrain/_find', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        selector: {
          station_departure: { "$eq": stationDeparture },
          station_arrival: { "$eq": stationArrival },
          datetime_departure: { "$gt": datetimeDepartureGt, "$lt": datetimeDepartureLt }
        },
        sort: [{ datetime_departure: "asc" }],
        fields: ["_id", "station_departure", "station_arrival", "datetime_departure", "datetime_arrival", "price_second", "price_first"],
        bookmark: requestedBookmark, // Use the current bookmark
        limit: 10
      })
    })
      .then(x => x.json())
      .then(data => {
        setResults(prevResults => [
          ...prevResults,
          ...(data.docs || []) // Append new results to the existing ones
        ]);
        setNextBookmark(data.bookmark); // Update the next bookmark
      })
      .catch(error => console.error('Error fetching trips:', error));
  }, [query.departure, query.arrival, query.date, query.time, requestedBookmark]); // Add requestedBookmark as a dependency

  return (
    <section className="container">
      <section className="container" style={{ paddingTop: 0, paddingBottom: '0.5rem' }}>
        <form className="search-bar" onSubmit={onSubmit}>
          <div className="grid" style={{ gridTemplateColumns: '2fr 1fr' }}>
            <div style={{ display: 'grid', gap: '0.5rem' }}>
              <select name="departureStation" required value={form.departureStation} onChange={onChange} style={{ width: '100%' }}>
                <option value="" disabled>Gare de départ</option>
                {stations.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              <select name="arrivalStation" required value={form.arrivalStation} onChange={onChange} style={{ width: '100%' }}>
                <option value="" disabled>Gare d'arrivée</option>
                {stations.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <div style={{ display: 'grid', gap: '0.5rem' }}>
              <input type="date" name="date" required value={form.date} onChange={onChange} style={{ width: '100%' }} />
              <select name="departureTime" required value={form.departureTime} onChange={onChange} style={{ width: '100%' }}>
                <option value="">Heure de départ</option>
                {Array.from({ length: 24 }, (_, i) => (
                  <option key={i} value={`${i.toString().padStart(2, '0')}h`}>
                    {i.toString().padStart(2, '0')}h
                  </option>
                ))}
              </select>
            </div>
            <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'flex-end' }}>
              <button type="submit" className="outline">Mettre à jour</button>
            </div>
          </div>
        </form>
      </section>
      <h2>Voyages trouvés :</h2>
      {results.length === 0 && (<p>Aucun trajet ne correspond à votre recherche.</p>)}
      {results.map((x, i) => <SearchResult {...x} key={i} passengers={passengers} />)}

      {nextBookmark && (
        <button onClick={() => setRequestedBookmark(nextBookmark)}>
          Charger plus de résultats
        </button>
      )}
    </section>
  );
}

function SearchResult({ datetime_arrival, datetime_departure, station_arrival, station_departure, price_second, _id, passengers }) {
  const datetimearrival = dayjs(datetime_arrival);
  const datetimedeparture = dayjs(datetime_departure);
  const durationInMinutes = datetimearrival.diff(datetimedeparture, 'minute');

  const hours = Math.floor(durationInMinutes / 60);
  const minutes = durationInMinutes % 60;
  const formattedDuration = `${hours}h${minutes.toString().padStart(2, '0')}`;
  const perPassenger = Number(price_second ?? 0);

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
            <Link to={`${_id}?passengers=${(new URLSearchParams(window.location.search)).get('passengers') || '1'}`}>
              <button className="outline">À partir de {perPassenger}€ / passager</button>
            </Link>
          </div>
        </div>
      </section >
    </article >
  );
}

export default SearchResults;