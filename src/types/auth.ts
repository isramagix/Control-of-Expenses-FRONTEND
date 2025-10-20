export interface User {
  id: string; // UUID
  email: string;
  name: string;
  preferred_currency: string; // Coincide con el campo del backend
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface AuthContextType {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  updateUser: (userData: Partial<User>) => void;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface AuthResponse {
  access_token: string;
  refresh_token: string;
  token_type: string;
  expires_in: number;
  user?: User; // Opcional porque lo agregamos nosotros después del login
}
