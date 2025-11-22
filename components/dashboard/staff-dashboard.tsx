"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function StaffDashboard() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0])

  const todayAppointments = [
    {
      time: "09:00",
      service: "Grooming",
      pet: "Max",
      owner: "Budi Santoso",
      status: "Dikonfirmasi",
      phone: "08123456789",
    },
    {
      time: "11:00",
      service: "Cek Kesehatan",
      pet: "Luna",
      owner: "Siti Nurhaliza",
      status: "Menunggu Validasi",
      phone: "08987654321",
    },
    {
      time: "13:30",
      service: "Pet Hotel Check-in",
      pet: "Buddy",
      owner: "Ahmad Wijaya",
      status: "Dikonfirmasi",
      phone: "08555666777",
    },
    {
      time: "15:00",
      service: "Home Care",
      pet: "Bella",
      owner: "Rina Putri",
      status: "Dikonfirmasi",
      phone: "08444333222",
    },
  ]

  const latestHealthChecks = [
    { pet: "Bonny", owner: "Tono Sudarno", date: "2024-11-20", diagnosis: "Alergi makanan", vet: "Dr. Budi" },
    { pet: "Charlie", owner: "Hendra Kusuma", date: "2024-11-19", diagnosis: "Vaksinasi tahunan", vet: "Dr. Siti" },
    { pet: "Duke", owner: "Feri Gunawan", date: "2024-11-18", diagnosis: "Pemeriksaan rutin", vet: "Dr. Budi" },
  ]

  const latestHomeCare = [
    { pet: "Milo", owner: "Yuni Astuti", date: "2024-11-20", duration: "1 jam", caretaker: "Sinta" },
    { pet: "Coco", owner: "Doni Hermawan", date: "2024-11-19", duration: "2 jam", caretaker: "Rinto" },
    { pet: "Daisy", owner: "Ani Wijayanti", date: "2024-11-18", duration: "1.5 jam", caretaker: "Sinta" },
  ]

  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard Staff</h1>
        <p className="text-muted-foreground mt-2">Kelola jadwal dan data pasien Anda</p>
      </div>

      {/* Today Appointments */}
      <Card className="rounded-xl border-0 shadow-sm">
        <CardHeader>
          <CardTitle>Jadwal Hari Ini</CardTitle>
          <CardDescription>Jadwal Kunjungan dan Grooming yang dijadwalkan</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {todayAppointments.map((apt, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-lg text-primary">{apt.time}</span>
                    <div>
                      <p className="font-medium text-foreground">{apt.service}</p>
                      <p className="text-sm text-muted-foreground">
                        {apt.pet} • {apt.owner}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={`https://wa.me/${apt.phone.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 bg-green-500 text-white rounded-lg text-sm font-medium hover:bg-green-600 transition-colors"
                  >
                    WhatsApp
                  </a>
                  <span
                    className={`px-3 py-2 rounded-lg text-xs font-medium ${
                      apt.status === "Dikonfirmasi" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {apt.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Latest Health Checks */}
        <Card className="rounded-xl border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Cek Kesehatan Terbaru</CardTitle>
            <CardDescription>Pemeriksaan kesehatan terakhir</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {latestHealthChecks.map((check, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-foreground">{check.pet}</p>
                      <p className="text-sm text-muted-foreground">{check.owner}</p>
                    </div>
                    <span className="text-xs text-muted-foreground">{check.date}</span>
                  </div>
                  <p className="text-sm mt-2 text-foreground">{check.diagnosis}</p>
                  <p className="text-xs text-muted-foreground mt-1">Dokter: {check.vet}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Latest Home Care */}
        <Card className="rounded-xl border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Home Care Terbaru</CardTitle>
            <CardDescription>Kunjungan perawatan rumah terbaru</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {latestHomeCare.map((care, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-foreground">{care.pet}</p>
                      <p className="text-sm text-muted-foreground">{care.owner}</p>
                    </div>
                    <span className="text-xs text-muted-foreground">{care.date}</span>
                  </div>
                  <p className="text-sm mt-2 text-foreground">Durasi: {care.duration}</p>
                  <p className="text-xs text-muted-foreground mt-1">Caretaker: {care.caretaker}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
