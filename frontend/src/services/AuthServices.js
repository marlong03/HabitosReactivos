// src/services/authService.js
import API from "../axios"; // importa la instancia ya configurada

export const loginUser = async (credentials) => {
  const res = await API.post("/login/", credentials);
  return res;
};

export const registerUser = async (data) => {
  const res = await API.post("/register/", data);
  return res;
};

export const getPerfil = async () => {
  const res = await API.get("/perfil/");
  return res.data;
};
