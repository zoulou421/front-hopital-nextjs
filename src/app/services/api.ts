import axios from 'axios';

const api  = axios.create({
    baseURL: 'http://45.63.94.164/immo_back_test',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token'); // Récupérer le token (ou via cookies)

    // Vérifier et initialiser les headers si nécessaire
    if (!config.headers) {
        config.headers = {};
    }

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export default api;