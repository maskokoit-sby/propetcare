"use client"

import { create } from "zustand"

interface User {
  id: string
  email: string
  name: string
  role: "admin" | "staff"
}

interface AuthStore {
  user: User | null
  loading: boolean
  login: (user: User) => void
  logout: () => void
  setLoading: (loading: boolean) => void
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  loading: true,
  login: (user: User) => {
    localStorage.setItem("authUser", JSON.stringify(user))
    set({ user })
  },
  logout: () => {
    localStorage.removeItem("authUser")
    set({ user: null })
  },
  setLoading: (loading: boolean) => set({ loading }),
}))

export function useAuth() {
  const store = useAuthStore()

  // Initialize from localStorage on client side
  if (typeof window !== "undefined" && store.loading && store.user === null) {
    const storedUser = localStorage.getItem("authUser")
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser)
        store.login(user)
      } catch (e) {
        console.error("Failed to parse stored user", e)
      }
    }
    store.setLoading(false)
  }

  return {
    user: store.user,
    loading: store.loading,
    login: store.login,
    logout: store.logout,
  }
}
