import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {strings} from "./localization";

export const request = async (url, method, payload, formData, params) => {
    const data = await AsyncStorage.getItem('userData')

    const parsed = JSON.parse(data)
    const token = parsed?.access

    const lang = strings.getLanguage() || 'ru'

    const api = `http://164.90.192.245/${lang}`
    try {
        const res = await axios({
            url: `${api}${url}`,
            headers: {
                ...(formData && { 'Content-Type': 'multipart/form-data'}),
                ...(token && { Authorization: `JWT ${token}` }),

            },
            method,
            data: payload,
            params: params
        })
        if (res.data && res.data.access) {
            AsyncStorage.setItem('userData', res.data.access)
        }
        return res.data
    } catch (error) {
        if (error.response.status === 401) {
            AsyncStorage.removeItem('userData')
        }
        throw error
    }
}

export async function createProductFavorite(id) {
    return request(`/api/favorite-medications/create/${id}/`, 'POST', {
        status: true,
    })
}

export async function deleteProductFavorite(id) {
    return request(`/api/favorite-medications/delete/${id}/`, 'DELETE', {
        status: false,
    })
}

export async function createPharmFavorite(data) {
    return request(`/api/favorite-pharms/create/${data}/`, 'POST', {
        status: true,
    })
}

export async function deletePharmFavorite(data) {
    return request(`/api/favorite-pharms/delete/${data}/`, 'DELETE', {
        status: false,
    })
}

export async function updatePharmFavorite(data) {
    return request(`/api/favorite-pharms/update/${data}/`, 'PUT', {
        status: false,
    })
}

export async function createFeedback(id, data) {
    return request(`/api/pharmacy-feedbacks/create/${id}/`, 'POST', data)
}

export async function createMedicationFeedback(id, data) {
    return request(`/api/medication-feedbacks/create/${id}/`, 'POST', data)
}

export async function getFavorites() {
    return request('/api/favorite-pharms/', 'GET')
}

export async function getFavoritesProducts() {
    return request('/api/favorite-medications/', 'GET')
}

export async function getFarmInformation(id) {
    return request(`/api/pharms/${id}`, 'GET')
}

export async function addToBasket(id, count) {
    return await request(`/api/basket-medications/create/${id}/`, 'POST', {"count": count})
}

export async function deleteFromBasket(id) {
    return request(`/api/basket-medications/delete/${id}/`, 'DELETE', {"status": true})
}

export async function updateBasket(id, count) {
    return await request(`/api/basket-medications/update/${id}/`, 'PUT', {"count": count})
}

export async function deleteAllBasket() {
    return await request(`/api/basket-delete-all/`, 'POST')
}

export async function getAllBasket() {
    return await request(`/api/basket-medications/`, 'GET')
}

export async function updateProfile(id, data) {
    return await request(`/api/auth/users/update/${id}/`, 'PUT', data)
}

export async function login(data) {
    return request(`/api/auth/users/token/`, 'POST', data)
}

export async function getProfile(id) {
    return request(`/api/auth/users/${id}/`, 'GET')
}

export async function resetPassword(data) {
    return request('/api/auth/reset-password/', 'POST', data)
}

export async function changePassword(data) {
    return request('/api/auth/change-password/', 'PUT', data)
}

export async function verifyCode(data) {
    return request('/api/auth/reset-password/verify/', 'POST', data)
}
export async function setNewPassword(data) {
    return request('/api/auth/reset-password/complete/', 'PATCH', data)
}

export async function updateUserPhoto(data) {
    return request('/api/auth/users/change-photo/', 'PUT', data)
}

export async function createOrder(data) {
    return request('/api/orders/create/', 'POST', data)
}


export async function getDeliveryPharmacy() {
    return request('/api/basket-medications/delivery_pharm/', 'GET')
}

export async function getOrders() {
    return request('/api/orders/', 'GET')
}

export async function getOrdersById(id) {
    return request(`/api/orders/${id}/`, 'GET')
}

export async function getAllMedication() {
    return request(`/api/medications/`, 'GET')
}

export async function searchMedication(value) {
    return request(`/api/medications/?search=${value}`, 'GET')
}


export async function getMedication(id) {
    return request(`/api/medications/${id}/`, 'GET')
}

export async function getNews(filters) {
    console.log('FILTERSSS', filters)
    return await request(`/api/news/`, 'GET', null, null, filters)
}

export async function getNewsCategories() {
    return request(`/api/news-categories/`, 'GET')
}

export async function getNewsById(id) {
    return request(`/api/news/${id}/`, 'GET')
}

export async function getPharmBrands() {
    return request(`/api/pharm-brands/`, 'GET')
}

export async function getPharms() {
    return request(`/api/pharms/`, 'GET')
}


export async function getBanners() {
    return request(`/api/banners/`, 'GET')
}

export async function getBannerById(id) {
    return request(`/api/banners/${id}/`, 'GET')
}

export async function getSubcategories(id) {
    return request(`/api/subcategories/${id}/`, 'GET')
}

export async function getPopularMedications() {
    return request(`/api/popular-medications/`, 'GET')
}


export async function getCategories() {
    return request(`/api/categories/`, 'GET')
}

export async function getSelections() {
    return request(`/api/selections/`, 'GET')
}

export async function getSelectionsById(id) {
    return request(`/api/selections/${id}/`, 'GET')
}

