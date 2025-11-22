"use client"

import { useAuth } from "@/hooks/use-auth"
import AdminDashboard from "@/components/dashboard/admin-dashboard"
import StaffDashboard from "@/components/dashboard/staff-dashboard"

export default function Dashboard() {
  const { user } = useAuth()

  if (!user) return null

  return <div>{user.role === "admin" ? <AdminDashboard /> : <StaffDashboard />}</div>
}
