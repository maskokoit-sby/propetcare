"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

interface PageProps {
  params: {
    token: string
  }
}

// Mock data for inpatient updates
const mockUpdates = [
  {
    id: 1,
    staffName: "Dr. Budi",
    staffInitial: "DB",
    timestamp: "2024-11-20 14:30",
    notes: "Bonny sudah makan dengan baik, minum cukup. Luka operasi terlihat normal, tidak ada pembengkakan.",
    photos: ["photo1.jpg"],
  },
  {
    id: 2,
    staffName: "Siti (Perawat)",
    staffInitial: "ST",
    timestamp: "2024-11-20 10:15",
    notes: "Pemberian obat antibiotik sesuai jadwal. Bonny terlihat nyaman dan responsif.",
    photos: ["photo2.jpg", "photo3.jpg"],
  },
  {
    id: 3,
    staffName: "Dr. Budi",
    staffInitial: "DB",
    timestamp: "2024-11-19 16:45",
    notes: "Operasi fraktur tulang belakang selesai dengan baik. Perlu monitoring pembengkakan 48 jam ke depan.",
    photos: [],
  },
]

const mockInvoice = [
  { item: "Operasi Fraktur", quantity: 1, price: 2000000 },
  { item: "Akomodasi Kamar ICU", quantity: 2, price: 500000 },
  { item: "Antibiotik Injeksi", quantity: 3, price: 150000 },
  { item: "Konsultasi Dokter", quantity: 2, price: 300000 },
  { item: "Perawatan Luka", quantity: 2, price: 200000 },
]

export default function RawatInapCustomerPage({ params }: PageProps) {
  const token = params.token

  // In real implementation, verify token validity here
  const isValidToken = true

  if (!isValidToken) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="rounded-xl border-0 shadow-sm max-w-md">
          <CardContent className="pt-8 pb-8 text-center">
            <p className="text-lg font-bold text-foreground mb-2">Token Tidak Valid</p>
            <p className="text-muted-foreground mb-6">
              Link akses yang Anda gunakan tidak valid atau sudah kedaluwarsa.
            </p>
            <Link href="/" className="text-primary hover:underline">
              Kembali ke Beranda
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

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
              <p className="text-xs text-muted-foreground">Akses Pembaruan Rawat Inap</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Token: <code className="bg-white px-2 py-1 rounded text-xs">{token}</code>
          </p>
        </div>

        {/* Pet Info */}
        <Card className="rounded-xl border-0 shadow-sm mb-6">
          <CardHeader>
            <CardTitle>Informasi Pasien</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground">NAMA HEWAN</p>
                  <p className="text-lg font-bold text-foreground mt-1">Bonny</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">PEMILIK</p>
                  <p className="text-lg font-bold text-foreground mt-1">Tono Sudarno</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground">CHECK-IN</p>
                  <p className="text-sm font-medium text-foreground mt-1">18 Nov 2024</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">STATUS</p>
                  <p className="text-sm font-medium text-blue-700 mt-1">Dalam Perawatan</p>
                </div>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">ALASAN PERAWATAN</p>
                <p className="text-sm text-foreground mt-1">Fraktur tulang kaki belakang</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Updates Thread */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-foreground mb-4">Pembaruan Perawatan</h2>
          <div className="space-y-4">
            {mockUpdates.map((update, idx) => (
              <Card key={update.id} className="rounded-xl border-0 shadow-sm">
                <CardContent className="pt-6">
                  {/* Thread Line */}
                  {idx < mockUpdates.length - 1 && (
                    <div className="absolute left-[2.35rem] top-16 h-12 w-0.5 bg-border -ml-4"></div>
                  )}

                  <div className="flex gap-4">
                    {/* Avatar */}
                    <div className="flex flex-col items-center gap-2 relative">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-black font-bold text-sm">
                        {update.staffInitial}
                      </div>
                      {/* Thread connector */}
                      {idx < mockUpdates.length - 1 && <div className="w-0.5 h-12 bg-border"></div>}
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-4">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-bold text-foreground">{update.staffName}</p>
                        <span className="text-xs text-muted-foreground">{update.timestamp}</span>
                      </div>

                      <p className="text-sm text-foreground mb-3 bg-slate-50 p-3 rounded-lg">{update.notes}</p>

                      {/* Photos */}
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

        {/* Running Invoice */}
        <Card className="rounded-xl border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Invoice Layanan</CardTitle>
            <CardDescription>Daftar biaya layanan yang telah diberikan</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mockInvoice.map((inv, idx) => (
                <div key={idx} className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                  <div>
                    <p className="font-medium text-foreground">{inv.item}</p>
                    <p className="text-xs text-muted-foreground">Qty: {inv.quantity}</p>
                  </div>
                  <p className="font-bold text-primary">Rp {(inv.price * inv.quantity).toLocaleString("id-ID")}</p>
                </div>
              ))}

              {/* Total */}
              <div className="border-t border-border pt-3 mt-3">
                <div className="flex justify-between items-center p-3 bg-primary/10 rounded-lg">
                  <p className="font-bold text-foreground">TOTAL</p>
                  <p className="font-bold text-primary text-lg">
                    Rp {mockInvoice.reduce((sum, inv) => sum + inv.price * inv.quantity, 0).toLocaleString("id-ID")}
                  </p>
                </div>
              </div>
            </div>

            <p className="text-xs text-muted-foreground mt-4">
              * Invoice akan diperbarui dengan biaya tambahan seiring perawatan. Pembayaran dapat dilakukan saat hewan
              pulang.
            </p>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>Pro Pet Care - Rawat Inap Update</p>
          <p>Hubungi kami untuk informasi lebih lanjut</p>
        </div>
      </div>
    </div>
  )
}
