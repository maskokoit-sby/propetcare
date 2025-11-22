'use client'

const services = [
  {
    id: 1,
    name: 'Cek Kesehatan',
    description: 'Pemeriksaan kesehatan menyeluruh oleh dokter hewan berpengalaman dengan konsultasi profesional.',
    price: 'Mulai Rp 200.000',
    icon: '🩺',
  },
  {
    id: 2,
    name: 'Home Care',
    description: 'Layanan perawatan di rumah Anda dengan kunjungan rutin untuk makan, bermain, dan menemani hewan peliharaan.',
    price: 'Mulai Rp 150.000/kunjungan',
    icon: '🏠',
  },
  {
    id: 3,
    name: 'Grooming',
    description: 'Perawatan profesional untuk memperindah penampilan dan menjaga kesehatan bulu hewan peliharaan Anda.',
    price: 'Mulai Rp 150.000',
    icon: '✨',
  },
  {
    id: 4,
    name: 'Pet Hotel',
    description: 'Akomodasi nyaman dengan perawatan penuh saat Anda pergi. Ruang luas, makan teratur, dan bermain.',
    price: 'Mulai Rp 100.000/malam',
    icon: '🏨',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Layanan Kami</h2>
          <p className="text-lg text-gray-600">Kami menyediakan berbagai layanan kesehatan dan perawatan untuk hewan kesayangan Anda</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gradient-to-br from-white to-yellow-50 border border-yellow-100 rounded-2xl p-6 hover:shadow-lg transition"
            >
              <p className="text-5xl mb-4">{service.icon}</p>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
              <p className="text-yellow-600 font-semibold">{service.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
