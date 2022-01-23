import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {
    deleteFavorite,
    loadCart,
    setAuthorization,
    setCoordinates,
    setFavorite,
    setGuest, setMedicineFavorite, setPharmacyFavorite
} from './actions';


const defaultState = {
    cart: [],
    favorites_medicine: [],
    favorites_pharmacy: [],
    coordinates: {},
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
    console.log('REDUCER', coords)
    return {...state, coordinates: coords}
}

const setFavoriteHandler = (state, payload) => {
    console.log('add to favorite', payload)
    return state
}

const deleteFavoriteHandler = (state, payload) => {
    console.log("delete favorites", payload)
    return state
}

const setMedicineFavoritesHandler = (state, {payload: favorites_medicine}) => {
    return {...state, favorites_medicine}
}

const setPharmacyFavoritesHandler = (state, {payload: favorites_pharmacy}) => {
    return {...state, favorites_pharmacy}
}


const handlers = {
    [loadCart]: loadCartHandler,
    [setAuthorization]: authHandler,
    [setGuest]: setGuestHandler,
    [setCoordinates]: setUserCoordinatesHandler,
    [setFavorite]: setFavoriteHandler,
    [deleteFavorite]: deleteFavoriteHandler,
    [setMedicineFavorite]: setMedicineFavoritesHandler,
    [setPharmacyFavorite]: setPharmacyFavoritesHandler
};

const cartReducer = handleActions(handlers, defaultState);

export default combineReducers({
    data: cartReducer,
});
