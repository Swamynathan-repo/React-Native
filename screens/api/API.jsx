import axios from 'axios';

const BASE_URL= "http://192.168.1.13:4000/api/products";


export const getProducts = () => axios.get(`${BASE_URL}/`);
export const getProduct = (id) => axios.get(`${BASE_URL}/${id}`);
export const createProduct = (data) => axios.post(`${BASE_URL}`, data);
export const updateProduct = (id, data) => axios.put(`${BASE_URL}/${id}`, data);
export const deleteProduct = (id) => axios.delete(`${BASE_URL}/${id}`);
