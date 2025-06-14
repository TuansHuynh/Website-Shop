import axios from 'axios';

const api = axios.create({ 
    // baseURL: `${import.meta.env.BASE_URL}/api`
    baseURL: 'http://localhost:8080/api'
});

api.interceptors.request.use( (config) => {

    const token = localStorage.get('AccessToken')

    config.headers.Authorization = `Bearer ${token}`

    return config
})

api.interceptors.response.use( (reponse)=> {
    return reponse
}, (error) => {
    if (error.response.status === 401) {
        localStorage.removeItem('AccessToken');
    }
    throw error
})

export default api;