'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-white via-white to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Kesehatan Hewan Peliharaan Anda Adalah Prioritas Kami
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Pro Pet Care berkomitmen memberikan perawatan terbaik dengan sentuhan penuh kasih sayang untuk kesehatan dan kebahagiaan teman berbulu Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#booking"
                className="bg-yellow-300 text-gray-900 px-8 py-4 rounded-full font-bold hover:bg-yellow-400 transition text-center"
              >
                Jadwalkan Kunjungan Sekarang
              </Link>
              <Link
                href="/articles"
                className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition text-center"
              >
                Baca Artikel
              </Link>
            </div>

            {/* Quick Info */}
            <div className="mt-12 grid grid-cols-3 gap-6 text-center md:text-left">
              <div>
                <p className="text-3xl font-bold text-yellow-500">24/7</p>
                <p className="text-sm text-gray-600">Layanan Emergency</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-yellow-500">5+</p>
                <p className="text-sm text-gray-600">Jenis Layanan</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-yellow-500">1000+</p>
                <p className="text-sm text-gray-600">Hewan Peliharaan</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <div className="w-full h-96 bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-3xl flex items-center justify-center overflow-hidden">
              <img
                src="/veterinarian-with-happy-pets-dogs-and-cats-in-mode.jpg"
                alt="Pro Pet Care Clinic"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
