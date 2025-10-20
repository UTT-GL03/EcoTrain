import SearchBar from "./components/SearchBar";
import './App.css'
import data from './assets/sample_data.json'

function App() {

  return (
    <>
    <header>
      <h1>
        EcoTrain
      </h1>
    </header>

    <main>
    <SearchBar></SearchBar>
      
      {data.trips.map((x,i) =>
      <TripsList {...x} key={i} />
  )}
    </main>
    </>
  );
}

function TripsList({station_departure, station_arrival, time_departure, time_arrival, price}) {
return(
  <div>
    <section>
      <span> {station_departure} </span>
      <span> {station_arrival} </span>
      <time> {time_departure} </time>
      <time> {time_arrival} </time>
      <span> {price}€ </span>
    </section>
  </div>
)

}

export default App