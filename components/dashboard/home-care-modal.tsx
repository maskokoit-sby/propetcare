"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface HomeCareModalProps {
  visit: any
  onClose: () => void
  onSave: () => void
}

export default function HomeCareModal({ visit, onClose, onSave }: HomeCareModalProps) {
  const [formData, setFormData] = useState(
    visit || {
      pet: "",
      owner: "",
      phone: "",
      date: "",
      time: "",
      duration: "",
      location: "",
      caretaker: "",
      status: "Dijadwalkan",
      activities: "",
      notes: "",
    },
  )

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-border sticky top-0 bg-white rounded-t-xl">
          <h2 className="text-xl font-bold text-foreground">
            {visit ? "Edit Kunjungan Home Care" : "Tambah Kunjungan Home Care Baru"}
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
            <label className="block text-sm font-medium text-foreground mb-2">Lokasi *</label>
            <textarea
              placeholder="Alamat lengkap lokasi kunjungan"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-border bg-white text-foreground resize-none"
              rows={2}
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Tanggal</label>
              <Input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Waktu</label>
              <Input
                type="time"
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Durasi</label>
              <Input
                type="text"
                placeholder="1 jam"
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                className="rounded-lg"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Perawat</label>
            <select
              value={formData.caretaker}
              onChange={(e) => setFormData({ ...formData, caretaker: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-border bg-white text-foreground"
            >
              <option value="">Pilih Perawat</option>
              <option value="Sinta">Sinta</option>
              <option value="Rinto">Rinto</option>
              <option value="Tino">Tino</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Status</label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-border bg-white text-foreground"
            >
              <option>Dijadwalkan</option>
              <option>Sedang Proses</option>
              <option>Selesai</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Aktivitas</label>
            <textarea
              placeholder="Deskripsi aktivitas yang dilakukan"
              value={formData.activities}
              onChange={(e) => setFormData({ ...formData, activities: e.target.value })}
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
