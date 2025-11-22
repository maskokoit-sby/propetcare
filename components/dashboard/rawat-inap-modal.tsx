"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface RawatInapModalProps {
  caseItem: any
  onClose: () => void
  onSave: () => void
}

export default function RawatInapModal({ caseItem, onClose, onSave }: RawatInapModalProps) {
  const [formData, setFormData] = useState(
    caseItem || {
      pet: "",
      owner: "",
      phone: "",
      email: "",
      checkInDate: "",
      checkOutDate: "",
      reason: "",
      status: "Dirawat",
      notes: "",
    },
  )

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-border sticky top-0 bg-white rounded-t-xl">
          <h2 className="text-xl font-bold text-foreground">
            {caseItem ? "Edit Rawat Inap" : "Tambah Rawat Inap Baru"}
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
              <label className="block text-sm font-medium text-foreground mb-2">Telepon</label>
              <Input
                type="tel"
                placeholder="08xxxxxxxxxx"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Email</label>
              <Input
                type="email"
                placeholder="email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="rounded-lg"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Alasan Rawat Inap *</label>
            <textarea
              placeholder="Alasan masuk perawatan inap"
              value={formData.reason}
              onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-border bg-white text-foreground resize-none"
              rows={2}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Tanggal Check-in *</label>
              <Input
                type="date"
                value={formData.checkInDate}
                onChange={(e) => setFormData({ ...formData, checkInDate: e.target.value })}
                className="rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Tanggal Check-out</label>
              <Input
                type="date"
                value={formData.checkOutDate}
                onChange={(e) => setFormData({ ...formData, checkOutDate: e.target.value })}
                className="rounded-lg"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Status</label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-border bg-white text-foreground"
            >
              <option>Dirawat</option>
              <option>Dalam Perawatan</option>
              <option>Pulih</option>
              <option>Pulang</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Catatan</label>
            <textarea
              placeholder="Catatan medis dan perawatan"
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-border bg-white text-foreground resize-none"
              rows={3}
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
