import axios from 'axios';

const ProductApi = axios.create({
  baseURL: 'http://localhost:3001/api', 
});

export const createProduct = async (data: any) => {
  return ProductApi.post('/produits', data);
};

export const getAllProducts = async () => {
  return ProductApi.get('produits');
};
console.log({getAllProducts})
export const getProductById = async (id: number) => {
  return ProductApi.get(`produits/${id}`);
};

export const updateProduct= async (id: number, data: any) => {
  return ProductApi.put(`produits/${id}`, data);
};

export const deleteProduct = async (id: number) => {
  return ProductApi.delete(`produits/${id}`);
};
