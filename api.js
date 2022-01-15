import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const request = async (url, method, payload) => {
    const data = await AsyncStorage.getItem('userData')

    const parsed = JSON.parse(data)
    const token = parsed?.access

    const api = 'http://164.90.192.245'
    try {
        const res = await axios({
            url: `${api}${url}`,
            headers: {
                ...(token && { Authorization: `JWT ${token}` }),
            },
            method,
            data: payload,
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
    const res = await request(`/api/basket-medications/update/${id}/`, 'PUT', {"count": count})
     console.log('RES!!!!!!!!!!!!', res)
    return res
}

export async function getAllBasket() {
    return request(`/api/basket-medications/`, 'GET')
}
