import React from 'react';
import CurrencyFormat from "react-currency-format";
import '../Subtotal.css'
import { getBasketTotal } from '../store/reducers/reducer';
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux"

function Subtotal() {
  //useHistory gives you access to the browser history
  //different than Link - if you want to 'push' the user somewhere you can use history.push('/wherever')
  const history = useHistory()
  const user = useSelector(state => state.user)
  const basket = useSelector(state => state.basket)

  const total = getBasketTotal(basket)
  console.log(total)

    return (
        <div className="subtotal">
             <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length}) items: <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
        </div>
    )
}

// const mapStateToProps = (state) => {
//   return {
//     user: state.user,
//     basket: state.basket
//   }
// }

export default Subtotal
