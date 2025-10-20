import { useAuthStore } from "../store/authStore";

export const useAuth = () => {
  const {
    user,
    token,
    isLoading,
    isAuthenticated,
    login,
    register,
    logout,
    updateUser,
    initializeAuth,
  } = useAuthStore();

  return {
    user,
    token,
    isLoading,
    isAuthenticated,
    login,
    register,
    logout,
    updateUser,
    initializeAuth,
  };
};
