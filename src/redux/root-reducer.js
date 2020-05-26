import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userReducer from "./auth/user.reducer";
import cartReducer from "./cart/cart.reducer";
import sectionsReducer from "./sections/sections.reducer";
import shopsReducer from "./shops/shops.reducer";


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'],
}

const rootReducer = combineReducers({
    auth: userReducer,
    cart: cartReducer,
    sections: sectionsReducer,
    shops: shopsReducer,
});


export default persistReducer(persistConfig, rootReducer);
