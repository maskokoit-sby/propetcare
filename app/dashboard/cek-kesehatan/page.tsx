"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import CekKesehatanList from "@/components/dashboard/cek-kesehatan-list"
import CekKesehatanModal from "@/components/dashboard/cek-kesehatan-modal"

export default function CekKesehatanPage() {
  const [showModal, setShowModal] = useState(false)
  const [selectedRecord, setSelectedRecord] = useState<any>(null)
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Cek Kesehatan</h1>
          <p className="text-muted-foreground mt-2">Kelola catatan kesehatan dan pemeriksaan hewan</p>
        </div>
        <Button
          onClick={() => {
            setSelectedRecord(null)
            setShowModal(true)
          }}
          className="bg-primary hover:bg-primary/90 text-black rounded-lg"
        >
          + Tambah Pemeriksaan
        </Button>
      </div>

      {/* Search */}
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Cari nama hewan atau pemilik..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 px-4 py-2 rounded-lg border border-border bg-white text-foreground"
        />
      </div>

      {/* Records List */}
      <CekKesehatanList
        searchTerm={searchTerm}
        onEdit={(record) => {
          setSelectedRecord(record)
          setShowModal(true)
        }}
      />

      {showModal && (
        <CekKesehatanModal
          record={selectedRecord}
          onClose={() => {
            setShowModal(false)
            setSelectedRecord(null)
          }}
          onSave={() => {
            setShowModal(false)
            setSelectedRecord(null)
          }}
        />
      )}
    </div>
  )
}
