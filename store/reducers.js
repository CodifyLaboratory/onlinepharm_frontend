import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions';
import {loadCart, setAuthorization, setGuest} from './actions';


const defaultState = {
    cart: [],
    authorized: false,
    is_guest: false,
    loader: false
};


// const initStateHandler = (state, {payload: {collection, wishlist}}) => {
//     return {...state, collection: collection, wishlist: wishlist}
// }
//
// const loadLibraryHandler = (state, data) => {
//     return {...state, collection: data.payload}


const loadCartHandler = (state, { payload: cart }) => {
    let updated
    updated = cart
    return {...state, cart: updated};
}


const authHandler = (state, { payload: status }) => {
    return {...state, authorized: status };
}

const setGuestHandler = (state, {payload: status}) => {
    console.log('STATUS', status)
    const updated = {...state}
    return {...updated, is_guest: status}
}

const handlers = {
    [loadCart]: loadCartHandler,
    [setAuthorization]: authHandler,
    [setGuest]: setGuestHandler
};

const cartReducer = handleActions(handlers, defaultState);

export default combineReducers({
    data: cartReducer,
});
