"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import DashboardSidebar from "@/components/dashboard/sidebar"
import DashboardHeader from "@/components/dashboard/header"
import { useAuth } from "@/hooks/use-auth"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const { user, loading } = useAuth()
  const [sidebarOpen, setSidebarOpen] = useState(true)

  useEffect(() => {
    if (!loading && !user && !window.location.pathname.includes("/login")) {
      router.push("/login")
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-background">
        <div className="text-center">
          <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent mx-auto"></div>
          <p className="text-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="flex h-screen bg-background">
      <DashboardSidebar isOpen={sidebarOpen} userRole={user.role} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader onMenuToggle={() => setSidebarOpen(!sidebarOpen)} user={user} />
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  )
}
