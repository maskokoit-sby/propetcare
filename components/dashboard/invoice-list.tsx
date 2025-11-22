"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface InvoiceListProps {
  filterStatus: string
}

const mockInvoices = [
  {
    id: 1,
    invoiceNumber: "INV-2024-001",
    pet: "Max",
    owner: "Budi Santoso",
    service: "Grooming",
    date: "2024-11-20",
    amount: 350000,
    status: "Paid",
    paidDate: "2024-11-20",
    items: [{ description: "Full Grooming", qty: 1, price: 350000 }],
  },
  {
    id: 2,
    invoiceNumber: "INV-2024-002",
    pet: "Bonny",
    owner: "Tono Sudarno",
    service: "Rawat Inap",
    date: "2024-11-18",
    amount: 8500000,
    status: "Pending",
    paidDate: null,
    items: [
      { description: "Operasi Fraktur", qty: 1, price: 2000000 },
      { description: "Akomodasi Kamar ICU", qty: 2, price: 500000 },
      { description: "Antibiotik Injeksi", qty: 3, price: 150000 },
      { description: "Konsultasi Dokter", qty: 2, price: 300000 },
      { description: "Perawatan Luka", qty: 2, price: 200000 },
    ],
  },
  {
    id: 3,
    invoiceNumber: "INV-2024-003",
    pet: "Luna",
    owner: "Siti Nurhaliza",
    service: "Cek Kesehatan",
    date: "2024-11-19",
    amount: 500000,
    status: "Paid",
    paidDate: "2024-11-19",
    items: [{ description: "Konsultasi & Vaksinasi", qty: 1, price: 500000 }],
  },
  {
    id: 4,
    invoiceNumber: "INV-2024-004",
    pet: "Charlie",
    owner: "Hendra Kusuma",
    service: "Pet Hotel",
    date: "2024-11-15",
    amount: 900000,
    status: "Overdue",
    paidDate: null,
    items: [{ description: "Pet Hotel 3 Malam (Premium)", qty: 3, price: 300000 }],
  },
]

export default function InvoiceList({ filterStatus }: InvoiceListProps) {
  const [expandedInvoice, setExpandedInvoice] = useState<number | null>(null)

  const filtered = mockInvoices.filter((inv) => filterStatus === "all" || inv.status === filterStatus)

  if (filtered.length === 0) {
    return (
      <Card className="rounded-xl border-0 shadow-sm">
        <CardContent className="pt-8 pb-8">
          <div className="text-center">
            <p className="text-muted-foreground">Tidak ada invoice</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-3">
      {filtered.map((invoice) => (
        <Card
          key={invoice.id}
          className="rounded-xl border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          onClick={() => setExpandedInvoice(expandedInvoice === invoice.id ? null : invoice.id)}
        >
          <CardContent className="pt-6">
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-medium text-muted-foreground">{invoice.invoiceNumber}</p>
                  <h3 className="font-bold text-lg text-foreground mt-1">{invoice.pet}</h3>
                  <p className="text-sm text-muted-foreground">
                    {invoice.owner} • {invoice.service}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-xl text-primary">Rp {invoice.amount.toLocaleString("id-ID")}</p>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-2 ${
                      invoice.status === "Paid"
                        ? "bg-green-100 text-green-700"
                        : invoice.status === "Overdue"
                          ? "bg-red-100 text-red-700"
                          : invoice.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {invoice.status}
                  </span>
                </div>
              </div>

              {/* Date Info */}
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Invoice: {invoice.date}</span>
                {invoice.paidDate && <span>Terbayar: {invoice.paidDate}</span>}
              </div>

              {/* Expanded Details */}
              {expandedInvoice === invoice.id && (
                <>
                  <div className="border-t border-border pt-4">
                    <p className="text-sm font-medium text-foreground mb-3">Detail Item:</p>
                    <div className="space-y-2">
                      {invoice.items.map((item, idx) => (
                        <div key={idx} className="flex justify-between text-sm bg-slate-50 p-2 rounded">
                          <span className="text-foreground">
                            {item.description} x {item.qty}
                          </span>
                          <span className="font-medium text-foreground">
                            Rp {(item.price * item.qty).toLocaleString("id-ID")}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-4 border-t border-border">
                    <Button
                      variant="outline"
                      className="flex-1 rounded-lg bg-transparent"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Lihat Detail
                    </Button>
                    {invoice.status === "Pending" && (
                      <Button
                        className="flex-1 bg-green-500 hover:bg-green-600 text-white rounded-lg"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Mark as Paid
                      </Button>
                    )}
                    <Button
                      className="flex-1 bg-primary hover:bg-primary/90 text-black rounded-lg"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Print PDF
                    </Button>
                  </div>
                </>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
