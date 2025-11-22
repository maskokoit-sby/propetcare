"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface ArtikelModalProps {
  article: any
  onClose: () => void
  onSave: () => void
}

export default function ArtikelModal({ article, onClose, onSave }: ArtikelModalProps) {
  const [formData, setFormData] = useState(
    article || {
      title: "",
      excerpt: "",
      category: "Pet Care",
      tags: "",
      content: "",
      status: "Draft",
      author: "",
    },
  )

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-border sticky top-0 bg-white rounded-t-xl">
          <h2 className="text-xl font-bold text-foreground">{article ? "Edit Artikel" : "Buat Artikel Baru"}</h2>
        </div>

        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Judul Artikel *</label>
            <Input
              type="text"
              placeholder="Judul artikel"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Ringkasan Artikel *</label>
            <textarea
              placeholder="Ringkasan singkat artikel"
              value={formData.excerpt}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-border bg-white text-foreground resize-none"
              rows={2}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Kategori</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-border bg-white text-foreground"
              >
                <option>Pet Care</option>
                <option>Grooming Tips</option>
                <option>Pet Health</option>
                <option>Nutrition</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Tag (pisahkan dengan koma)</label>
              <Input
                type="text"
                placeholder="tag1, tag2, tag3"
                value={formData.tags}
                onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                className="rounded-lg"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Konten Artikel *</label>
            <textarea
              placeholder="Tulis konten artikel di sini..."
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-border bg-white text-foreground resize-none font-mono text-sm"
              rows={10}
            />
            <p className="text-xs text-muted-foreground mt-2">
              Dalam versi produksi, gunakan WYSIWYG editor untuk format yang lebih baik
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Status</label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-border bg-white text-foreground"
            >
              <option>Draft</option>
              <option>Published</option>
              <option>Archived</option>
            </select>
          </div>
        </div>

        <div className="p-6 border-t border-border flex gap-3 sticky bottom-0 bg-white rounded-b-xl">
          <Button onClick={onClose} variant="outline" className="flex-1 rounded-lg bg-transparent">
            Batal
          </Button>
          <Button onClick={onSave} className="flex-1 bg-primary hover:bg-primary/90 text-black rounded-lg">
            Simpan
          </Button>
        </div>
      </div>
    </div>
  )
}
