"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

interface DashboardHeaderProps {
  onMenuToggle: () => void
  user: {
    id: string
    email: string
    name: string
    role: "admin" | "staff"
  }
}

export default function DashboardHeader({ onMenuToggle, user }: DashboardHeaderProps) {
  const router = useRouter()
  const [notifications, setNotifications] = useState([
    { id: 1, message: "Jadwal kunjungan baru untuk Grooming", type: "appointment", time: "2 jam lalu" },
    { id: 2, message: "Bonny (Rawat Inap) perlu validasi kesehatan", type: "inpatient", time: "1 jam lalu" },
    { id: 3, message: "Invoice #INV-001 belum dibayar", type: "invoice", time: "30 menit lalu" },
  ])
  const [showNotifications, setShowNotifications] = useState(false)

  const handleLogout = () => {
    localStorage.removeItem("authUser")
    router.push("/login")
  }

  return (
    <header className="bg-white border-b border-border px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button onClick={onMenuToggle} className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <h1 className="text-xl font-bold text-foreground">Dashboard</h1>
      </div>

      <div className="flex items-center gap-6">
        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            {notifications.length > 0 && (
              <span className="absolute top-1 right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                {notifications.length}
              </span>
            )}
          </button>

          {showNotifications && (
            <div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-border z-50 max-h-96 overflow-y-auto">
              <div className="p-4 border-b border-border">
                <h3 className="font-bold text-foreground">Notifikasi</h3>
              </div>
              <div className="divide-y divide-border">
                {notifications.length > 0 ? (
                  notifications.map((notif) => (
                    <div key={notif.id} className="p-4 hover:bg-slate-50 transition-colors cursor-pointer">
                      <p className="text-sm font-medium text-foreground">{notif.message}</p>
                      <p className="text-xs text-muted-foreground mt-1">{notif.time}</p>
                    </div>
                  ))
                ) : (
                  <div className="p-4 text-center text-muted-foreground text-sm">Tidak ada notifikasi</div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-3 pl-4 border-l border-border">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
            {user.name.charAt(0)}
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-foreground">{user.name}</p>
            <p className="text-xs text-muted-foreground capitalize">{user.role}</p>
          </div>
        </div>

        {/* Logout Button */}
        <button onClick={handleLogout} className="p-2 hover:bg-slate-100 rounded-lg transition-colors" title="Logout">
          <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
        </button>
      </div>
    </header>
  )
}
