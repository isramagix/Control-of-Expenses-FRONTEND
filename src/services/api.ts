import axios from "axios";

// Configuración base de Axios
const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:3000/api";

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor para agregar el token automáticamente
api.interceptors.request.use(
  (config) => {
    // Obtener el token desde Zustand storage
    const authStorage = localStorage.getItem("auth-storage");
    let token = null;

    if (authStorage) {
      try {
        const parsedStorage = JSON.parse(authStorage);
        token = parsedStorage.state?.token;
      } catch (error) {
        console.warn("Error parsing auth storage:", error);
      }
    }

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      console.log(
        "🔑 Token agregado a la petición:",
        token.substring(0, 20) + "..."
      );
    } else {
      console.log("⚠️ No se encontró token en el storage");
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
      console.log("🚫 Token inválido o expirado - limpiando storage");
      // Token expirado o inválido - limpiar el storage de Zustand
      localStorage.removeItem("auth-storage");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;
