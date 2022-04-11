import { addItemToCart, removeItemFromCart } from "./cart.utils";

const cartState = {
  items: [],
};

const cartReducer = (state = cartState, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      return {
        ...state,
        items: addItemToCart(state.items, action.payload),
      };
    }
    case "REMOVE_ITEM": {
      return {
        ...state,
        items: removeItemFromCart(state.items, action.payload),
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
