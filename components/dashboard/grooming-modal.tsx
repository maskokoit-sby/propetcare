"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface GroomingModalProps {
  session: any
  onClose: () => void
  onSave: () => void
}

export default function GroomingModal({ session, onClose, onSave }: GroomingModalProps) {
  const [formData, setFormData] = useState(
    session || {
      pet: "",
      owner: "",
      phone: "",
      weight: "",
      serviceType: "Full Grooming",
      checkInTime: "",
      checkOutTime: "",
      status: "Menunggu",
      notes: "",
    },
  )

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-border sticky top-0 bg-white rounded-t-xl">
          <h2 className="text-xl font-bold text-foreground">
            {session ? "Edit Sesi Grooming" : "Tambah Sesi Grooming Baru"}
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
              <label className="block text-sm font-medium text-foreground mb-2">Berat (kg)</label>
              <Input
                type="text"
                placeholder="Contoh: 15 kg"
                value={formData.weight}
                onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                className="rounded-lg"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Jenis Layanan</label>
            <select
              value={formData.serviceType}
              onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-border bg-white text-foreground"
            >
              <option>Full Grooming</option>
              <option>Bath Only</option>
              <option>Hair Trim</option>
              <option>Nail Trim</option>
              <option>Ear Cleaning</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Check-in Time</label>
              <Input
                type="time"
                value={formData.checkInTime}
                onChange={(e) => setFormData({ ...formData, checkInTime: e.target.value })}
                className="rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Check-out Time</label>
              <Input
                type="time"
                value={formData.checkOutTime}
                onChange={(e) => setFormData({ ...formData, checkOutTime: e.target.value })}
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
              <option>Menunggu</option>
              <option>Sedang Proses</option>
              <option>Selesai</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Catatan</label>
            <textarea
              placeholder="Catatan tentang grooming"
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
