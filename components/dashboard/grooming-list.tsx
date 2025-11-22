"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface GroomingListProps {
  filterStatus: string
  onEdit: (session: any) => void
}

const mockSessions = [
  {
    id: 1,
    pet: "Max",
    owner: "Budi Santoso",
    phone: "08123456789",
    date: "2024-11-20",
    checkInTime: "09:00",
    checkOutTime: "11:30",
    serviceType: "Full Grooming",
    weight: "28 kg",
    status: "Selesai",
    notes: "Grooming standar dengan mandi dan potongan rambut",
    beforePhotos: ["photo1.jpg"],
    afterPhotos: ["photo2.jpg", "photo3.jpg"],
  },
  {
    id: 2,
    pet: "Bella",
    owner: "Rina Putri",
    phone: "08444333222",
    date: "2024-11-20",
    checkInTime: "12:00",
    checkOutTime: null,
    serviceType: "Bath Only",
    weight: "15 kg",
    status: "Sedang Proses",
    notes: "Hanya mandi dengan shampoo premium",
    beforePhotos: [],
    afterPhotos: [],
  },
  {
    id: 3,
    pet: "Milo",
    owner: "Yuni Astuti",
    phone: "08999111222",
    date: "2024-11-20",
    checkInTime: "14:00",
    checkOutTime: null,
    serviceType: "Hair Trim",
    weight: "8 kg",
    status: "Menunggu",
    notes: "Potongan rambut profesional",
    beforePhotos: [],
    afterPhotos: [],
  },
]

export default function GroomingList({ filterStatus, onEdit }: GroomingListProps) {
  const filtered = mockSessions.filter((s) => filterStatus === "all" || s.status === filterStatus)

  if (filtered.length === 0) {
    return (
      <Card className="rounded-xl border-0 shadow-sm">
        <CardContent className="pt-8 pb-8">
          <div className="text-center">
            <p className="text-muted-foreground">Tidak ada sesi grooming</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      {filtered.map((session) => (
        <Card key={session.id} className="rounded-xl border-0 shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="pt-6">
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-lg text-foreground">{session.pet}</h3>
                  <p className="text-sm text-muted-foreground">
                    {session.owner} • {session.weight}
                  </p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    session.status === "Selesai"
                      ? "bg-green-100 text-green-700"
                      : session.status === "Sedang Proses"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {session.status}
                </span>
              </div>

              {/* Service Info */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xs font-medium text-muted-foreground">LAYANAN</p>
                  <p className="text-sm font-medium text-foreground mt-1">{session.serviceType}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">WAKTU</p>
                  <p className="text-sm font-medium text-foreground mt-1">
                    {session.checkInTime}
                    {session.checkOutTime ? ` - ${session.checkOutTime}` : " - Proses"}
                  </p>
                </div>
              </div>

              {/* Notes */}
              <p className="text-sm text-foreground p-3 bg-slate-50 rounded-lg">{session.notes}</p>

              {/* Actions */}
              <div className="flex gap-2">
                <a
                  href={`https://wa.me/${session.phone.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-3 py-2 bg-green-500 text-white rounded-lg text-sm font-medium hover:bg-green-600 transition-colors text-center"
                >
                  WhatsApp
                </a>
                <Button onClick={() => onEdit(session)} variant="outline" className="flex-1 rounded-lg">
                  Edit
                </Button>
                {session.status === "Selesai" && (
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
