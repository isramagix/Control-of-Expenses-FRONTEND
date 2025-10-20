import { create } from "zustand";
import { persist } from "zustand/middleware";
import { toast } from "react-hot-toast";
import { authService } from "../services/authService";
import type { User } from "../types/auth";

interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;

  // Actions
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  updateUser: (userData: Partial<User>) => void;
  initializeAuth: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      isLoading: false,
      isAuthenticated: false,

      login: async (email: string, password: string) => {
        try {
          set({ isLoading: true });
          const response = await authService.login(email, password);

          set({
            user: response.user || null,
            token: response.access_token,
            isAuthenticated: true,
            isLoading: false,
          });

          toast.success(`¡Bienvenido, ${response.user?.name || "Usuario"}!`);
        } catch (error: unknown) {
          const message =
            (error as { response?: { data?: { message?: string } } }).response
              ?.data?.message || "Error al iniciar sesión";
          toast.error(message);
          set({ isLoading: false });
          throw error;
        }
      },

      register: async (name: string, email: string, password: string) => {
        try {
          set({ isLoading: true });
          const response = await authService.register(name, email, password);

          set({
            user: response.user || null,
            token: response.access_token,
            isAuthenticated: true,
            isLoading: false,
          });

          toast.success(
            `¡Cuenta creada exitosamente! Bienvenido, ${
              response.user?.name || "Usuario"
            }!`
          );
        } catch (error: unknown) {
          const message =
            (error as { response?: { data?: { message?: string } } }).response
              ?.data?.message || "Error al crear la cuenta";
          toast.error(message);
          set({ isLoading: false });
          throw error;
        }
      },

      logout: () => {
        try {
          // Llamar al endpoint de logout (opcional)
          authService.logout().catch(console.warn);
        } finally {
          // Limpiar estado local siempre
          set({
            user: null,
            token: null,
            isAuthenticated: false,
          });

          toast.success("Sesión cerrada exitosamente");
        }
      },

      updateUser: (userData: Partial<User>) => {
        const { user } = get();
        if (user) {
          const updatedUser = { ...user, ...userData };
          set({ user: updatedUser });
        }
      },

      initializeAuth: async () => {
        try {
          set({ isLoading: true });
          const { token, user, isAuthenticated } = get();

          if (token) {
            // Si ya tenemos usuario y token, no necesitamos hacer la petición
            if (user && isAuthenticated) {
              console.log("✅ Usuario ya autenticado, saltando verificación");
              set({ isLoading: false });
              return;
            }

            // Solo verificar si no tenemos datos de usuario
            try {
              const currentUser = await authService.getProfile();
              set({
                user: currentUser,
                isAuthenticated: true,
                isLoading: false,
              });
            } catch {
              // Token inválido, limpiar estado
              console.log("❌ Token inválido durante inicialización");
              set({
                user: null,
                token: null,
                isAuthenticated: false,
                isLoading: false,
              });
            }
          } else {
            set({ isLoading: false });
          }
        } catch (error) {
          console.error("Error initializing auth:", error);
          set({ isLoading: false });
        }
      },
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);
