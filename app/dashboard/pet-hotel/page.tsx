"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import PetHotelList from "@/components/dashboard/pet-hotel-list"
import PetHotelModal from "@/components/dashboard/pet-hotel-modal"

export default function PetHotelPage() {
  const [showModal, setShowModal] = useState(false)
  const [selectedBooking, setSelectedBooking] = useState<any>(null)
  const [filterStatus, setFilterStatus] = useState("all")

  const statuses = ["all", "Booked", "Checked In", "Checked Out"]

  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Pet Hotel</h1>
          <p className="text-muted-foreground mt-2">Kelola reservasi dan check-in pet hotel</p>
        </div>
        <Button
          onClick={() => {
            setSelectedBooking(null)
            setShowModal(true)
          }}
          className="bg-primary hover:bg-primary/90 text-black rounded-lg"
        >
          + Tambah Reservasi
        </Button>
      </div>

      {/* Filter */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {statuses.map((status) => (
          <button
            key={status}
            onClick={() => setFilterStatus(status)}
            className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${
              filterStatus === status ? "bg-primary text-black" : "bg-slate-100 text-foreground hover:bg-slate-200"
            }`}
          >
            {status === "all" ? "Semua" : status}
          </button>
        ))}
      </div>

      {/* Bookings List */}
      <PetHotelList
        filterStatus={filterStatus}
        onEdit={(booking) => {
          setSelectedBooking(booking)
          setShowModal(true)
        }}
      />

      {showModal && (
        <PetHotelModal
          booking={selectedBooking}
          onClose={() => {
            setShowModal(false)
            setSelectedBooking(null)
          }}
          onSave={() => {
            setShowModal(false)
            setSelectedBooking(null)
          }}
        />
      )}
    </div>
  )
}
