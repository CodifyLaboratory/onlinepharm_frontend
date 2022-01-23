import { createAction } from 'redux-actions'

export const loadCart = createAction('LOAD_CART')

export const loader = createAction('LOADER')

export const setAuthorization = createAction('SET_AUTHORIZATION')

export const setUser = createAction('SET_USER')

export const setGuest = createAction('SET_GUEST')

export const setCoordinates = createAction('SET_COORDINATES')

export const setFavorite = createAction('SET_FAVORITE')

export const deleteFavorite = createAction('DELETE_FAVORITE')

export const setMedicineFavorite = createAction('SET_MEDICINE_FAVORITE')

export const setPharmacyFavorite = createAction('SET_PHARMACY_FAVORITE')

