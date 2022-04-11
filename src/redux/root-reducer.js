import { combineReducers } from "redux";

import uiReducer from "./UI/ui-reducer";
import cartReducer from "./Cart/cart-reducer";

const rootReducer = combineReducers({
  ui: uiReducer,
  cart: cartReducer,
});

export default rootReducer;
