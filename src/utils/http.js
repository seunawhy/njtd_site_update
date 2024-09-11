import axios from 'axios'

const API_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.ImViYmQ1NjA4NjAyOTI0MzVlMDRkOWJjMWUwNjVlN2FiNDQzYzFjMDEi.Obwx-fiRNomKBWE3P80rcjENp3lXubphquyWbPf5SrI'

export const $http = axios.create({
    baseURL: 'https://journal.njtd.com.ng/index.php/njtd/api/v1/'
})

$http.interceptors.request.use(
    (config) => {
        if (config.method === 'get') {
            let prefix = config.url.includes('?') ? '&' : '?'
            config.url += `${prefix}apiToken=${API_KEY}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

$http.interceptors.response.use(
    (response) => {
        return response.data
    },
    (error) => Promise.reject(error)
)

export const $downloadApi = axios.create({
    baseURL: 'https://njtd-new.onrender.com/api',
    // headers: {
    //     'X-Parse-Application-Id': 'YNjnsvEZLOsIqLe7qs61JD72W6CumYExZEQeepcF',
    //     'X-Parse-REST-API-Key': 'zH9tIUPUvAmUfKJNtGS76ZLPURnxQcOEPpeOScP6'
    // }
})
