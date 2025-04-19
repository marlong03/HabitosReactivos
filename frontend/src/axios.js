// src/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8000/api', // ajusta esto según tu backend
});

// Interceptor para agregar el token automáticamente a cada request
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("acces_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
