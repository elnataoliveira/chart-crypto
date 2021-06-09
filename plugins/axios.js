import axios from 'axios'

const api = axios.create({
    //baseURL: 'https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/api'
    baseURL: 'https://raw.githubusercontent.com/elnataoliveira/chart-crypto/main/api'

});

export default api;