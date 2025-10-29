import { Link } from 'react-router'
import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import TripDetails from './TripDetails'
import Trips from './SearchResults'
import HomePage from './HomePage'
import Cart from './Cart';
import { CartProvider } from './CartContext';

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
      
        <header>
          <div className="header-title">
            <h1>
              <Link to="/">
                🚊 EcoTrain
              </Link>
            </h1>
          </div>
          <div className="header-right">
            <Link to="/cart" className="cart-link">Voir le panier</Link>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/trips" element={<Trips />} />
            <Route path="/trips/:trip_id" element={<TripDetails />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>

      </BrowserRouter >
    </CartProvider>
  )
};


export default App