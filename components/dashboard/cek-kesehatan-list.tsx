"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface CekKesehatanListProps {
  searchTerm: string
  onEdit: (record: any) => void
}

const mockRecords = [
  {
    id: 1,
    pet: "Bonny",
    owner: "Tono Sudarno",
    species: "Anjing",
    breed: "Golden Retriever",
    date: "2024-11-20",
    diagnosis: "Alergi makanan",
    medications: ["Cetirizine 10mg", "Shampoo khusus"],
    vaccination: "Rabies (2023)",
    labResults: "Normal",
    vet: "Dr. Budi",
    notes: "Kulit terlihat merah, resep shampoo medis diberikan",
  },
  {
    id: 2,
    pet: "Charlie",
    owner: "Hendra Kusuma",
    species: "Kucing",
    breed: "Persia",
    date: "2024-11-19",
    diagnosis: "Vaksinasi tahunan",
    medications: [],
    vaccination: "FVRCP, Rabies (2024)",
    labResults: "Tidak ada",
    vet: "Dr. Siti",
    notes: "Vaksinasi berhasil, hewan sehat",
  },
  {
    id: 3,
    pet: "Duke",
    owner: "Feri Gunawan",
    species: "Anjing",
    breed: "German Shepherd",
    date: "2024-11-18",
    diagnosis: "Pemeriksaan rutin",
    medications: [],
    vaccination: "Up to date",
    labResults: "Normal",
    vet: "Dr. Budi",
    notes: "Hewan dalam kondisi sehat sempurna",
  },
]

export default function CekKesehatanList({ searchTerm, onEdit }: CekKesehatanListProps) {
  const filtered = mockRecords.filter(
    (r) =>
      r.pet.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.owner.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  if (filtered.length === 0) {
    return (
      <Card className="rounded-xl border-0 shadow-sm">
        <CardContent className="pt-8 pb-8">
          <div className="text-center">
            <p className="text-muted-foreground">Tidak ada catatan pemeriksaan</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      {filtered.map((record) => (
        <Card key={record.id} className="rounded-xl border-0 shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="pt-6">
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-lg text-foreground">{record.pet}</h3>
                  <p className="text-sm text-muted-foreground">
                    {record.owner} • {record.breed}
                  </p>
                </div>
                <span className="text-xs text-muted-foreground">{record.date}</span>
              </div>

              {/* Diagnosis */}
              <div className="bg-slate-50 p-3 rounded-lg">
                <p className="text-xs font-medium text-muted-foreground">DIAGNOSIS</p>
                <p className="text-sm font-medium text-foreground mt-1">{record.diagnosis}</p>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xs font-medium text-muted-foreground">VAKSINASI</p>
                  <p className="text-sm text-foreground mt-1">{record.vaccination}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">LAB RESULTS</p>
                  <p className="text-sm text-foreground mt-1">{record.labResults}</p>
                </div>
              </div>

              {/* Medications */}
              {record.medications.length > 0 && (
                <div>
                  <p className="text-xs font-medium text-muted-foreground">OBAT</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {record.medications.map((med, idx) => (
                      <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {med}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Notes */}
              <p className="text-sm text-foreground p-3 bg-slate-50 rounded-lg">{record.notes}</p>

              {/* Actions */}
              <div className="flex gap-2">
                <Button onClick={() => onEdit(record)} variant="outline" className="flex-1 rounded-lg">
                  Edit
                </Button>
                <Button className="flex-1 bg-primary hover:bg-primary/90 text-black rounded-lg">Print Invoice</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
