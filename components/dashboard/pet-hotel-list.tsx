"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface PetHotelListProps {
  filterStatus: string
  onEdit: (booking: any) => void
}

const mockBookings = [
  {
    id: 1,
    pet: "Buddy",
    owner: "Ahmad Wijaya",
    phone: "08555666777",
    email: "ahmad@email.com",
    checkInDate: "2024-11-20",
    checkOutDate: "2024-11-23",
    roomType: "Deluxe",
    roomNumber: "R-05",
    dailyRate: 250000,
    status: "Checked In",
    tokenId: "TOKEN-BUDDY-2024-001",
    notes: "Hewan aktif, suka bermain. Makan daging mentah.",
  },
  {
    id: 2,
    pet: "Coco",
    owner: "Doni Hermawan",
    phone: "08555777888",
    email: "doni@email.com",
    checkInDate: "2024-11-25",
    checkOutDate: "2024-11-27",
    roomType: "Premium",
    roomNumber: "R-02",
    dailyRate: 300000,
    status: "Booked",
    tokenId: "TOKEN-COCO-2024-002",
    notes: "Hewan tenang, bisa diberikan makanan kalengan",
  },
]

export default function PetHotelList({ filterStatus, onEdit }: PetHotelListProps) {
  const [copiedToken, setCopiedToken] = useState<string | null>(null)

  const filtered = mockBookings.filter((b) => filterStatus === "all" || b.status === filterStatus)

  const copyToClipboard = (token: string) => {
    const baseUrl = typeof window !== "undefined" ? window.location.origin : ""
    const fullLink = `${baseUrl}/pet-hotel/${token}`
    navigator.clipboard.writeText(fullLink)
    setCopiedToken(token)
    setTimeout(() => setCopiedToken(null), 2000)
  }

  if (filtered.length === 0) {
    return (
      <Card className="rounded-xl border-0 shadow-sm">
        <CardContent className="pt-8 pb-8">
          <div className="text-center">
            <p className="text-muted-foreground">Tidak ada reservasi pet hotel</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      {filtered.map((booking) => {
        const totalCost =
          (booking.dailyRate * (new Date(booking.checkOutDate).getTime() - new Date(booking.checkInDate).getTime())) /
          (1000 * 60 * 60 * 24)
        return (
          <Card key={booking.id} className="rounded-xl border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-lg text-foreground">{booking.pet}</h3>
                    <p className="text-sm text-muted-foreground">{booking.owner}</p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      booking.status === "Checked Out"
                        ? "bg-gray-100 text-gray-700"
                        : booking.status === "Checked In"
                          ? "bg-green-100 text-green-700"
                          : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {booking.status}
                  </span>
                </div>

                {/* Room & Dates */}
                <div className="bg-slate-50 p-3 rounded-lg space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Kamar:</span>
                    <span className="font-medium text-foreground">
                      {booking.roomType} - {booking.roomNumber}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Check-in:</span>
                    <span className="font-medium text-foreground">{booking.checkInDate}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Check-out:</span>
                    <span className="font-medium text-foreground">{booking.checkOutDate}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Total Biaya:</span>
                    <span className="font-bold text-primary">Rp {totalCost.toLocaleString("id-ID")}</span>
                  </div>
                </div>

                {/* Notes */}
                <p className="text-sm text-foreground p-3 bg-slate-50 rounded-lg">{booking.notes}</p>

                {/* Token */}
                <div className="bg-primary/10 p-3 rounded-lg">
                  <p className="text-xs font-medium text-muted-foreground mb-2">LINK AKSES PELANGGAN</p>
                  <div className="flex items-center gap-2">
                    <code className="flex-1 text-xs bg-white p-2 rounded border border-border font-mono text-foreground truncate">
                      {booking.tokenId}
                    </code>
                    <Button
                      onClick={() => copyToClipboard(booking.tokenId)}
                      size="sm"
                      variant="outline"
                      className="rounded-lg whitespace-nowrap"
                    >
                      {copiedToken === booking.tokenId ? "Tersalin" : "Salin"}
                    </Button>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <a
                    href={`https://wa.me/${booking.phone.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-3 py-2 bg-green-500 text-white rounded-lg text-sm font-medium hover:bg-green-600 transition-colors text-center"
                  >
                    WhatsApp
                  </a>
                  <Button onClick={() => onEdit(booking)} variant="outline" className="flex-1 rounded-lg">
                    Edit
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
