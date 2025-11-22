"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface AppointmentListProps {
  selectedDate: string
  selectedService: string
  onEdit: (appointment: any) => void
}

// Mock data
const mockAppointments = [
  {
    id: 1,
    date: "2024-11-20",
    time: "09:00",
    service: "Grooming",
    pet: "Max",
    owner: "Budi Santoso",
    phone: "08123456789",
    status: "Dikonfirmasi",
    notes: "Grooming standar dengan mandi",
  },
  {
    id: 2,
    date: "2024-11-20",
    time: "11:00",
    service: "Cek Kesehatan",
    pet: "Luna",
    owner: "Siti Nurhaliza",
    phone: "08987654321",
    status: "Menunggu Validasi",
    notes: "Vaksinasi tahunan",
  },
  {
    id: 3,
    date: "2024-11-20",
    time: "13:30",
    service: "Pet Hotel",
    pet: "Buddy",
    owner: "Ahmad Wijaya",
    phone: "08555666777",
    status: "Dikonfirmasi",
    notes: "Check-in pet hotel untuk 3 hari",
  },
  {
    id: 4,
    date: "2024-11-20",
    time: "15:00",
    service: "Home Care",
    pet: "Bella",
    owner: "Rina Putri",
    phone: "08444333222",
    status: "Dikonfirmasi",
    notes: "Kunjungan perawatan rumah",
  },
  {
    id: 5,
    date: "2024-11-21",
    time: "10:00",
    service: "Cek Kesehatan",
    pet: "Charlie",
    owner: "Hendra Kusuma",
    phone: "08777888999",
    status: "Menunggu Validasi",
    notes: "Pemeriksaan rutin",
  },
  {
    id: 6,
    date: "2024-11-21",
    time: "14:00",
    service: "Grooming",
    pet: "Daisy",
    owner: "Fatimah Zahra",
    phone: "08999111222",
    status: "Dikonfirmasi",
    notes: "Grooming premium dengan trim unggul",
  },
  {
    id: 7,
    date: "2024-11-21",
    time: "16:30",
    service: "Home Care",
    pet: "Rocky",
    owner: "Bambang Setiawan",
    phone: "08666555444",
    status: "Dikonfirmasi",
    notes: "Feeding dan playtime",
  },
  {
    id: 8,
    date: "2024-11-22",
    time: "08:00",
    service: "Cek Kesehatan",
    pet: "Whiskers",
    owner: "Lina Wijaya",
    phone: "08222333444",
    status: "Dikonfirmasi",
    notes: "Konsultasi kesehatan kucing",
  },
  {
    id: 9,
    date: "2024-11-22",
    time: "10:30",
    service: "Pet Hotel",
    pet: "Milo",
    owner: "Dani Pratama",
    phone: "08333444555",
    status: "Menunggu Validasi",
    notes: "Check-in pet hotel 5 hari",
  },
  {
    id: 10,
    date: "2024-11-22",
    time: "13:00",
    service: "Grooming",
    pet: "Sophie",
    owner: "Yeni Kusuma",
    phone: "08444555666",
    status: "Dikonfirmasi",
    notes: "Grooming spa dengan aromatherapy",
  },
  {
    id: 11,
    date: "2024-11-22",
    time: "15:30",
    service: "Cek Kesehatan",
    pet: "Rex",
    owner: "Gunawan Hadi",
    phone: "08555666777",
    status: "Dikonfirmasi",
    notes: "Vaksinasi dan rabies check",
  },
  {
    id: 12,
    date: "2024-11-22",
    time: "17:00",
    service: "Home Care",
    pet: "Nala",
    owner: "Putri Amelia",
    phone: "08666777888",
    status: "Dikonfirmasi",
    notes: "Feeding dan medication schedule",
  },
  {
    id: 13,
    date: "2024-11-23",
    time: "11:00",
    service: "Grooming",
    pet: "Coco",
    owner: "Reza Firmansyah",
    phone: "08777888999",
    status: "Menunggu Validasi",
    notes: "Grooming standar",
  },
  {
    id: 14,
    date: "2024-11-23",
    time: "14:00",
    service: "Pet Hotel",
    pet: "Simba",
    owner: "Maya Indah",
    phone: "08888999000",
    status: "Dikonfirmasi",
    notes: "Weekend boarding",
  },
  {
    id: 15,
    date: "2024-11-24",
    time: "09:30",
    service: "Cek Kesehatan",
    pet: "Fluffy",
    owner: "Sarto Mulyo",
    phone: "08999000111",
    status: "Dikonfirmasi",
    notes: "Checkup berkala",
  },
  {
    id: 16,
    date: "2024-11-24",
    time: "12:00",
    service: "Home Care",
    pet: "Koki",
    owner: "Widi Santoso",
    phone: "08000111222",
    status: "Menunggu Validasi",
    notes: "Kunjungan feeding",
  },
  {
    id: 17,
    date: "2024-11-24",
    time: "15:00",
    service: "Grooming",
    pet: "Prince",
    owner: "Eka Putra",
    phone: "08111222333",
    status: "Dikonfirmasi",
    notes: "Grooming regular",
  },
  {
    id: 18,
    date: "2024-11-25",
    time: "10:00",
    service: "Pet Hotel",
    pet: "Molly",
    owner: "Tina Wijaya",
    phone: "08222333444",
    status: "Dikonfirmasi",
    notes: "Check-in hotel",
  },
  {
    id: 19,
    date: "2024-11-25",
    time: "14:00",
    service: "Cek Kesehatan",
    pet: "Oscar",
    owner: "Joko Suryanto",
    phone: "08333444555",
    status: "Dikonfirmasi",
    notes: "Medical check-up",
  },
  {
    id: 20,
    date: "2024-11-25",
    time: "16:00",
    service: "Grooming",
    pet: "Lacey",
    owner: "Susi Hartini",
    phone: "08444555666",
    status: "Menunggu Validasi",
    notes: "Full grooming treatment",
  },
  {
    id: 21,
    date: "2024-11-25",
    time: "18:00",
    service: "Home Care",
    pet: "Bruno",
    owner: "Mario Wijaya",
    phone: "08555666777",
    status: "Dikonfirmasi",
    notes: "Evening care visit",
  },
  {
    id: 22,
    date: "2024-11-26",
    time: "09:00",
    service: "Grooming",
    pet: "Gigi",
    owner: "Sarina Mohamad",
    phone: "08666777888",
    status: "Dikonfirmasi",
    notes: "Bath and trim",
  },
  {
    id: 23,
    date: "2024-11-26",
    time: "11:00",
    service: "Pet Hotel",
    pet: "Oreo",
    owner: "Bintang Kusuma",
    phone: "08777888999",
    status: "Dikonfirmasi",
    notes: "Boarding reservation",
  },
  {
    id: 24,
    date: "2024-11-27",
    time: "10:00",
    service: "Cek Kesehatan",
    pet: "Peanut",
    owner: "Ilham Prakoso",
    phone: "08888999000",
    status: "Menunggu Validasi",
    notes: "Health assessment",
  },
  {
    id: 25,
    date: "2024-11-27",
    time: "13:00",
    service: "Home Care",
    pet: "Ginger",
    owner: "Ika Suryani",
    phone: "08999000111",
    status: "Dikonfirmasi",
    notes: "Regular pet sitting",
  },
  {
    id: 26,
    date: "2024-11-27",
    time: "15:30",
    service: "Grooming",
    pet: "Shadow",
    owner: "Richo Arianto",
    phone: "08000111222",
    status: "Dikonfirmasi",
    notes: "Professional grooming",
  },
  {
    id: 27,
    date: "2024-11-28",
    time: "08:30",
    service: "Pet Hotel",
    pet: "Mittens",
    owner: "Siska Permata",
    phone: "08111222333",
    status: "Dikonfirmasi",
    notes: "Weekend check-in",
  },
  {
    id: 28,
    date: "2024-11-28",
    time: "11:00",
    service: "Cek Kesehatan",
    pet: "Pepper",
    owner: "Tono Setiawan",
    phone: "08222333444",
    status: "Dikonfirmasi",
    notes: "Follow-up consultation",
  },
  {
    id: 29,
    date: "2024-11-28",
    time: "14:00",
    service: "Grooming",
    pet: "Smokey",
    owner: "Vera Handini",
    phone: "08333444555",
    status: "Menunggu Validasi",
    notes: "Spa treatment",
  },
  {
    id: 30,
    date: "2024-11-28",
    time: "16:30",
    service: "Home Care",
    pet: "Bonnie",
    owner: "Wayan Sutrisna",
    phone: "08444555666",
    status: "Dikonfirmasi",
    notes: "Evening check-in",
  },
  {
    id: 31,
    date: "2024-11-28",
    time: "18:00",
    service: "Cek Kesehatan",
    pet: "Oliver",
    owner: "Nita Wijaya",
    phone: "08555666777",
    status: "Dikonfirmasi",
    notes: "Routine check",
  },
  {
    id: 32,
    date: "2024-11-29",
    time: "10:00",
    service: "Grooming",
    pet: "Bailey",
    owner: "Sri Mulyani",
    phone: "08666777888",
    status: "Dikonfirmasi",
    notes: "Regular grooming",
  },
  {
    id: 33,
    date: "2024-11-29",
    time: "15:00",
    service: "Home Care",
    pet: "Loki",
    owner: "Hendra Wijaya",
    phone: "08777888999",
    status: "Dikonfirmasi",
    notes: "Afternoon care",
  },
]

