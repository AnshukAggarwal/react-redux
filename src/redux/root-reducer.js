import { combineReducers } from "redux";

import uiReducer from "./UI/ui-reducer";
import cartReducer from "./Cart/cart-reducer";
import productsReducer from "./Products/products.reducer";

const rootReducer = combineReducers({
  ui: uiReducer,
  cart: cartReducer,
  products: productsReducer,
});

export default rootReducer;
