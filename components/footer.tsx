'use client'

import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Pro Pet Care</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Klinik hewan terpercaya di Surabaya dengan komitmen melayani kesehatan hewan peliharaan Anda dengan sepenuh hati.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Menu</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#services" className="hover:text-yellow-400 transition">
                  Layanan
                </Link>
              </li>
              <li>
                <Link href="/articles" className="hover:text-yellow-400 transition">
                  Artikel
                </Link>
              </li>
              <li>
                <Link href="#booking" className="hover:text-yellow-400 transition">
                  Booking
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Kontak</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex gap-2 items-start">
                <Phone size={16} className="mt-1 flex-shrink-0 text-yellow-400" />
                <a href="tel:+6282360002552" className="hover:text-yellow-400 transition">
                  +62 823 6000 2552
                </a>
              </li>
              <li className="flex gap-2 items-start">
                <Mail size={16} className="mt-1 flex-shrink-0 text-yellow-400" />
                <a href="mailto:info@propetcare.id" className="hover:text-yellow-400 transition">
                  info@propetcare.id
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & Location */}
          <div>
            <h4 className="font-bold mb-4">Lokasi & Jam Operasional</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex gap-2 items-start">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-yellow-400" />
                <a
                  href="https://maps.app.goo.gl/Mir8z5HajWwpjU617"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition"
                >
                  Dharmahusada Permai Blok V No. 201B, Surabaya 60115
                </a>
              </li>
              <li className="flex gap-2 items-start">
                <Clock size={16} className="mt-1 flex-shrink-0 text-yellow-400" />
                <span>08:00 - 20:00 WIB</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2025 Pro Pet Care. Semua hak dilindungi.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
