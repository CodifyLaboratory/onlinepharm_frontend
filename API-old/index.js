import axios from 'axios'
import {strings} from "../localization"
import AsyncStorage from '@react-native-async-storage/async-storage'

const lang = strings.getLanguage()


const baseUrl = `https://www.mymed.kg/${lang}/api/`

const http = axios.create({
    baseURL: baseUrl,
})

const setHeaders = async () => {
    const data = await AsyncStorage.getItem('userData')

const parsed = JSON.parse(data)
const token = parsed?.access

    return {
        headers: {
            Authorization: token ? `JWT ${token}` : '',
        },
    }
}

const Api = {
    getData: (url, token) => http.get(url),
    postData: (url, body, token) => http.post(url, body),
    putData: (url, article, token) => http.put(url, article),
    deleteData: (url, token, options) =>
        http.delete(url, setHeaders(token), options),
}

export default Api
