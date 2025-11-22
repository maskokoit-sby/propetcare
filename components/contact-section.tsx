"use client"

import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Kontak Kami</h2>
          <p className="text-gray-600">Hubungi kami untuk informasi lebih lanjut atau kunjungan langsung</p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.456!2d112.794!3d-7.293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f8b8b8b8b8b9%3A0x1234567890!2sPro%20Pet%20Care!5e0!3m2!1sen!2sid!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Address */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-yellow-100">
                  <MapPin size={24} className="text-yellow-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Lokasi</h3>
                <p className="text-gray-600 mb-3">
                  Dharmahusada Permai Blok V No. 201B
                  <br />
                  Surabaya, Indonesia 60115
                </p>
                <a
                  href="https://maps.app.goo.gl/Mir8z5HajWwpjU617"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-600 hover:text-yellow-700 font-medium transition"
                >
                  Buka di Google Maps →
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-yellow-100">
                  <Phone size={24} className="text-yellow-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Telepon</h3>
                <a href="tel:+6282360002552" className="text-gray-600 hover:text-yellow-600 transition text-lg">
                  +62 823 6000 2552
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-yellow-100">
                  <Mail size={24} className="text-yellow-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                <a href="mailto:info@propetcare.id" className="text-gray-600 hover:text-yellow-600 transition text-lg">
                  info@propetcare.id
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-yellow-100">
                  <Clock size={24} className="text-yellow-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Jam Operasional</h3>
                <p className="text-gray-600">
                  Senin - Minggu
                  <br />
                  08:00 - 20:00 WIB
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
