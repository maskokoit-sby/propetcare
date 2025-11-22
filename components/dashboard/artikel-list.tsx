"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ArtikelListProps {
  filterStatus: string
  onEdit: (article: any) => void
}

const mockArticles = [
  {
    id: 1,
    title: "5 Tips Merawat Kucing Peliharaan Anda di Musim Panas",
    slug: "tips-merawat-kucing-musim-panas",
    excerpt: "Musim panas memerlukan perhatian khusus untuk kesehatan kucing Anda.",
    category: "Pet Care",
    author: "Dr. Budi",
    status: "Published",
    publishedDate: "2024-11-20",
    lastModified: "2024-11-20",
    content: "Konten artikel lengkap...",
    editHistory: [
      { editor: "Dr. Budi", date: "2024-11-20", action: "Published" },
      { editor: "Admin", date: "2024-11-19", action: "Created" },
    ],
  },
  {
    id: 2,
    title: "Grooming Anjing: Panduan Lengkap Perawatan Bulu",
    slug: "grooming-anjing-panduan",
    excerpt: "Grooming bukan hanya tentang keindahan, tetapi juga kesehatan.",
    category: "Grooming Tips",
    author: "Siti",
    status: "Published",
    publishedDate: "2024-11-18",
    lastModified: "2024-11-18",
    content: "Konten artikel lengkap...",
    editHistory: [{ editor: "Siti", date: "2024-11-18", action: "Published" }],
  },
  {
    id: 3,
    title: "Vaksinasi Anjing: Jadwal dan Jenis Vaksin",
    slug: "vaksinasi-anjing-jadwal",
    excerpt: "Vaksinasi adalah bagian krusial dari perawatan kesehatan anjing.",
    category: "Pet Health",
    author: "Dr. Budi",
    status: "Draft",
    publishedDate: null,
    lastModified: "2024-11-21",
    content: "Konten artikel lengkap...",
    editHistory: [
      { editor: "Dr. Budi", date: "2024-11-21", action: "Edited" },
      { editor: "Dr. Budi", date: "2024-11-20", action: "Created" },
    ],
  },
]

export default function ArtikelList({ filterStatus, onEdit }: ArtikelListProps) {
  const [expandedArticle, setExpandedArticle] = useState<number | null>(null)

  const filtered = mockArticles.filter((a) => filterStatus === "all" || a.status === filterStatus)

  if (filtered.length === 0) {
    return (
      <Card className="rounded-xl border-0 shadow-sm">
        <CardContent className="pt-8 pb-8">
          <div className="text-center">
            <p className="text-muted-foreground">Tidak ada artikel</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-3">
      {filtered.map((article) => (
        <Card key={article.id} className="rounded-xl border-0 shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="pt-6">
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-foreground">{article.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{article.excerpt}</p>
                  <div className="flex gap-2 mt-3">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-xs bg-slate-100 text-muted-foreground px-2 py-1 rounded-full">
                      {article.author}
                    </span>
                  </div>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                    article.status === "Published"
                      ? "bg-green-100 text-green-700"
                      : article.status === "Draft"
                        ? "bg-gray-100 text-gray-700"
                        : "bg-slate-100 text-slate-700"
                  }`}
                >
                  {article.status}
                </span>
              </div>

              {/* Dates */}
              <div className="flex justify-between text-xs text-muted-foreground bg-slate-50 p-2 rounded">
                <span>
                  {article.status === "Published" ? "Dipublikasikan" : "Terakhir diubah"}:{" "}
                  {article.publishedDate || article.lastModified}
                </span>
              </div>

              {/* Expanded Edit History */}
              {expandedArticle === article.id && (
                <div className="border-t border-border pt-4">
                  <p className="text-sm font-medium text-foreground mb-3">Riwayat Edit:</p>
                  <div className="space-y-2">
                    {article.editHistory.map((history, idx) => (
                      <div key={idx} className="text-xs bg-slate-50 p-2 rounded flex justify-between">
                        <span className="text-foreground">
                          {history.editor} - {history.action}
                        </span>
                        <span className="text-muted-foreground">{history.date}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-2 pt-2 border-t border-border">
                <Button
                  onClick={() => setExpandedArticle(expandedArticle === article.id ? null : article.id)}
                  variant="outline"
                  className="flex-1 rounded-lg text-xs"
                >
                  {expandedArticle === article.id ? "Tutup" : "Riwayat"}
                </Button>
                <Button onClick={() => onEdit(article)} variant="outline" className="flex-1 rounded-lg">
                  Edit
                </Button>
                {article.status === "Draft" && (
                  <Button
                    className="flex-1 bg-primary hover:bg-primary/90 text-black rounded-lg"
                    onClick={() => console.log("Publish")}
                  >
                    Publish
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
