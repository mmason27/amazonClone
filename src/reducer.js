//this is the part that is responsible for updating the state
//the last step

export const initialState = {
    basket: [],
    user: null
}

//building a Selector - ES6
// like a foor loop incrementing
//should be in reducer or in a separate file
export const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => item.price + amount, 0);

  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "ADD_TO_BASKET":
        return {
          ...state,
          basket: [...state.basket, action.item],
        };

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
    
    case "SET_USER":
      return {
        ...state,
        user: action.user
      }

    default:
      return state;
  }
};

export default reducer;