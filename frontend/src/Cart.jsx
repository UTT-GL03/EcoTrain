import { useContext } from 'react';
import { CartContext } from './CartContext';
import dayjs from 'dayjs';
import { calculateTripTimes } from './TripDetails';
import { Link } from 'react-router';

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price), 0);

  return (
    <section className="container">
      <h2>Panier</h2>
      {cartItems.length === 0 ? (
        <>
          <p>Votre panier est vide.</p>
          <div className="grid">
            <button className="back-button outline">
              <Link to="../">Retour à la recherche</Link>
            </button>
          </div>
        </>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => {
              const { datetimearrival, datetimedeparture, formattedDuration } = calculateTripTimes(item);

              return (
                <article key={index}>
                  <section className="container">
                    <div className="grid">
                      <div>
                        <time>{datetimedeparture.format('HH:mm')}</time>
                        <br />
                        <time>{datetimearrival.format('HH:mm')}</time>
                        <br />
                        <time>Durée : {formattedDuration}</time>
                      </div>
                      <div>
                        <span>{item.station_departure}</span>
                        <br />
                        <span>{item.station_arrival}</span>
                      </div>
                      <div>
                        <strong>{item.price}€</strong>
                      </div>
                      <div>
                        <button
                          className="remove-button outline contrast"
                          onClick={() => removeFromCart(index)}
                          aria-label="Remove from cart"
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                  </section>
                </article>
              );
            })}
          </ul>
          <div className="total-price">
            <h3>Total : {totalPrice}€</h3>
          </div>
          <div className="pay-button">
            <button>Passer au paiement</button>
          </div>
        </>
      )}
    </section>
  );
}

export default Cart;