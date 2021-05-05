//redux reducer
const initialState = {
    basket: [],
    user: null,
}

export const getBasketTotal = (basket) => {
  // const total = basket?.reduce((amount, item) => item.item.price + amount, 0);
  const total = basket?.reduce((amount, item) => item.price + amount, 0);
  console.log(total)
  console.log(basket)
  return total
}
  

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TO_BASKET":
        return {
          ...state,
          basket: [...state.basket, action.item],
        };
        //was basket: [...state.basket, action.payload] before

        case "EMPTY_BASKET":
            return {
                ...state,
                basket: []
        }
        case "REMOVE_FROM_BASKET":
          const index = state.basket.findIndex(
            (basketItem) => basketItem.id === action.id
          );
          let newBasket = [...state.basket];
    
          if (index >= 0) {
            newBasket.splice(index, 1);
    
          } else {
            console.warn(
              `Cant remove product (id: ${action.id}) as its not in basket!`
            )
          }
    
          return {
            ...state,
            basket: newBasket
          }
          // Copy the existing State
          // let newBasket = [...state.basket]

          // Return back a new array
          // newBasket.filter((basketItem) =>
          //   basketItem.item.id !== action.payload.id)

          // return {
          //   ...state,
          //   basket: newBasket
          // }
    
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