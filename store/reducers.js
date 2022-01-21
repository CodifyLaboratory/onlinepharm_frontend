import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { loadCart, setAuthorization, setCoordinates, setGuest } from './actions';


const defaultState = {
    cart: [],
    coordinates: null,
    authorized: false,
    is_guest: false,
    loader: false
};


const loadCartHandler = (state, { payload: cart }) => {
    let updated
    updated = cart
    return {...state, cart: updated};
}


const authHandler = (state, { payload: status }) => {
    return {...state, authorized: status };
}

const setGuestHandler = (state, {payload: status}) => {
    const updated = {...state}
    return {...updated, is_guest: status}
}

const setUserCoordinatesHandler = (state, { payload: coords }) => {
    return {...state, coordinates: coords}
}

const handlers = {
    [loadCart]: loadCartHandler,
    [setAuthorization]: authHandler,
    [setGuest]: setGuestHandler,
    [setCoordinates]: setUserCoordinatesHandler
};

const cartReducer = handleActions(handlers, defaultState);

export default combineReducers({
    data: cartReducer,
});
