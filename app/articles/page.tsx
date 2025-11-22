'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { useState, useMemo } from 'react'
import { articlesData } from '@/lib/articles-data'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const ARTICLES_PER_PAGE = 10

export default function ArticlesPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Get unique categories
  const categories = ['all', ...new Set(articlesData.map((a) => a.category))]

  // Filter articles
  const filteredArticles = useMemo(() => {
    if (selectedCategory === 'all') return articlesData
    return articlesData.filter((article) => article.category === selectedCategory)
  }, [selectedCategory])

  // Paginate
  const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE)
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE
  const displayedArticles = filteredArticles.slice(startIndex, startIndex + ARTICLES_PER_PAGE)

  return (
    <main className="bg-white">
      <Header />

      {/* Page Header */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-white border-b border-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Artikel & Tips</h1>
          <p className="text-lg text-gray-600">Kumpulan informasi dan tips kesehatan hewan peliharaan</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-12 flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat)
                  setCurrentPage(1)
                }}
                className={`px-4 py-2 rounded-full font-semibold transition ${
                  selectedCategory === cat
                    ? 'bg-yellow-300 text-gray-900'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {cat === 'all' ? 'Semua Artikel' : cat}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {displayedArticles.map((article) => (
              <Link
                key={article.id}
                href={`/articles/${article.slug}`}
                className="group"
              >
                <div className="bg-white border border-yellow-100 rounded-2xl overflow-hidden hover:shadow-lg transition">
                  <div className="h-64 bg-yellow-100 overflow-hidden">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block text-xs font-semibold text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full mb-3">
                      {article.category}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <p className="text-sm text-gray-500">
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

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50"
              >
                <ChevronLeft size={20} />
              </button>

              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-4 py-2 rounded-lg font-semibold transition ${
                    currentPage === i + 1
                      ? 'bg-yellow-300 text-gray-900'
                      : 'border border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  )
}
