//redux reducer
const initialState = {
    basket: [],
    user: null,
}

export const getBasketTotal = (basket) => {
  const total = basket?.reduce((amount, item) => item.item.price + amount, 0);
  console.log(total)
  console.log(basket)
  return total
}
  

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TO_BASKET":
        return {
          ...state,
          basket: [...state.basket, action.payload],
        };

        case "EMPTY_BASKET":
            return {
                ...state,
                basket: []
        }
        case "REMOVE_FROM_BASKET":
          // Copy the existing State
          let newBasket = [...state.basket]

          // Return back a new array
          newBasket.filter((basketItem) =>
            basketItem.item.id !== action.payload.id)

          return {
            ...state,
            basket: newBasket
          }
    
    case "SET_USER":
      return {
        ...state,
        user: action.user
      }

    default:
      return state;
  }
}


export default reducer;