import axios from "axios";

// Configuración base de Axios
const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:3000/api";

console.log("🌐 URL del API configurada:", API_BASE_URL);
console.log("🔧 Variables de entorno:", import.meta.env);

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor para agregar el token automáticamente
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor para manejar respuestas y errores
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expirado o inválido
      localStorage.removeItem("authToken");
      localStorage.removeItem("user");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;
