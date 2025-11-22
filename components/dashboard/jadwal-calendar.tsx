"use client"

import { useState } from "react"

interface JadwalCalendarProps {
  selectedDate: string
  onDateSelect: (date: string) => void
}

// Mock data for appointments on dates
const appointmentDates: { [key: string]: number } = {
  "2024-11-20": 4,
  "2024-11-21": 3,
  "2024-11-22": 5,
  "2024-11-23": 2,
  "2024-11-24": 3,
  "2024-11-25": 4,
  "2024-11-26": 2,
  "2024-11-27": 3,
  "2024-11-28": 5,
  "2024-11-29": 2,
}

export default function JadwalCalendar({ selectedDate, onDateSelect }: JadwalCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const getDaysInMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  const getFirstDayOfMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth(), 1).getDay()

  const days = Array.from({ length: getDaysInMonth(currentMonth) }, (_, i) => i + 1)
  const emptyDays = Array.from({ length: getFirstDayOfMonth(currentMonth) }, () => null)
  const allDays = [...emptyDays, ...days]

  const monthName = currentMonth.toLocaleString("id-ID", { month: "long", year: "numeric" })

  const isDateHasAppointments = (day: number) => {
    const dateStr = `${currentMonth.getFullYear()}-${String(currentMonth.getMonth() + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
    return appointmentDates[dateStr] > 0
  }

  return (
    <div className="space-y-4">
      {/* Month Navigation */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
          className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
        >
          ←
        </button>
        <h3 className="font-bold text-foreground capitalize text-sm">{monthName}</h3>
        <button
          onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
          className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
        >
          →
        </button>
      </div>

      {/* Day Headers */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"].map((day) => (
          <div key={day} className="text-center text-xs font-bold text-muted-foreground">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 gap-1">
        {allDays.map((day, idx) => {
          if (day === null) {
            return <div key={`empty-${idx}`} className="aspect-square" />
          }

          const dateStr = `${currentMonth.getFullYear()}-${String(currentMonth.getMonth() + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
          const isSelected = selectedDate === dateStr
          const hasAppointments = isDateHasAppointments(day)

          return (
            <button
              key={day}
              onClick={() => onDateSelect(dateStr)}
              className={`aspect-square rounded-lg text-sm font-medium transition-colors relative ${
                isSelected ? "bg-primary text-black" : "bg-slate-100 text-foreground hover:bg-slate-200"
              }`}
            >
              {day}
              {hasAppointments && !isSelected && (
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></div>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
