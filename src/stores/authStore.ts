import { create } from "zustand";

import api from "../services/api";

interface UserProfile {
  id: string;
  email: string;
  full_name: string;
  is_admin: boolean;
}

interface AuthState {
  accessToken: string | null;
  user: UserProfile | null;
  isAuthenticated: boolean;
  login: (accessToken: string, refreshToken: string) => void;
  logout: () => void;
  fetchUserProfile: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  accessToken: localStorage.getItem("accessToken"),
  user: null,
  isAuthenticated: !!localStorage.getItem("accessToken"),

  login: (accessToken, refreshToken) => {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    set({ accessToken, isAuthenticated: true });
  },

  logout: () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    set({ accessToken: null, user: null, isAuthenticated: false });
  },

  fetchUserProfile: async () => {
    const token = get().accessToken;
    if (!token) return;

    try {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const response = await api.get<UserProfile>("/api/v1/users/me");
      set({ user: response.data });
    } catch (error) {
      console.error("Failed to fetch user profile:", error);
      get().logout();
    }
  },
}));
