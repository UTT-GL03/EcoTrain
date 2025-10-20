import SearchBar from "./components/SearchBar";
import './App.css'
import data from './assets/sample_data.json'
import { BrowserRouter, Routes, Route } from 'react-router'

function App() {

  return (
    <>
      <header>
        <h1>
          EcoTrain
        </h1>
      </header>

      <main>
        {data.trips.map((x, i) =>
          <TripsList {...x} key={i} />
        )}
      </main>
    </>
  )
};

function TripsList({ station_departure, station_arrival, time_departure, time_arrival, price }) {
  return (
    <BrowserRouter>
      <div>
        <section className="container">
          <span> {station_departure} </span>
          <time> {time_departure} </time>
          <br />
          <span> {station_arrival} </span>
          <time> {time_arrival} </time>
          <br />
          <span> {price}€ </span>
        </section>
        <br />
      </div>
    </BrowserRouter >
  )
}

<Routes>
  <Route path="/" element={<TripsList />} />
</Routes>

export default App