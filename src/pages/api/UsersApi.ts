import axios from 'axios';

const UserApi = axios.create({
  baseURL: 'http://localhost:3001', 
});

export const createUser = async (data: any) => {
  return UserApi.post('/users', data);
};

export const getAllUsers = async () => {
  return UserApi.get('users');
};

export const getUserById = async (id: number) => {
  return UserApi.get(`users/${id}`);
};

export const updateUser = async (id: number, data: any) => {
  return UserApi.put(`users/${id}`, data);
};

export const deleteUser = async (id: number) => {
  return UserApi.delete(`users/${id}`);
};
