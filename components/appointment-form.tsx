'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    petName: '',
    service: '',
    date: null as Date | null,
    timeSlot: '',
  })

  const [scrollPosition, setScrollPosition] = useState(0)
  
  const generateDays = () => {
    const days = []
    for (let i = 1; i <= 7; i++) {
      const date = new Date()
      date.setDate(date.getDate() + i)
      days.push(date)
    }
    return days
  }

  const days = generateDays()

  const timeSlots = [
    { start: '08:00', end: '10:00' },
    { start: '10:00', end: '12:00' },
    { start: '12:00', end: '14:00' },
    { start: '14:00', end: '16:00' },
    { start: '16:00', end: '18:00' },
    { start: '18:00', end: '20:00' },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleDaySelect = (date: Date) => {
    setFormData((prev) => ({
      ...prev,
      date,
    }))
  }

  const handleTimeSlotSelect = (slot: string) => {
    setFormData((prev) => ({
      ...prev,
      timeSlot: slot,
    }))
  }

  const scrollDays = (direction: 'left' | 'right') => {
    const container = document.getElementById('days-container')
    if (container) {
      const scrollAmount = direction === 'left' ? -200 : 200
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Appointment data:', formData)
    alert('Terima kasih! Kami akan menghubungi Anda segera untuk mengkonfirmasi jadwal Anda.')
    setFormData({ name: '', email: '', phone: '', petName: '', service: '', date: null, timeSlot: '' })
  }

  const isFormValid = formData.name && formData.phone && formData.service && formData.date && formData.timeSlot

  return (
    <section id="booking" className="py-20 bg-gradient-to-br from-yellow-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Jadwalkan Kunjungan</h2>
          <p className="text-lg text-gray-600">Isi formulir di bawah untuk membuat janji temu dengan kami</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl p-8 border border-yellow-100 shadow-sm"
        >
          {/* Required Fields Section */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Informasi Pribadi <span className="text-red-500">*</span></h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Nama Anda <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Masukkan nama Anda"
                  className="rounded-xl"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Nomor Telepon <span className="text-red-500">*</span>
                </label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+62 823 6000 2552"
                  className="rounded-xl"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Email
              </label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="email@example.com"
                className="rounded-xl"
              />
            </div>
          </div>

          {/* Pet and Service Info */}
          <div className="mb-8 pb-8 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Informasi Layanan <span className="text-red-500">*</span></h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Nama Hewan Peliharaan
                </label>
                <Input
                  type="text"
                  name="petName"
                  value={formData.petName}
                  onChange={handleChange}
                  placeholder="Nama hewan kesayangan Anda"
                  className="rounded-xl"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Jenis Layanan <span className="text-red-500">*</span>
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                >
                  <option value="">Pilih layanan</option>
                  <option value="health-check">Cek Kesehatan</option>
                  <option value="home-care">Home Care</option>
                  <option value="grooming">Grooming</option>
                  <option value="pet-hotel">Pet Hotel</option>
                </select>
              </div>
            </div>
          </div>

          {/* Date Selection with Day Buttons */}
          <div className="mb-8 pb-8 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tanggal Kunjungan <span className="text-red-500">*</span></h3>
            <div className="relative">
              <button
                type="button"
                onClick={() => scrollDays('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 border border-gray-200 hover:bg-gray-50"
              >
                <ChevronLeft size={20} />
              </button>

              <div
                id="days-container"
                className="flex gap-3 overflow-x-auto px-12 pb-2 scroll-smooth scrollbar-hide"
              >
                {days.map((day, index) => {
                  const isSelected = formData.date?.toDateString() === day.toDateString()
                  const dayName = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'][day.getDay()]
                  const dayDate = day.getDate()

                  return (
                    <button
                      key={index}
                      type="button"
                      onClick={() => handleDaySelect(day)}
                      className={`flex-shrink-0 p-4 rounded-2xl text-center transition-all whitespace-nowrap ${
                        isSelected
                          ? 'bg-yellow-300 text-gray-900 border-2 border-yellow-400'
                          : 'bg-gray-100 text-gray-900 border-2 border-gray-200 hover:border-yellow-300'
                      }`}
                    >
                      <div className="font-semibold text-sm">{dayName}</div>
                      <div className="text-lg font-bold">{dayDate}</div>
                    </button>
                  )
                })}
              </div>

              <button
                type="button"
                onClick={() => scrollDays('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 border border-gray-200 hover:bg-gray-50"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Time Slot Selection */}
          {formData.date && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Waktu Kunjungan <span className="text-red-500">*</span></h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {timeSlots.map((slot, index) => {
                  const slotKey = `${slot.start}-${slot.end}`
                  const isSelected = formData.timeSlot === slotKey

                  return (
                    <button
                      key={index}
                      type="button"
                      onClick={() => handleTimeSlotSelect(slotKey)}
                      className={`p-4 rounded-2xl font-semibold transition-all ${
                        isSelected
                          ? 'bg-yellow-300 text-gray-900 border-2 border-yellow-400'
                          : 'bg-gray-100 text-gray-900 border-2 border-gray-200 hover:border-yellow-300'
                      }`}
                    >
                      <div>{slot.start}</div>
                      <div className="text-sm text-gray-600">- {slot.end}</div>
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          <Button
            type="submit"
            disabled={!isFormValid}
            className="w-full bg-yellow-300 hover:bg-yellow-400 disabled:bg-gray-300 disabled:cursor-not-allowed text-gray-900 font-bold py-3 rounded-xl text-lg"
          >
            Jadwalkan Kunjungan
          </Button>
        </form>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}
