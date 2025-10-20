import { useState } from 'react'
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

    <main className="container">
    <SearchBar></SearchBar>
      
      {data.trips.map((x,i) =>
      <TripsList {...x} key={i} />
  )}
    </main>
    </>
  );
}

function TripsList({station_departure, station_arrival, date, time_departure, time_arrival}) {
return(
  <div>
    <header>
      <span> {station_departure} </span>
      <span> {station_arrival} </span>
      <span> {date} </span>
      <time> {time_departure} </time>
      <time> {time_arrival} </time>
    </header>
  </div>
)

}

export default App