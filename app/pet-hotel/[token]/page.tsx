"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface PageProps {
  params: {
    token: string
  }
}

// Mock data for pet hotel updates
const mockHotelUpdates = [
  {
    id: 1,
    staffName: "Sinta (Staff Hotel)",
    staffInitial: "ST",
    timestamp: "2024-11-20 15:30",
    notes: "Buddy makan dengan nafsu yang baik. Habis bermain di outdoor area, terlihat senang dan energik.",
    photos: ["meal.jpg"],
  },
  {
    id: 2,
    staffName: "Rinto (Staff Hotel)",
    staffInitial: "RT",
    timestamp: "2024-11-20 11:00",
    notes: "Check-in selesai. Buddy sudah diberikan tur ke kamarnya dan sudah terbiasa dengan lingkungan.",
    photos: [],
  },
]

export default function PetHotelCustomerPage({ params }: PageProps) {
  const token = params.token

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-black font-bold">
              P
            </div>
            <div>
              <h1 className="font-bold text-foreground">Pro Pet Care</h1>
              <p className="text-xs text-muted-foreground">Akses Pet Hotel</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Token: <code className="bg-white px-2 py-1 rounded text-xs">{token}</code>
          </p>
        </div>

        {/* Pet Info */}
        <Card className="rounded-xl border-0 shadow-sm mb-6">
          <CardHeader>
            <CardTitle>Informasi Hewan</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground">NAMA HEWAN</p>
                  <p className="text-lg font-bold text-foreground mt-1">Buddy</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">PEMILIK</p>
                  <p className="text-lg font-bold text-foreground mt-1">Ahmad Wijaya</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground">CHECK-IN</p>
                  <p className="text-sm font-medium text-foreground mt-1">20 Nov 2024</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">KAMAR</p>
                  <p className="text-sm font-medium text-foreground mt-1">Deluxe - R-05</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Updates */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-foreground mb-4">Pembaruan Pet Hotel</h2>
          <div className="space-y-4">
            {mockHotelUpdates.map((update, idx) => (
              <Card key={update.id} className="rounded-xl border-0 shadow-sm">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center gap-2 relative">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-black font-bold text-sm">
                        {update.staffInitial}
                      </div>
                      {idx < mockHotelUpdates.length - 1 && <div className="w-0.5 h-12 bg-border"></div>}
                    </div>

                    <div className="flex-1 pb-4">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-bold text-foreground">{update.staffName}</p>
                        <span className="text-xs text-muted-foreground">{update.timestamp}</span>
                      </div>

                      <p className="text-sm text-foreground mb-3 bg-slate-50 p-3 rounded-lg">{update.notes}</p>

                      {update.photos.length > 0 && (
                        <div className="grid grid-cols-2 gap-2">
                          {update.photos.map((photo, photoIdx) => (
                            <div
                              key={photoIdx}
                              className="w-full aspect-square bg-slate-200 rounded-lg flex items-center justify-center text-muted-foreground text-sm"
                            >
                              [Foto: {photo}]
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Info Box */}
        <Card className="rounded-xl border-0 shadow-sm">
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">
              Pembaruan terbaru dari staff Pro Pet Care menunjukkan hewan Anda dalam kondisi baik dan senang di
              fasilitas kami. Untuk pertanyaan lebih lanjut, silakan hubungi kami langsung.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
