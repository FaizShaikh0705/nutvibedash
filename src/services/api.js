import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5000/api',
});

// ✅ Dynamically attach token before every request
API.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export const createProduct = (data) => API.post('/products', data);
export const updateProduct = (id, data) => API.put(`/products/${id}`, data);
export const getProduct = (id) => API.get(`/products/${id}`);
export const deleteProduct = (id) => API.delete(`/products/${id}`);
export const getAllProducts = () => API.get('/products');
export const login = (credentials) => API.post('/auth/login', credentials);