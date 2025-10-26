import { Link } from 'react-router'
import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import TripDetails from './TripDetails'
import Trips from './SearchResults'
import HomePage from './HomePage'


function App() {

  return (
    <>
      <BrowserRouter>

        <header>
          <h1>
            <Link to="/">
              EcoTrain
            </Link>
          </h1>

        </header>

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/trips" element={<Trips />} />
            <Route path="/trips/:trip_id" element={<TripDetails />} />
          </Routes>
        </main>

      </BrowserRouter >
    </>

  )
};


export default App