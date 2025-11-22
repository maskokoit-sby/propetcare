"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import RawatInapList from "@/components/dashboard/rawat-inap-list"
import RawatInapModal from "@/components/dashboard/rawat-inap-modal"

export default function RawatInapPage() {
  const [showModal, setShowModal] = useState(false)
  const [selectedCase, setSelectedCase] = useState<any>(null)
  const [filterStatus, setFilterStatus] = useState("all")

  const statuses = ["all", "Dirawat", "Dalam Perawatan", "Pulih", "Pulang"]

  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Rawat Inap</h1>
          <p className="text-muted-foreground mt-2">Kelola perawatan inap hewan</p>
        </div>
        <Button
          onClick={() => {
            setSelectedCase(null)
            setShowModal(true)
          }}
          className="bg-primary hover:bg-primary/90 text-black rounded-lg"
        >
          + Tambah Rawat Inap
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

      {/* Cases List */}
      <RawatInapList
        filterStatus={filterStatus}
        onEdit={(caseItem) => {
          setSelectedCase(caseItem)
          setShowModal(true)
        }}
      />

      {showModal && (
        <RawatInapModal
          caseItem={selectedCase}
          onClose={() => {
            setShowModal(false)
            setSelectedCase(null)
          }}
          onSave={() => {
            setShowModal(false)
            setSelectedCase(null)
          }}
        />
      )}
    </div>
  )
}
