import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {
    deleteFavorite,
    loadCart,
    setAuthorization,
    setCoordinates,
    setFavorite,
    setGuest, setMedicineFavorite, setPharmacyFavorite, setUser
} from './actions';


const defaultState = {
    cart: [],
    favorites_medicine: [],
    favorites_pharmacy: [],
    coordinates: null,
    authorized: false,
    is_guest: false,
    loader: false,
    user: null
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

const setFavoriteHandler = (state, payload) => {
    // console.log('add to favorite', payload)
    return state
}

const deleteFavoriteHandler = (state, payload) => {
    // console.log("delete favorites", payload)
    return state
}

const setMedicineFavoritesHandler = (state, {payload: favorites_medicine}) => {
    return {...state, favorites_medicine}
}

const setPharmacyFavoritesHandler = (state, {payload: favorites_pharmacy}) => {
    return {...state, favorites_pharmacy}
}

const setUserHandler = (state, {payload: user}) => {
    return {...state, user}
}

const handlers = {
    [loadCart]: loadCartHandler,
    [setAuthorization]: authHandler,
    [setGuest]: setGuestHandler,
    [setCoordinates]: setUserCoordinatesHandler,
    [setFavorite]: setFavoriteHandler,
    [deleteFavorite]: deleteFavoriteHandler,
    [setMedicineFavorite]: setMedicineFavoritesHandler,
    [setPharmacyFavorite]: setPharmacyFavoritesHandler,
    [setUser]: setUserHandler,
};

const cartReducer = handleActions(handlers, defaultState);

export default combineReducers({
    data: cartReducer,
});
