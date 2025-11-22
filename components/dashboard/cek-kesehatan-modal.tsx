"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface CekKesehatanModalProps {
  record: any
  onClose: () => void
  onSave: () => void
}

export default function CekKesehatanModal({ record, onClose, onSave }: CekKesehatanModalProps) {
  const [formData, setFormData] = useState(
    record || {
      pet: "",
      owner: "",
      species: "",
      breed: "",
      diagnosis: "",
      medications: "",
      vaccination: "",
      labResults: "",
      notes: "",
    },
  )

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-border sticky top-0 bg-white rounded-t-xl">
          <h2 className="text-xl font-bold text-foreground">
            {record ? "Edit Pemeriksaan" : "Tambah Pemeriksaan Baru"}
          </h2>
        </div>

        <div className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Nama Hewan *</label>
              <Input
                type="text"
                placeholder="Nama hewan"
                value={formData.pet}
                onChange={(e) => setFormData({ ...formData, pet: e.target.value })}
                className="rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Pemilik *</label>
              <Input
                type="text"
                placeholder="Nama pemilik"
                value={formData.owner}
                onChange={(e) => setFormData({ ...formData, owner: e.target.value })}
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Spesies</label>
              <Input
                type="text"
                placeholder="Anjing, Kucing, dll"
                value={formData.species}
                onChange={(e) => setFormData({ ...formData, species: e.target.value })}
                className="rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Ras</label>
              <Input
                type="text"
                placeholder="Ras hewan"
                value={formData.breed}
                onChange={(e) => setFormData({ ...formData, breed: e.target.value })}
                className="rounded-lg"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Diagnosis *</label>
            <textarea
              placeholder="Hasil diagnosis pemeriksaan"
              value={formData.diagnosis}
              onChange={(e) => setFormData({ ...formData, diagnosis: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-border bg-white text-foreground resize-none"
              rows={3}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Obat-obatan</label>
            <Input
              type="text"
              placeholder="Pisahkan dengan koma (contoh: Obat A, Obat B)"
              value={formData.medications}
              onChange={(e) => setFormData({ ...formData, medications: e.target.value })}
              className="rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Vaksinasi</label>
            <Input
              type="text"
              placeholder="Jenis dan tanggal vaksinasi"
              value={formData.vaccination}
              onChange={(e) => setFormData({ ...formData, vaccination: e.target.value })}
              className="rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Hasil Lab</label>
            <textarea
              placeholder="Hasil pemeriksaan laboratorium"
              value={formData.labResults}
              onChange={(e) => setFormData({ ...formData, labResults: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-border bg-white text-foreground resize-none"
              rows={2}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Catatan</label>
            <textarea
              placeholder="Catatan tambahan"
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-border bg-white text-foreground resize-none"
              rows={2}
            />
          </div>
        </div>

        <div className="p-6 border-t border-border flex gap-3 sticky bottom-0 bg-white rounded-b-xl">
          <Button onClick={onClose} variant="outline" className="flex-1 rounded-lg bg-transparent">
            Batal
          </Button>
          <Button onClick={onSave} className="flex-1 bg-primary hover:bg-primary/90 text-black rounded-lg">
            Simpan
          </Button>
        </div>
      </div>
    </div>
  )
}
