import "../Checkout.css";
import Subtotal from "./Subtotal"
import CheckoutProduct from "./CheckoutProduct"
import { useSelector } from 'react-redux'
import header from "../Assets/bosqueprimeheader.png"

function Checkout() {
  
  const user = useSelector(state => state.user)
  const basket = useSelector(state => state.basket)

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src={header}
          alt="Sign up for bosque prime today!"
        />

        <div>
        <h3>Hello, {user ? user.email : 'Guest'}</h3>
          <h2 className="checkout__title">Your Shopping Cart</h2>
          {basket?.map(item => (
            <CheckoutProduct
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))} 

        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
