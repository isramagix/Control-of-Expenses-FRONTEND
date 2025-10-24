import { api } from "./api";
import type { AuthResponse, User } from "../types/auth";

export const authService = {
  // Login
  async login(email: string, password: string): Promise<AuthResponse> {
    const loginData = {
      email,
      password,
    };

    console.log("🔐 Enviando datos de login:", loginData);
    // eslint-disable-next-line no-debugger
    debugger;
    try {
      const response = await api.post("/auth/login", loginData);
      console.log("✅ Respuesta exitosa del login:", response.data);

      return {
        access_token: response.data.access_token,
        refresh_token: response.data.refresh_token,
        token_type: response.data.token_type,
        expires_in: response.data.expires_in,
        user: response.data.user,
      };
    } catch (error) {
      console.error("❌ Error en login:", error);
      if (error && typeof error === "object" && "response" in error) {
        const axiosError = error as {
          response?: { status?: number; data?: unknown; headers?: unknown };
        };

        console.error("📝 Detalles del error:", {
          status: axiosError.response?.status,
          data: axiosError.response?.data,
          headers: axiosError.response?.headers,
        });
      }
      throw error;
    }
  },

  // Registro
  async register(
    name: string,
    email: string,
    password: string
  ): Promise<AuthResponse> {
    const registerData = {
      name,
      email,
      password,
      preferred_currency: "EUR", // Valor por defecto del backend
    };

    console.log("📝 Enviando datos de registro:", registerData);
    try {
      const response = await api.post("/auth/register", registerData);
      console.log("✅ Respuesta exitosa del registro:", response.data);

      // Guardar el token para las próximas peticiones
      const { access_token } = response.data;

      // Obtener datos del usuario usando el token
      const userResponse = await api.get("/auth/me", {
        headers: { Authorization: `Bearer ${access_token}` },
      });

      return {
        access_token,
        refresh_token: response.data.refresh_token,
        token_type: response.data.token_type,
        expires_in: response.data.expires_in,
        user: userResponse.data,
      };
    } catch (error) {
      console.error("❌ Error en registro:", error);
      if (error && typeof error === "object" && "response" in error) {
        const axiosError = error as {
          response?: { status?: number; data?: unknown; headers?: unknown };
        };
        console.error("📝 Detalles del error:", {
          status: axiosError.response?.status,
          data: axiosError.response?.data,
          headers: axiosError.response?.headers,
        });
      }
      throw error;
    }
  },

  // Obtener perfil del usuario autenticado
  async getProfile(): Promise<User> {
    const response = await api.get("/auth/me");
    return response.data;
  },

  // Logout (si tienes endpoint para invalidar token)
  async logout(): Promise<void> {
    try {
      await api.post("/auth/logout");
    } catch (error) {
      // Ignorar errores del logout - limpiar local storage de todas formas
      console.warn("Error during logout:", error);
    }
  },

  // Refresh token
  async refreshToken(): Promise<string> {
    const response = await api.post("/auth/refresh-token");
    return response.data.token;
  },
};
