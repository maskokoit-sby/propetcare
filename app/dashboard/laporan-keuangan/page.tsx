"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

const monthlyRevenue = [
  { month: "Mei", grooming: 3500000, health: 2200000, hotel: 1800000, homecare: 1500000 },
  { month: "Juni", grooming: 4200000, health: 2500000, hotel: 2100000, homecare: 1900000 },
  { month: "Juli", grooming: 5100000, health: 3200000, hotel: 2800000, homecare: 2200000 },
  { month: "Agus", grooming: 4800000, health: 2900000, hotel: 2500000, homecare: 2100000 },
  { month: "Sept", grooming: 6200000, health: 3800000, hotel: 3200000, homecare: 2600000 },
  { month: "Okt", grooming: 5900000, health: 3500000, hotel: 3100000, homecare: 2500000 },
]

const serviceBreakdown = [
  { name: "Grooming", value: 35, color: "#FFE879" },
  { name: "Cek Kesehatan", value: 25, color: "#86efac" },
  { name: "Pet Hotel", value: 25, color: "#93c5fd" },
  { name: "Home Care", value: 15, color: "#fca5a5" },
]

const transactions = [
  { id: 1, invoice: "INV-2024-001", description: "Grooming - Max", amount: 350000, status: "Paid", date: "2024-11-20" },
  {
    id: 2,
    invoice: "INV-2024-002",
    description: "Rawat Inap - Bonny",
    amount: 8500000,
    status: "Pending",
    date: "2024-11-18",
  },
  {
    id: 3,
    invoice: "INV-2024-003",
    description: "Cek Kesehatan - Luna",
    amount: 500000,
    status: "Paid",
    date: "2024-11-19",
  },
  {
    id: 4,
    invoice: "INV-2024-004",
    description: "Pet Hotel - Charlie",
    amount: 900000,
    status: "Overdue",
    date: "2024-11-15",
  },
  {
    id: 5,
    invoice: "INV-2024-005",
    description: "Home Care - Bella",
    amount: 450000,
    status: "Paid",
    date: "2024-11-21",
  },
]

export default function LaporanKeuanganPage() {
  const [dateRange, setDateRange] = useState("monthly")

  const totalRevenue = monthlyRevenue.reduce(
    (sum, month) => sum + month.grooming + month.health + month.hotel + month.homecare,
    0,
  )
  const paidAmount = transactions.filter((t) => t.status === "Paid").reduce((sum, t) => sum + t.amount, 0)
  const pendingAmount = transactions
    .filter((t) => t.status === "Pending" || t.status === "Overdue")
    .reduce((sum, t) => sum + t.amount, 0)

  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Laporan Keuangan</h1>
          <p className="text-muted-foreground mt-2">Analisis finansial dan pelaporan pendapatan</p>
        </div>
        <button className="px-4 py-2 bg-primary hover:bg-primary/90 text-black rounded-lg font-medium">Export</button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="rounded-xl border-0 shadow-sm">
          <CardContent className="pt-6">
            <div>
              <p className="text-sm text-muted-foreground">Total Pendapatan</p>
              <p className="text-2xl font-bold text-foreground mt-2">Rp {(totalRevenue / 1000000).toFixed(1)}M</p>
              <p className="text-xs text-muted-foreground mt-2">6 bulan terakhir</p>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-xl border-0 shadow-sm">
          <CardContent className="pt-6">
            <div>
              <p className="text-sm text-muted-foreground">Pembayaran Masuk</p>
              <p className="text-2xl font-bold text-green-600 mt-2">Rp {(paidAmount / 1000000).toFixed(2)}M</p>
              <p className="text-xs text-green-600 mt-2">Sudah terbayar</p>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-xl border-0 shadow-sm">
          <CardContent className="pt-6">
            <div>
              <p className="text-sm text-muted-foreground">Piutang</p>
              <p className="text-2xl font-bold text-orange-600 mt-2">Rp {(pendingAmount / 1000000).toFixed(2)}M</p>
              <p className="text-xs text-orange-600 mt-2">Belum dibayar</p>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-xl border-0 shadow-sm">
          <CardContent className="pt-6">
            <div>
              <p className="text-sm text-muted-foreground">Total Invoice</p>
              <p className="text-2xl font-bold text-foreground mt-2">{transactions.length}</p>
              <p className="text-xs text-muted-foreground mt-2">Dalam periode</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Trend */}
        <Card className="rounded-xl border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Tren Pendapatan</CardTitle>
            <CardDescription>Pendapatan per bulan (6 bulan terakhir)</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyRevenue}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#64748b" />
                <YAxis stroke="#64748b" tickFormatter={(value) => `${(value / 1000000).toFixed(0)}M`} />
                <Tooltip
                  formatter={(value) => `Rp ${(value as number).toLocaleString("id-ID")}`}
                  contentStyle={{ backgroundColor: "#fff", border: "1px solid #e2e8f0", borderRadius: "8px" }}
                />
                <Legend />
                <Line type="monotone" dataKey="grooming" stroke="#FFE879" strokeWidth={2} name="Grooming" />
                <Line type="monotone" dataKey="health" stroke="#86efac" strokeWidth={2} name="Cek Kesehatan" />
                <Line type="monotone" dataKey="hotel" stroke="#93c5fd" strokeWidth={2} name="Pet Hotel" />
                <Line type="monotone" dataKey="homecare" stroke="#fca5a5" strokeWidth={2} name="Home Care" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Service Breakdown */}
        <Card className="rounded-xl border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Persentase Layanan</CardTitle>
            <CardDescription>Kontribusi setiap layanan terhadap pendapatan</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={serviceBreakdown}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name} ${value}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {serviceBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Transactions Table */}
      <Card className="rounded-xl border-0 shadow-sm">
        <CardHeader>
          <CardTitle>Log Transaksi</CardTitle>
          <CardDescription>Daftar semua transaksi pembayaran</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-medium text-foreground">Invoice</th>
                  <th className="text-left py-3 px-4 font-medium text-foreground">Deskripsi</th>
                  <th className="text-right py-3 px-4 font-medium text-foreground">Jumlah</th>
                  <th className="text-center py-3 px-4 font-medium text-foreground">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-foreground">Tanggal</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((tx) => (
                  <tr key={tx.id} className="border-b border-border hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-medium text-foreground">{tx.invoice}</td>
                    <td className="py-3 px-4 text-muted-foreground">{tx.description}</td>
                    <td className="py-3 px-4 text-right font-bold text-primary">
                      Rp {tx.amount.toLocaleString("id-ID")}
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          tx.status === "Paid"
                            ? "bg-green-100 text-green-700"
                            : tx.status === "Pending"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                        }`}
                      >
                        {tx.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">{tx.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
