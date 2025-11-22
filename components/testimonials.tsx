'use client'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Budi Santoso',
      pet: 'Max (Golden Retriever)',
      text: 'Pro Pet Care berhasil menyembuhkan Max dari penyakit kulit yang parah. Dokter hewan mereka sangat profesional dan penuh perhatian!',
      rating: 5,
    },
    {
      id: 2,
      name: 'Siti Nurhaliza',
      pet: 'Luna (Persian Cat)',
      text: 'Grooming services mereka luar biasa! Luna selalu terlihat cantik dan sehat setelah perawatan di sini.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Ahmad Wijaya',
      pet: 'Buddy (Pug)',
      text: 'Sangat puas dengan home care service. Buddy dijaga dengan baik dan selalu senang ketika caretaker datang ke rumah.',
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Kepuasan Pelanggan</h2>
          <p className="text-lg text-gray-600">Cerita nyata dari pemilik hewan peliharaan yang mempercayai kami</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 border border-yellow-100 hover:shadow-lg transition"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>
              <div>
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.pet}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
