import { Link, useLocation, useNavigate } from 'react-router'
import { useState, useEffect, useMemo } from 'react'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import dayjs from 'dayjs'

dayjs.extend(localizedFormat);

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => Object.fromEntries(new URLSearchParams(search)), [search]);
}

function SearchResults({}) {
  const [results, setResults] = useState([])
  const query = useQuery();
  const navigate = useNavigate();

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
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (!stations.includes(form.departureStation) || !stations.includes(form.arrivalStation)) {
      alert('Veuillez sélectionner des gares valides dans la liste.');
      return;
    }
    const params = new URLSearchParams({
      departure: form.departureStation,
      arrival: form.arrivalStation,
      date: form.date,
      time: form.departureTime,
    }).toString();
    navigate(`/trips?${params}`);
  }

  useEffect(() => {
    fetch('/sample_data.json')
      .then(x => x.json())
      .then(data => {
        setResults(data.trips)
      })
  }, [])

  const filtered = useMemo(() => {
    if (!results || results.length === 0) return [];
    const dep = (query.departure || '').trim().toLowerCase();
    const arr = (query.arrival || '').trim().toLowerCase();

    let earliest = null;
    if (query.date && query.time) {
      const hour = parseInt(query.time);
      const dt = dayjs(query.date).hour(isNaN(hour) ? 0 : hour).minute(0).second(0);
      earliest = dt.isValid() ? dt : null;
    }

    return results.filter(t => {
      const matchesStations = (
        (!dep || (t.station_departure || '').toLowerCase() === dep) &&
        (!arr || (t.station_arrival || '').toLowerCase() === arr)
      );
      if (!matchesStations) return false;
      if (!earliest) return true;
      const tDep = dayjs(t.datetime_departure);
      return tDep.isSame(earliest) || tDep.isAfter(earliest);
    });
  }, [results, query]);

  return (
    <section className="container">
      <section className="container" style={{ paddingTop: 0, paddingBottom: '0.5rem' }}>
        <form className="search-bar" onSubmit={onSubmit}>
          <div className="grid" style={{ gridTemplateColumns: '2fr 1fr'}}>
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
      {filtered.length === 0 && (<p>Aucun trajet ne correspond à votre recherche.</p>)}
      {filtered.map((x, i) => <SearchResult {...x} key={i} />)}
    </section>
  )
}

function SearchResult({datetime_arrival, datetime_departure, station_arrival, station_departure, price, trip_id}) {
  const datetimearrival = dayjs(datetime_arrival);
  const datetimedeparture = dayjs(datetime_departure);
  const durationInMinutes = datetimearrival.diff(datetimedeparture, 'minute');

  const hours = Math.floor(durationInMinutes / 60);
  const minutes = durationInMinutes % 60;
  const formattedDuration = `${hours}h${minutes.toString().padStart(2, '0')}`;

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