export default function AppointmentList({ selectedDate, selectedService, onEdit }: AppointmentListProps) {
  const filteredAppointments = mockAppointments.filter((apt) => {
    const dateMatch = apt.date === selectedDate
    const serviceMatch = selectedService === "all" || apt.service === selectedService
    return dateMatch && serviceMatch
  })

  if (filteredAppointments.length === 0) {
    return (
      <Card className="rounded-xl border-0 shadow-sm">
        <CardContent className="pt-8 pb-8">
          <div className="text-center">
            <p className="text-muted-foreground">Tidak ada jadwal untuk tanggal ini</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-3">
      {filteredAppointments.map((apt) => (
        <Card key={apt.id} className="rounded-xl border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="pt-6">
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-bold text-primary">{apt.time}</span>
                    <div>
                      <p className="font-bold text-foreground">{apt.service}</p>
                      <p className="text-sm text-muted-foreground">
                        {apt.pet} • {apt.owner}
                      </p>
                    </div>
                  </div>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                    apt.status === "Dikonfirmasi" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {apt.status}
                </span>
              </div>

              {/* Notes */}
              <p className="text-sm text-foreground bg-slate-50 p-3 rounded-lg">{apt.notes}</p>

              {/* Actions */}
              <div className="flex gap-2">
                <a
                  href={`https://wa.me/${apt.phone.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-3 py-2 bg-green-500 text-white rounded-lg text-sm font-medium hover:bg-green-600 transition-colors text-center"
                >
                  WhatsApp
                </a>
                <Button onClick={() => onEdit(apt)} variant="outline" className="flex-1 rounded-lg">
                  Edit
                </Button>
                {apt.status === "Menunggu Validasi" && (
                  <Button
                    className="flex-1 bg-primary hover:bg-primary/90 text-black rounded-lg"
                    onClick={() => {
                      console.log("Validating appointment:", apt.id)
                    }}
                  >
                    Validasi
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
