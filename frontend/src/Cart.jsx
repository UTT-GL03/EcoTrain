import { useContext } from 'react';
import { CartContext } from './CartContext';

function Cart() {
  const { cartItems } = useContext(CartContext);

  return (
    <section className="container">
      <h2>Panier</h2>
      {cartItems.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <strong>{item.station_departure} → {item.station_arrival}</strong>
              <br />
              Départ : {item.datetime_departure}
              <br />
              Arrivée : {item.datetime_arrival}
              <br />
              Prix : {item.price}€
            </li>
          ))}
        </ul>
      )}

      <div className="pay-button">
        <button>Passer au paiement</button>
      </div>
    </section>
  );
}

export default Cart;