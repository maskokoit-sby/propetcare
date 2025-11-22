"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface RawatInapListProps {
  filterStatus: string
  onEdit: (caseItem: any) => void
}

const mockCases = [
  {
    id: 1,
    pet: "Bonny",
    owner: "Tono Sudarno",
    phone: "08888999000",
    email: "tono@email.com",
    checkInDate: "2024-11-18",
    checkOutDate: null,
    reason: "Fraktur tulang kaki belakang",
    status: "Dalam Perawatan",
    tokenId: "TOKEN-BONNY-2024-001",
    notes: "Sedang dalam proses penyembuhan, pembedahan selesai",
  },
  {
    id: 2,
    pet: "Luna",
    owner: "Siti Nurhaliza",
    phone: "08777666555",
    email: "siti@email.com",
    checkInDate: "2024-11-15",
    checkOutDate: "2024-11-20",
    reason: "Operasi steril",
    status: "Pulang",
    tokenId: "TOKEN-LUNA-2024-002",
    notes: "Pulang dengan kondisi stabil, perawatan lanjutan di rumah",
  },
  {
    id: 3,
    pet: "Charlie",
    owner: "Hendra Kusuma",
    phone: "08666555444",
    email: "hendra@email.com",
    checkInDate: "2024-11-19",
    checkOutDate: null,
    reason: "Gastroenteritis akut",
    status: "Dirawat",
    tokenId: "TOKEN-CHARLIE-2024-003",
    notes: "Monitor cairan dan nutrisi, obat sudah diberikan",
  },
]

export default function RawatInapList({ filterStatus, onEdit }: RawatInapListProps) {
  const [copiedToken, setCopiedToken] = useState<string | null>(null)

  const filtered = mockCases.filter((c) => filterStatus === "all" || c.status === filterStatus)

  const copyToClipboard = (token: string) => {
    const baseUrl = typeof window !== "undefined" ? window.location.origin : ""
    const fullLink = `${baseUrl}/rawat-inap/${token}`
    navigator.clipboard.writeText(fullLink)
    setCopiedToken(token)
    setTimeout(() => setCopiedToken(null), 2000)
  }

  if (filtered.length === 0) {
    return (
      <Card className="rounded-xl border-0 shadow-sm">
        <CardContent className="pt-8 pb-8">
          <div className="text-center">
            <p className="text-muted-foreground">Tidak ada kasus rawat inap</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      {filtered.map((caseItem) => (
        <Card key={caseItem.id} className="rounded-xl border-0 shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="pt-6">
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-lg text-foreground">{caseItem.pet}</h3>
                  <p className="text-sm text-muted-foreground">{caseItem.owner}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    caseItem.status === "Pulang"
                      ? "bg-gray-100 text-gray-700"
                      : caseItem.status === "Dalam Perawatan"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-orange-100 text-orange-700"
                  }`}
                >
                  {caseItem.status}
                </span>
              </div>

              {/* Case Info */}
              <div className="bg-slate-50 p-3 rounded-lg space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Alasan:</span>
                  <span className="font-medium text-foreground">{caseItem.reason}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Check-in:</span>
                  <span className="font-medium text-foreground">{caseItem.checkInDate}</span>
                </div>
                {caseItem.checkOutDate && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Check-out:</span>
                    <span className="font-medium text-foreground">{caseItem.checkOutDate}</span>
                  </div>
                )}
              </div>

              {/* Notes */}
              <p className="text-sm text-foreground p-3 bg-slate-50 rounded-lg">{caseItem.notes}</p>

              {/* Token */}
              <div className="bg-primary/10 p-3 rounded-lg">
                <p className="text-xs font-medium text-muted-foreground mb-2">LINK AKSES PELANGGAN</p>
                <div className="flex items-center gap-2">
                  <code className="flex-1 text-xs bg-white p-2 rounded border border-border font-mono text-foreground truncate">
                    {caseItem.tokenId}
                  </code>
                  <Button
                    onClick={() => copyToClipboard(caseItem.tokenId)}
                    size="sm"
                    variant="outline"
                    className="rounded-lg whitespace-nowrap"
                  >
                    {copiedToken === caseItem.tokenId ? "Tersalin" : "Salin"}
                  </Button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <a
                  href={`https://wa.me/${caseItem.phone.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-3 py-2 bg-green-500 text-white rounded-lg text-sm font-medium hover:bg-green-600 transition-colors text-center"
                >
                  WhatsApp
                </a>
                <Button onClick={() => onEdit(caseItem)} variant="outline" className="flex-1 rounded-lg">
                  Edit
                </Button>
                {caseItem.status === "Dalam Perawatan" && (
                  <Button
                    className="flex-1 bg-primary hover:bg-primary/90 text-black rounded-lg"
                    onClick={() => console.log("Add Update")}
                  >
                    Tambah Update
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
