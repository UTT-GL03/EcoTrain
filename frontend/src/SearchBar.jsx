import localizedFormat from 'dayjs/plugin/localizedFormat'
import dayjs from 'dayjs'
import { Link } from 'react-router'

dayjs.extend(localizedFormat);

function SearchBar() {
  return (
    <form>
      <h3>Informations du trajet</h3>
      <div className="grid">
        <div>
          <label>
            Gare de départ:
            <input type="text" name="departureStation" placeholder="Ex: Paris" required />
          </label>
        </div>
        <div>
          <label>
            Gare d'arrivée:
            <input type="text" name="arrivalStation" placeholder="Ex: Troyes" required />
          </label>
        </div>
      </div>
      <div className="grid">
        <div>
          <label>
            Date du trajet:
            <input type="date" name="date" required />
          </label>
        </div>
        <div>
          <label>
            Heure de départ:
            <select name="departureTime" required>
              <option value="">Sélectionnez</option>
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
          </label>
        </div>
      </div>
      <InfoVoyageur></InfoVoyageur>
      <Link to="/trips">
        <button type="submit">Rechercher un trajet</button>
      </Link>
    </form>
  )
};

function InfoVoyageur() {
  return (
    <fieldset>
      <h3>Informations voyageur</h3>
      <div>
        <div className="grid">
          <div>
            <label>
              Catégorie:
              <select name="category" placeholder="" defaultValue="Sélectionnez" required>
                <option value="">Sélectionnez</option>
                <option value="bebe">Bébé (0-3 ans)</option>
                <option value="enfant">Enfant (4-11 ans)</option>
                <option value="jeune">Jeune (12-25 ans)</option>
                <option value="adulte">Adulte (26-59 ans)</option>
                <option value="senior">Senior (60 ans ou plus)</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              Âge:
              <input type="number" name="age" min="0" max="120" placeholder="Ex: 12" required />
            </label>
          </div>
        </div>
        <label>
          Carte de réduction:
          <select defaultValue="Carte Avantage">
            <option value="none">Aucune</option>
            <option value="carteavantage">Carte Avantage</option>
            <option value="carteavantagejeune">Carte Avantage Jeune</option>
            <option value="fluo">Carte Fluo</option>
            <option value="fluojeune">Carte Fluo jeune</option>
          </select>
        </label>
      </div>
    </fieldset>
  )
}

export default SearchBar;