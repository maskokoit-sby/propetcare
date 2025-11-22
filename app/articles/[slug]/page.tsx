'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { articlesData } from '@/lib/articles-data'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'

interface ArticlePageProps {
  params: Promise<{ slug: string }>
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  const article = articlesData.find((a) => a.slug === slug)

  if (!article) {
    notFound()
  }

  // Get related articles
  const relatedArticles = articlesData
    .filter((a) => a.category === article.category && a.id !== article.id)
    .slice(0, 3)

  return (
    <main className="bg-white">
      <Header />

      {/* Article Hero */}
      <section className="py-8 bg-gradient-to-br from-yellow-50 to-white border-b border-yellow-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/articles" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 font-semibold">
            <ArrowLeft size={20} />
            Kembali ke Artikel
          </Link>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">{article.title}</h1>
          <div className="flex items-center justify-between">
            <div className="flex gap-4">
              <span className="inline-block text-sm font-semibold text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full">
                {article.category}
              </span>
              <p className="text-gray-600">
                {new Date(article.date).toLocaleDateString('id-ID', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Image */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full h-96 bg-yellow-100 rounded-2xl overflow-hidden mb-8">
            <img
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              {article.excerpt}
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-300 p-6 my-8 rounded">
              <p className="text-gray-800 leading-relaxed">
                {article.content}
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              {article.longContent}
            </p>
          </div>

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 font-semibold mb-4">Bagikan artikel ini:</p>
            <div className="flex gap-4">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                Facebook
              </button>
              <button className="px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition">
                Twitter
              </button>
              <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
                WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-gradient-to-br from-yellow-50 to-white border-t border-yellow-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Artikel Terkait</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedArticles.map((relArticle) => (
                <Link
                  key={relArticle.id}
                  href={`/articles/${relArticle.slug}`}
                  className="group"
                >
                  <div className="bg-white border border-yellow-100 rounded-2xl overflow-hidden hover:shadow-lg transition">
                    <div className="h-48 bg-yellow-100 overflow-hidden">
                      <img
                        src={relArticle.image || "/placeholder.svg"}
                        alt={relArticle.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition"
                      />
                    </div>
                    <div className="p-4">
                      <span className="inline-block text-xs font-semibold text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full mb-2">
                        {relArticle.category}
                      </span>
                      <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-yellow-600">
                        {relArticle.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {relArticle.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}
