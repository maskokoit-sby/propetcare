"use client"

import { useState } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const revenueData = [
  { month: "Mei", revenue: 12500000 },
  { month: "Juni", revenue: 14200000 },
  { month: "Juli", revenue: 18900000 },
  { month: "Agus", revenue: 16700000 },
  { month: "Sept", revenue: 21300000 },
  { month: "Okt", revenue: 19800000 },
]

const weeklyData = [
  { week: "W1", revenue: 3200000 },
  { week: "W2", revenue: 4100000 },
  { week: "W3", revenue: 3800000 },
  { week: "W4", revenue: 4900000 },
]

const dailyData = [
  { day: "Sen", revenue: 1200000 },
  { day: "Sel", revenue: 1500000 },
  { day: "Rab", revenue: 2100000 },
  { day: "Kam", revenue: 1800000 },
  { day: "Jum", revenue: 2300000 },
  { day: "Sab", revenue: 2900000 },
  { day: "Min", revenue: 1050000 },
]

export default function AdminDashboard() {
  const [chartType, setChartType] = useState<"monthly" | "weekly" | "daily">("monthly")

  const chartData = {
    monthly: revenueData,
    weekly: weeklyData,
    daily: dailyData,
  }

  const getChartLabel = {
    monthly: "Bulan",
    weekly: "Minggu",
    daily: "Hari",
  }

  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard Admin</h1>
        <p className="text-muted-foreground mt-2">Selamat datang kembali di Pro Pet Care Management</p>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="rounded-xl border-0 shadow-sm">
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-muted-foreground">Total Kunjungan Hari Ini</p>
                <p className="text-2xl font-bold text-foreground mt-2">8</p>
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📅</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-xl border-0 shadow-sm">
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-muted-foreground">Total Kunjungan Minggu Ini</p>
                <p className="text-2xl font-bold text-foreground mt-2">34</p>
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-xl border-0 shadow-sm">
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-muted-foreground">Total Kunjungan Bulan Ini</p>
                <p className="text-2xl font-bold text-foreground mt-2">142</p>
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📈</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-xl border-0 shadow-sm">
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-muted-foreground">Pendapatan Hari Ini</p>
                <p className="text-2xl font-bold text-primary mt-2">Rp 2,1 Jt</p>
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="text-2xl">💰</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Revenue Chart */}
      <Card className="rounded-xl border-0 shadow-sm">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Ringkasan Pendapatan</CardTitle>
              <CardDescription>Pertumbuhan pendapatan Pro Pet Care</CardDescription>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setChartType("daily")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  chartType === "daily" ? "bg-primary text-white" : "bg-slate-100 text-foreground hover:bg-slate-200"
                }`}
              >
                Harian
              </button>
              <button
                onClick={() => setChartType("weekly")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  chartType === "weekly" ? "bg-primary text-white" : "bg-slate-100 text-foreground hover:bg-slate-200"
                }`}
              >
                Mingguan
              </button>
              <button
                onClick={() => setChartType("monthly")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  chartType === "monthly" ? "bg-primary text-white" : "bg-slate-100 text-foreground hover:bg-slate-200"
                }`}
              >
                Bulanan
              </button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={chartData[chartType]}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey={getChartLabel[chartType]} stroke="#64748b" />
              <YAxis stroke="#64748b" tickFormatter={(value) => `Rp ${(value / 1000000).toFixed(1)}M`} />
              <Tooltip
                formatter={(value) => `Rp ${(value as number).toLocaleString("id-ID")}`}
                contentStyle={{ backgroundColor: "#fff", border: "1px solid #e2e8f0", borderRadius: "8px" }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#FFE879"
                strokeWidth={3}
                dot={{ fill: "#FFE879", r: 6 }}
                activeDot={{ r: 8 }}
                name="Pendapatan"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Today Appointments */}
      <Card className="rounded-xl border-0 shadow-sm">
        <CardHeader>
          <CardTitle>Jadwal Hari Ini</CardTitle>
          <CardDescription>Kunjungan yang dijadwalkan untuk hari ini</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { time: "09:00", service: "Grooming", pet: "Max", owner: "Budi Santoso", status: "Dikonfirmasi" },
              {
                time: "11:00",
                service: "Cek Kesehatan",
                pet: "Luna",
                owner: "Siti Nurhaliza",
                status: "Menunggu Validasi",
              },
              {
                time: "13:30",
                service: "Pet Hotel Check-in",
                pet: "Buddy",
                owner: "Ahmad Wijaya",
                status: "Dikonfirmasi",
              },
              { time: "15:00", service: "Home Care", pet: "Bella", owner: "Rina Putri", status: "Dikonfirmasi" },
            ].map((apt, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <div className="flex-1">
                  <p className="font-medium text-foreground">
                    {apt.time} - {apt.service}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {apt.pet} • {apt.owner}
                  </p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    apt.status === "Dikonfirmasi" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {apt.status}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
