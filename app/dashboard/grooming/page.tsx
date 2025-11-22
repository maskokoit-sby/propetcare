"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import GroomingList from "@/components/dashboard/grooming-list"
import GroomingModal from "@/components/dashboard/grooming-modal"

export default function GroomingPage() {
  const [showModal, setShowModal] = useState(false)
  const [selectedSession, setSelectedSession] = useState<any>(null)
  const [filterStatus, setFilterStatus] = useState("all")

  const statuses = ["all", "Menunggu", "Sedang Proses", "Selesai"]

  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Grooming</h1>
          <p className="text-muted-foreground mt-2">Kelola sesi grooming hewan peliharaan</p>
        </div>
        <Button
          onClick={() => {
            setSelectedSession(null)
            setShowModal(true)
          }}
          className="bg-primary hover:bg-primary/90 text-black rounded-lg"
        >
          + Tambah Sesi
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

      {/* Sessions List */}
      <GroomingList
        filterStatus={filterStatus}
        onEdit={(session) => {
          setSelectedSession(session)
          setShowModal(true)
        }}
      />

      {showModal && (
        <GroomingModal
          session={selectedSession}
          onClose={() => {
            setShowModal(false)
            setSelectedSession(null)
          }}
          onSave={() => {
            setShowModal(false)
            setSelectedSession(null)
          }}
        />
      )}
    </div>
  )
}
