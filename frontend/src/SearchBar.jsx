import localizedFormat from 'dayjs/plugin/localizedFormat'
import dayjs from 'dayjs'
import { Link } from 'react-router'
import { useState } from 'react';

dayjs.extend(localizedFormat);

function SearchBar() {
  const [passengers, setPassengers] = useState([]);

  const addPassenger = () => {
    setPassengers([...passengers, <InfoVoyageur key={passengers.length} />]);
  };
  return (
    <form className="search-bar">
      <h3>Informations du trajet</h3>
      <div>
        <input type="text" name="departureStation" placeholder="Gare de départ" required />
      </div>
      <div>
        <input type="text" name="arrivalStation" placeholder="Gare d'arrivée" required />
      </div>
      <div className="grid">
        <div width="67%">
          <input type="date" name="date" required />
        </div>
        <div>
          <select name="departureTime" required>
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
        {passengers}
      </div>
      <div>
        <button type="button" className="outline" id="addPassenger" onClick={addPassenger}>Ajouter un passager</button>
      </div>
      <div>
        <Link to="/trips">
          <button type="submit">Rechercher un trajet</button>
        </Link>
      </div>
    </form>
  )
};

function InfoVoyageur() {
  return (
    <fieldset>
      <div className="grid">
        <div>
          <select name="category" defaultValue="adulte" required>
            <option value="bebe">Bébé (0-3 ans)</option>
            <option value="enfant">Enfant (4-11 ans)</option>
            <option value="jeune">Jeune (12-25 ans)</option>
            <option value="adulte">Adulte (26-59 ans)</option>
            <option value="senior">Senior (60 ans ou plus)</option>
          </select>
        </div>
        <div>
          <input name="age" min="0" max="120" placeholder="Âge" required />
        </div>
        <div>
          <select placeholder="Carte de réduction" defaultValue="none">
            <option value="none">Aucune</option>
            <option value="carteavantage">Carte Avantage</option>
            <option value="carteavantagejeune">Carte Avantage Jeune</option>
            <option value="fluo">Carte Fluo</option>
            <option value="fluojeune">Carte Fluo jeune</option>
          </select>
        </div>
      </div>
    </fieldset>
  )
}

export default SearchBar;