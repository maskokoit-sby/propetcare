'use client'

import Link from 'next/link'
import { articlesData } from '@/lib/articles-data'
import { ArrowRight } from 'lucide-react'

export default function ArticlesSection() {
  const latestArticles = articlesData.slice(0, 4)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Artikel Terbaru</h2>
            <p className="text-gray-600">Tips dan informasi kesehatan hewan peliharaan Anda</p>
          </div>
          <Link
            href="/articles"
            className="hidden md:flex items-center gap-2 text-yellow-600 font-semibold hover:text-yellow-700"
          >
            Lihat Seluruh Artikel
            <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {latestArticles.map((article) => (
            <Link
              key={article.id}
              href={`/articles/${article.slug}`}
              className="group"
            >
              <div className="bg-gradient-to-br from-white to-yellow-50 border border-yellow-100 rounded-2xl overflow-hidden hover:shadow-lg transition">
                {/* Image */}
                <div className="h-48 bg-yellow-100 overflow-hidden">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                  />
                </div>

                {/* Content */}
                <div className="p-4">
                  <span className="inline-block text-xs font-semibold text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full mb-3">
                    {article.category}
                  </span>
                  <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-yellow-600">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <p className="text-xs text-gray-500">
                    {new Date(article.date).toLocaleDateString('id-ID', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile View All Link */}
        <div className="md:hidden text-center">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-yellow-600 font-semibold hover:text-yellow-700"
          >
            Lihat Seluruh Artikel
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}
