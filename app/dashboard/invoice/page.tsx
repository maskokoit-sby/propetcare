"use client"

import { useState } from "react"
import InvoiceList from "@/components/dashboard/invoice-list"

export default function InvoicePage() {
  const [filterStatus, setFilterStatus] = useState("all")

  const statuses = ["all", "Draft", "Pending", "Paid", "Overdue"]

  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Invoice</h1>
          <p className="text-muted-foreground mt-2">Kelola invoice dan pembayaran layanan</p>
        </div>
      </div>

      {/* Filter */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {statuses.map((status) => (
          <button
            key={status}
            onClick={() => setFilterStatus(status)}
            className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${
              filterStatus === status ? "bg-primary text-black" : "bg-slate-100 text-foreground hover:bg-slate-200"
            }`}
          >
            {status === "all" ? "Semua" : status}
          </button>
        ))}
      </div>

      {/* Invoices List */}
      <InvoiceList filterStatus={filterStatus} />
    </div>
  )
}
