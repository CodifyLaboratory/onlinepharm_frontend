import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions';
import { loadCart } from './actions';


const defaultState = {
    cart: []
};


// const initStateHandler = (state, {payload: {collection, wishlist}}) => {
//     return {...state, collection: collection, wishlist: wishlist}
// }
//
// const loadLibraryHandler = (state, data) => {
//     return {...state, collection: data.payload}


const loadCartHandler = (state, {payload: cart}) => {
    let updated
    updated = cart
    return {...state, cart: updated};
}

const handlers = {
    [loadCart]: loadCartHandler
};

const cartReducer = handleActions(handlers, defaultState);

export default combineReducers({
    data: cartReducer,
});
