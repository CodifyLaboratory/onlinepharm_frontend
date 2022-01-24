import axios from 'axios'
import {strings} from "../localization";

const lang = strings.getLanguage()

const baseUrl = `http://164.90.192.245/${lang}/api/`

const http = axios.create({
    baseURL: baseUrl,
})

const setHeaders = (token) => {
    return {
        headers: {
            Authorization: token ? `JWT ${token}` : '',
        },
    }
}

const Api = {
    getData: (url, token) => http.get(url, setHeaders(token)),
    postData: (url, body, token) => http.post(url, body, setHeaders(token)),
    putData: (url, article, token) => http.put(url, article, setHeaders(token)),
    deleteData: (url, token, options) =>
        http.delete(url, setHeaders(token), options),
}

export default Api
