"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import HomeCareLis from "@/components/dashboard/home-care-list"
import HomeCareModal from "@/components/dashboard/home-care-modal"

export default function HomeCarePage() {
  const [showModal, setShowModal] = useState(false)
  const [selectedVisit, setSelectedVisit] = useState<any>(null)
  const [filterStatus, setFilterStatus] = useState("all")

  const statuses = ["all", "Dijadwalkan", "Sedang Proses", "Selesai"]

  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Home Care</h1>
          <p className="text-muted-foreground mt-2">Kelola kunjungan perawatan di rumah</p>
        </div>
        <Button
          onClick={() => {
            setSelectedVisit(null)
            setShowModal(true)
          }}
          className="bg-primary hover:bg-primary/90 text-black rounded-lg"
        >
          + Tambah Kunjungan
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

      {/* Visits List */}
      <HomeCareLis
        filterStatus={filterStatus}
        onEdit={(visit) => {
          setSelectedVisit(visit)
          setShowModal(true)
        }}
      />

      {showModal && (
        <HomeCareModal
          visit={selectedVisit}
          onClose={() => {
            setShowModal(false)
            setSelectedVisit(null)
          }}
          onSave={() => {
            setShowModal(false)
            setSelectedVisit(null)
          }}
        />
      )}
    </div>
  )
}
