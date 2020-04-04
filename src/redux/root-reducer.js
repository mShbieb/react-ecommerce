import { combineReducers } from 'redux';

import userReducer from "./auth/user.reducer";
import cartReducer from "./cart/cart.reducer";

export default combineReducers({
    auth: userReducer,
    cart: cartReducer,
});
