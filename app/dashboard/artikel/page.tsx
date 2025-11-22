"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import ArtikelList from "@/components/dashboard/artikel-list"
import ArtikelModal from "@/components/dashboard/artikel-modal"

export default function ArtikelPage() {
  const [showModal, setShowModal] = useState(false)
  const [selectedArticle, setSelectedArticle] = useState<any>(null)
  const [filterStatus, setFilterStatus] = useState("all")

  const statuses = ["all", "Draft", "Published", "Archived"]

  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Artikel</h1>
          <p className="text-muted-foreground mt-2">Kelola konten artikel dan edukasi</p>
        </div>
        <Button
          onClick={() => {
            setSelectedArticle(null)
            setShowModal(true)
          }}
          className="bg-primary hover:bg-primary/90 text-black rounded-lg"
        >
          + Buat Artikel
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

      {/* Articles List */}
      <ArtikelList
        filterStatus={filterStatus}
        onEdit={(article) => {
          setSelectedArticle(article)
          setShowModal(true)
        }}
      />

      {showModal && (
        <ArtikelModal
          article={selectedArticle}
          onClose={() => {
            setShowModal(false)
            setSelectedArticle(null)
          }}
          onSave={() => {
            setShowModal(false)
            setSelectedArticle(null)
          }}
        />
      )}
    </div>
  )
}
