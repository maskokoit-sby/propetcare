"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import JadwalCalendar from "@/components/dashboard/jadwal-calendar"
import AppointmentList from "@/components/dashboard/appointment-list"
import AppointmentModal from "@/components/dashboard/appointment-modal"

export default function JadwalKunjunganPage() {
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split("T")[0])
  const [selectedService, setSelectedService] = useState<string>("all")
  const [showModal, setShowModal] = useState(false)
  const [selectedAppointment, setSelectedAppointment] = useState<any>(null)

  const services = ["all", "Cek Kesehatan", "Grooming", "Home Care", "Pet Hotel"]

  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Jadwal Kunjungan</h1>
          <p className="text-muted-foreground mt-2">Kelola jadwal kunjungan dan grooming</p>
        </div>
        <Button
          onClick={() => {
            setSelectedAppointment(null)
            setShowModal(true)
          }}
          className="bg-primary hover:bg-primary/90 text-black rounded-lg"
        >
          + Tambah Jadwal
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Calendar */}
        <div className="lg:col-span-1">
          <Card className="rounded-xl border-0 shadow-sm sticky top-8">
            <CardHeader>
              <CardTitle className="text-lg">Kalender</CardTitle>
            </CardHeader>
            <CardContent>
              <JadwalCalendar selectedDate={selectedDate} onDateSelect={setSelectedDate} />
            </CardContent>
          </Card>
        </div>

        {/* Appointments List */}
        <div className="lg:col-span-2 space-y-6">
          {/* Filter */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {services.map((service) => (
              <button
                key={service}
                onClick={() => setSelectedService(service)}
                className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${
                  selectedService === service
                    ? "bg-primary text-black"
                    : "bg-slate-100 text-foreground hover:bg-slate-200"
                }`}
              >
                {service === "all" ? "Semua" : service}
              </button>
            ))}
          </div>

          {/* Appointments for Selected Date */}
          <AppointmentList
            selectedDate={selectedDate}
            selectedService={selectedService}
            onEdit={(apt) => {
              setSelectedAppointment(apt)
              setShowModal(true)
            }}
          />
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <AppointmentModal
          appointment={selectedAppointment}
          onClose={() => {
            setShowModal(false)
            setSelectedAppointment(null)
          }}
          onSave={() => {
            setShowModal(false)
            setSelectedAppointment(null)
          }}
        />
      )}
    </div>
  )
}
