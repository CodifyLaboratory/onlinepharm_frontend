import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const request = async (url, method, payload) => {
    const data = await AsyncStorage.getItem('userData')

    const test = JSON.parse(data)
    const token = test?.access
    // console.log(token)
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

export async function getFarmInformation(id) {
    return request(`/api/pharms/${id}`, 'GET')
}

export async function getDoctorProfile() {
    return request('/doctor/profile', 'GET')
}
