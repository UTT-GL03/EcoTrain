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
    <form>
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
            <option value="">À partir de</option>
            <option value="00h">00h</option>
            <option value="01h">01h</option>
            <option value="02h">02h</option>
            <option value="03h">03h</option>
            <option value="04h">04h</option>
            <option value="05h">05h</option>
            <option value="06h">06h</option>
            <option value="07h">07h</option>
            <option value="08h">08h</option>
            <option value="09h">09h</option>
            <option value="10h">10h</option>
            <option value="11h">11h</option>
            <option value="12h">12h</option>
            <option value="13h">13h</option>
            <option value="14h">14h</option>
            <option value="15h">15h</option>
            <option value="16h">16h</option>
            <option value="17h">17h</option>
            <option value="18h">18h</option>
            <option value="19h">19h</option>
            <option value="20h">20h</option>
            <option value="21h">21h</option>
            <option value="22h">22h</option>
            <option value="23h">23h</option>
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
          <select name="category" required>
            <option value="bebe">Bébé (0-3 ans)</option>
            <option value="enfant">Enfant (4-11 ans)</option>
            <option value="jeune">Jeune (12-25 ans)</option>
            <option selected value="adulte">Adulte (26-59 ans)</option>
            <option value="senior">Senior (60 ans ou plus)</option>
          </select>
        </div>
        <div>
          <input name="age" min="0" max="120" placeholder="Âge" required />
        </div>
        <div>
          <select placeholder="Carte de réduction">
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