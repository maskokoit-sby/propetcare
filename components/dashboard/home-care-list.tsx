"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface HomeCareListProps {
  filterStatus: string
  onEdit: (visit: any) => void
}

const mockVisits = [
  {
    id: 1,
    pet: "Milo",
    owner: "Yuni Astuti",
    phone: "08999111222",
    date: "2024-11-20",
    time: "10:00",
    duration: "1 jam",
    location: "Perumahan Alam Asri Blok C No. 15, Surabaya",
    caretaker: "Sinta",
    status: "Selesai",
    activities: "Pemberian makan 2x, minum, bermain, dan jalan-jalan",
    notes: "Hewan sangat antusias, makan dengan baik",
  },
  {
    id: 2,
    pet: "Coco",
    owner: "Doni Hermawan",
    phone: "08555777888",
    date: "2024-11-20",
    time: "14:00",
    duration: "1.5 jam",
    location: "Jl. Ketintang No. 25, Surabaya",
    caretaker: "Rinto",
    status: "Sedang Proses",
    activities: "Pemberian makan, minum, bermain, dan pemberian obat",
    notes: "Pemberian obat telah dilakukan sesuai jadwal",
  },
  {
    id: 3,
    pet: "Daisy",
    owner: "Ani Wijayanti",
    phone: "08666999111",
    date: "2024-11-21",
    time: "09:00",
    duration: "1 jam",
    location: "Komplek Green Park, Surabaya",
    caretaker: "Sinta",
    status: "Dijadwalkan",
    activities: "Pemberian makan, minum, dan bermain",
    notes: "-",
  },
]

export default function HomeCareList({ filterStatus, onEdit }: HomeCareListProps) {
  const filtered = mockVisits.filter((v) => filterStatus === "all" || v.status === filterStatus)

  if (filtered.length === 0) {
    return (
      <Card className="rounded-xl border-0 shadow-sm">
        <CardContent className="pt-8 pb-8">
          <div className="text-center">
            <p className="text-muted-foreground">Tidak ada kunjungan home care</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      {filtered.map((visit) => (
        <Card key={visit.id} className="rounded-xl border-0 shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="pt-6">
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-lg text-foreground">{visit.pet}</h3>
                  <p className="text-sm text-muted-foreground">{visit.owner}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    visit.status === "Selesai"
                      ? "bg-green-100 text-green-700"
                      : visit.status === "Sedang Proses"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {visit.status}
                </span>
              </div>

              {/* Visit Info */}
              <div className="bg-slate-50 p-3 rounded-lg space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Tanggal:</span>
                  <span className="font-medium text-foreground">
                    {visit.date} {visit.time}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Lokasi:</span>
                  <span className="font-medium text-foreground text-right">{visit.location}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Perawat:</span>
                  <span className="font-medium text-foreground">{visit.caretaker}</span>
                </div>
              </div>

              {/* Activities */}
              <div>
                <p className="text-xs font-medium text-muted-foreground mb-2">AKTIVITAS</p>
                <p className="text-sm text-foreground">{visit.activities}</p>
              </div>

              {/* Notes */}
              <p className="text-sm text-foreground p-3 bg-slate-50 rounded-lg">{visit.notes}</p>

              {/* Actions */}
              <div className="flex gap-2">
                <a
                  href={`https://wa.me/${visit.phone.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-3 py-2 bg-green-500 text-white rounded-lg text-sm font-medium hover:bg-green-600 transition-colors text-center"
                >
                  WhatsApp
                </a>
                <Button onClick={() => onEdit(visit)} variant="outline" className="flex-1 rounded-lg">
                  Edit
                </Button>
                {visit.status === "Selesai" && (
                  <Button className="flex-1 bg-primary hover:bg-primary/90 text-black rounded-lg">Print Invoice</Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
