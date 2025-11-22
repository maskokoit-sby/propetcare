"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useAuth } from "@/hooks/use-auth"

interface DashboardSidebarProps {
  isOpen: boolean
  userRole: "admin" | "staff"
}

const MENU_ITEMS = {
  admin: [
    { label: "Dashboard", href: "/dashboard", icon: "📊" },
    { label: "Jadwal Kunjungan", href: "/dashboard/jadwal-kunjungan", icon: "📅" },
    { label: "Cek Kesehatan", href: "/dashboard/cek-kesehatan", icon: "🩺" },
    { label: "Home Care", href: "/dashboard/home-care", icon: "🏠" },
    { label: "Grooming", href: "/dashboard/grooming", icon: "✨" },
    { label: "Pet Hotel", href: "/dashboard/pet-hotel", icon: "🏨" },
    { label: "Rawat Inap", href: "/dashboard/rawat-inap", icon: "🏥" },
    { label: "Invoice", href: "/dashboard/invoice", icon: "📄" },
    { label: "Artikel", href: "/dashboard/artikel", icon: "📝" },
    { label: "Laporan Keuangan", href: "/dashboard/laporan-keuangan", icon: "💰" },
  ],
  staff: [
    { label: "Dashboard", href: "/dashboard", icon: "📊" },
    { label: "Jadwal Kunjungan", href: "/dashboard/jadwal-kunjungan", icon: "📅" },
    { label: "Cek Kesehatan", href: "/dashboard/cek-kesehatan", icon: "🩺" },
    { label: "Home Care", href: "/dashboard/home-care", icon: "🏠" },
    { label: "Grooming", href: "/dashboard/grooming", icon: "✨" },
    { label: "Pet Hotel", href: "/dashboard/pet-hotel", icon: "🏨" },
    { label: "Rawat Inap", href: "/dashboard/rawat-inap", icon: "🏥" },
    { label: "Invoice", href: "/dashboard/invoice", icon: "📄" },
    { label: "Artikel", href: "/dashboard/artikel", icon: "📝" },
  ],
}

export default function DashboardSidebar({ isOpen, userRole }: DashboardSidebarProps) {
  const pathname = usePathname()
  const { logout } = useAuth()
  const menuItems = MENU_ITEMS[userRole]

  return (
    <aside
      className={`${
        isOpen ? "w-64" : "w-0"
      } bg-white border-r border-border transition-all duration-300 overflow-hidden flex flex-col`}
    >
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
            P
          </div>
          <div>
            <h3 className="font-bold text-foreground">Pro Pet Care</h3>
            <p className="text-xs text-muted-foreground capitalize">{userRole}</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto p-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/")
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive ? "bg-primary text-white font-medium" : "text-foreground hover:bg-slate-100"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm">{item.label}</span>
            </Link>
          )
        })}
      </nav>

      <div className="p-4 border-t border-border">
        <button
          onClick={() => {
            logout()
            window.location.href = "/dashboard/login"
          }}
          className="w-full px-4 py-2 rounded-lg text-sm text-foreground hover:bg-slate-100 transition-colors text-center font-medium"
        >
          Logout
        </button>
      </div>
    </aside>
  )
}
