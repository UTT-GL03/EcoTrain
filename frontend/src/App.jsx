import { Link } from 'react-router'
import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import TripDetails from './TripDetails'
import Trips from './SearchResults'
import HomePage from './HomePage'
import Cart from './Cart';
import Account from './Account';
import TicketDetails from './TicketDetails';

function App() {

  return (
    <BrowserRouter>
      <body>
        <header>
          <div className="header-title">
            <h1>
              <Link to="/">
                🚊 EcoTrain
              </Link>
            </h1>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/trips" element={<Trips />} />
            <Route path="/trips/:_id" element={<TripDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/account" element={<Account />} />
            <Route path="/account/:trip_id" element={<TicketDetails />} />
          </Routes>
        </main>

        <footer>
          <div className="grid">
            <div>
              <Link to="/">
                Page d'accueil
              </Link>
            </div>
            <div>
              <Link to="/cart" className="cart-link">
                Voir le panier
              </Link>
            </div>
            <div>
              <Link to="/account" className="account-link">
                Voir mes billets
              </Link>
            </div>
          </div>
        </footer>
      </body>

    </BrowserRouter >
  )
};

export default App

