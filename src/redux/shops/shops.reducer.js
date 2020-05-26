import {shopsActionTypes} from "./shops.types";
import SHOP_DATA from "../../Pages/Shop/shop.data";

const initState = {
    sections: SHOP_DATA,
};


const shopsReducer = (state = initState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};


export default shopsReducer;
