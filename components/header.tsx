"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setIsOpen(false)
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-yellow-300 rounded-full flex items-center justify-center text-xl font-bold text-gray-800">
              P
            </div>
            <div>
              <h1 className="font-bold text-gray-900">Pro Pet Care</h1>
              <p className="text-xs text-gray-600">Surabaya</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#services" className="text-gray-700 hover:text-yellow-500 transition">
              Layanan
            </Link>
            <Link href="/articles" className="text-gray-700 hover:text-yellow-500 transition">
              Artikel
            </Link>
            <a
              href="#contact"
              onClick={handleContactClick}
              className="text-gray-700 hover:text-yellow-500 transition cursor-pointer"
            >
              Kontak
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Link
              href="#booking"
              className="bg-yellow-300 text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-yellow-400 transition"
            >
              Jadwalkan Kunjungan
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100">
            <Link href="#services" className="block py-2 text-gray-700 hover:text-yellow-500">
              Layanan
            </Link>
            <Link href="/articles" className="block py-2 text-gray-700 hover:text-yellow-500">
              Artikel
            </Link>
            <a
              href="#contact"
              onClick={handleContactClick}
              className="block py-2 text-gray-700 hover:text-yellow-500 cursor-pointer"
            >
              Kontak
            </a>
            <Link
              href="#booking"
              className="block mt-4 bg-yellow-300 text-gray-900 px-6 py-2 rounded-full font-semibold text-center hover:bg-yellow-400 transition"
            >
              Jadwalkan Kunjungan
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
