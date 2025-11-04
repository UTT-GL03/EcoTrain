import localizedFormat from 'dayjs/plugin/localizedFormat'
import dayjs from 'dayjs'
import { useNavigate } from 'react-router'
import { useState, useMemo } from 'react';

dayjs.extend(localizedFormat);

function SearchBar() {
  const navigate = useNavigate();
  const [passengers, setPassengers] = useState([]);
  const stations = useMemo(() => ([
    'Paris',
    'Nogent-sur-Seine',
    'Romilly-sur-Seine',
    'Troyes',
  ]), []);
  const [form, setForm] = useState({
    departureStation: '',
    arrivalStation: '',
    date: '2025-01-01',
    departureTime: '00h',
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  const addPassenger = () => {
    const id = Date.now() + Math.random();
    setPassengers(prev => [...prev, id]);
  };

  const removePassenger = (idToRemove) => {
    setPassengers(prev => prev.filter(id => id !== idToRemove));
  };

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

  return (
    <form className="search-bar" onSubmit={onSubmit}>
      <h3>Informations du trajet</h3>
      <div>
        <select name="departureStation" required value={form.departureStation} onChange={onChange}>
          <option value="" disabled>Gare de départ</option>
          {stations.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>
      <div>
        <select name="arrivalStation" required value={form.arrivalStation} onChange={onChange}>
          <option value="" disabled>Gare d'arrivée</option>
          {stations.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>
      <div className="grid">
        <div width="67%">
          <input type="date" name="date" required value={form.date} onChange={onChange} />
        </div>
        <div>
          <select name="departureTime" required value={form.departureTime} onChange={onChange}>
            <option value="">Heure de départ</option>
            {Array.from({ length: 24 }, (_, i) => (
              <option key={i} value={`${i.toString().padStart(2, '0')}h`}>
                {i.toString().padStart(2, '0')}h
              </option>
            ))}
          </select>
        </div>
      </div>
      <h3>Informations voyageur</h3>
      <InfoVoyageur></InfoVoyageur>
      <div>
        {passengers.map((id) => (
          <div key={id}>
            <InfoVoyageur />
            <div>
              <button type="button" className="contrast outline" onClick={() => removePassenger(id)}>Supprimer ce passager</button>
            </div>
          </div>
        ))}
      </div>
      <div>
        <button type="button" className="outline" id="addPassenger" onClick={addPassenger}>Ajouter un passager</button>
      </div>
      <div>
        <button type="submit">Rechercher un trajet</button>
      </div>
    </form>
  )
};

function InfoVoyageur() {
  const [category, setCategory] = useState('adulte');

  const onCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className="grid">
      <div>
        <select name="category" value={category} onChange={onCategoryChange} required>
          <option value="bebe">Bébé (0-3 ans)</option>
          <option value="enfant">Enfant (4-11 ans)</option>
          <option value="jeune">Jeune (12-25 ans)</option>
          <option value="adulte">Adulte (26-59 ans)</option>
          <option value="senior">Senior (60 ans ou plus)</option>
        </select>
      </div>
      <div>
        <select placeholder="Carte de réduction" defaultValue="none">
          <option value="none">Aucune carte</option>
          <option value="carteavantage">Carte Avantage</option>
          <option value="fluo">Carte Fluo</option>
        </select>
      </div>
    </div>
  )
}

export default SearchBar;