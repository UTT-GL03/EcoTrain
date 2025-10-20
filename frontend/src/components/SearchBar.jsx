function SearchBar() {
  return (
    <form>
      <label>
        Date du trajet: 
        <input type="date" name="date" required />
      </label>
      <br />
      <label>
        Gare de départ: 
        <input type="text" name="departureStation" placeholder="Ex: Paris" required />
      </label>
      <br />
      <label>
        Gare d'arrivée: 
        <input type="text" name="arrivalStation" placeholder="Ex: Troyes" required />
      </label>
      <br />
      <label>
        Heure de départ: 
        <input type="time" name="minTime" step="3600" required />
      </label>
      <br/>
      <br/>
      <fieldset>
        <legend>Informations voyageur</legend>
        <div>
          <label>
            Catégorie:
            <select name="category" placeholder=""required>
              <option value="bebe">Bébé (0-3 ans)</option>
              <option value="enfant">Enfant (4-11 ans)</option>
              <option value="jeune">Jeune (12-25 ans)</option>
              <option value="adulte">Adulte (26-59 ans)</option>
              <option value="senior">Senior (60 ans ou plus)</option>
            </select>
          </label>
          <br />
          <label>
            Âge:
            <input type="number" name="age" min="0" placeholder="Ex: 12"required />
          </label>
          <br />
          <label>
            Carte de réduction:
            <select name="category">
              <option value="none">Aucune</option>
              <option value="carteavantage">Carte Avantage</option>
              <option value="carteavantagejeune">Carte Avantage Jeune</option>
              <option value="fluo">Carte Fluo</option>
              <option value="fluojeune">Carte Fluo jeune</option>
            </select>
          </label>
        </div>
      </fieldset>
      <br />
      <button type="submit">Rechercher un trajet</button>
    </form>
  );
}

export default SearchBar;