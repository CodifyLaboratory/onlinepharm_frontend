import axios from 'axios';

const baseUrl = 'http://164.90.192.245/api/';

const http = axios.create({
  baseURL: baseUrl,
})

const setHeaders = (token) => {
  return {
    headers: {
      "Authorization": token ? `JWT ${token}` : '',
    }
  }
};

const Api = {
  getData: (url) => http.get(url),
  postData: (url, body) => http.post(url, body),
  putData: (url, article, token) => http.put(url, article, setHeaders(token)),
}

export default Api;