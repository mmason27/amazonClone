import "../Checkout.css";
import Subtotal from "./Subtotal"
import CheckoutProduct from "./CheckoutProduct"
import { connect, useSelector } from 'react-redux'

function Checkout() {
  
  const user = useSelector(state => state.user)
  const basket = useSelector(state => state.basket)

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div>
        <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your Shopping Cart</h2>
          {basket?.map(item => (
            <CheckoutProduct
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              // id={item.item.id}
              // title={item.item.title}
              // image={item.item.image}
              // price={item.item.price}
              // rating={item.item.rating}
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

//mapStateToProps is a function that you would use to provide the store data to your component, whereas mapDispatchToProps is something you use to provide the action creators as props to your component
const mapStateToProps = (state) => {
  return {
    user: state.user,
    basket: state.basket
  }
}

//when I remove connect it signs me out?? so let's keep this for now and refactor later
//when I click remove from basket it also signs me out...
export default connect(mapStateToProps)(Checkout);
