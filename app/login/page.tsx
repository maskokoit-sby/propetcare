"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useAuth } from "@/hooks/use-auth"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function LoginPage() {
  const router = useRouter()
  const { login } = useAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    // Temporary hardcoded authentication
    if (email === "propetcare" && password === "propetcare234") {
      login({
        id: "admin-001",
        email: "propetcare@admin.com",
        name: "Pro Pet Care Admin",
        role: "admin",
      })
      router.push("/dashboard")
    } else if (email === "staff" && password === "propetcare234") {
      login({
        id: "staff-001",
        email: "staff@propetcare.com",
        name: "Pro Pet Care Staff",
        role: "staff",
      })
      router.push("/dashboard")
    } else {
      setError("Username atau password salah")
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo & Title */}
        <div className="text-center mb-8">
          <div className="inline-block bg-primary rounded-full p-4 mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-foreground">Pro Pet Care</h1>
          <p className="text-sm text-muted-foreground mt-2">Healthy Pet Happy Family</p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-border">
          <h2 className="text-2xl font-bold text-foreground mb-2">Dashboard Login</h2>
          <p className="text-muted-foreground text-sm mb-6">Staff dan Admin hanya</p>

          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">{error}</div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Username</label>
              <Input
                type="text"
                placeholder="propetcare atau staff"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                className="rounded-lg"
              />
              <p className="text-xs text-muted-foreground mt-1">Gunakan: propetcare atau staff</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Password</label>
              <Input
                type="password"
                placeholder="Masukkan password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                className="rounded-lg"
              />
              <p className="text-xs text-muted-foreground mt-1">Password: propetcare234</p>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full h-10 rounded-lg bg-primary hover:bg-primary/90 text-white font-medium"
            >
              {loading ? "Loading..." : "Masuk"}
            </Button>
          </form>

          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-xs text-muted-foreground text-center">Demo Credentials:</p>
            <div className="mt-3 space-y-2 text-xs bg-slate-50 p-3 rounded-lg">
              <p>
                <strong>Admin:</strong> propetcare / propetcare234
              </p>
              <p>
                <strong>Staff:</strong> staff / propetcare234
              </p>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Link href="/" className="text-sm text-primary hover:underline">
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  )
}
