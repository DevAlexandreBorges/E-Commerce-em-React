import { combineReducers } from "redux";
// import { userReducer } from "./User/reducer";
// import { cartReducer } from "./Cart/cart-reducer";
import { userSlice } from "./User/user-slice";
import { cartSlice } from "./Cart/cart-slice";
// import { cartReducer } from "./Cart/cart-reducer";

export const rootReducer = combineReducers({
  userReducer: userSlice.reducer,
  cartReducer: cartSlice.reducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;
