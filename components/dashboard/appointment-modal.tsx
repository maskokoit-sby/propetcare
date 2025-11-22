"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface AppointmentModalProps {
  appointment: any
  onClose: () => void
  onSave: () => void
}

export default function AppointmentModal({ appointment, onClose, onSave }: AppointmentModalProps) {
  const [formData, setFormData] = useState(
    appointment || {
      nama: "",
      phone: "",
      email: "",
      service: "Cek Kesehatan",
      date: "",
      time: "",
      petName: "",
      notes: "",
    },
  )

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-border sticky top-0 bg-white rounded-t-xl">
          <h2 className="text-xl font-bold text-foreground">{appointment ? "Edit Jadwal" : "Tambah Jadwal Baru"}</h2>
        </div>

        <div className="p-6 space-y-4">
          {/* Nama */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Nama Pemilik *</label>
            <Input
              type="text"
              placeholder="Nama pemilik"
              value={formData.nama}
              onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
              className="rounded-lg"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">No. Telepon *</label>
            <Input
              type="tel"
              placeholder="08xxxxxxxxxx"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="rounded-lg"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Email (Opsional)</label>
            <Input
              type="email"
              placeholder="email@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="rounded-lg"
            />
          </div>

          {/* Service */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Jenis Layanan *</label>
            <select
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-border bg-white text-foreground"
            >
              <option value="Cek Kesehatan">Cek Kesehatan</option>
              <option value="Grooming">Grooming</option>
              <option value="Pet Hotel">Pet Hotel</option>
              <option value="Home Care">Home Care</option>
            </select>
          </div>

          {/* Pet Name */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Nama Hewan *</label>
            <Input
              type="text"
              placeholder="Nama hewan peliharaan"
              value={formData.petName}
              onChange={(e) => setFormData({ ...formData, petName: e.target.value })}
              className="rounded-lg"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Tanggal *</label>
            <Input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="rounded-lg"
            />
          </div>

          {/* Time */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Waktu *</label>
            <Input
              type="time"
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              className="rounded-lg"
            />
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Catatan</label>
            <textarea
              placeholder="Catatan tambahan"
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
