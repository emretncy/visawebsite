import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Schengen ve ülke güncellemeleri, vize ipuçları ve seyahat haberleri.",
  openGraph: {
    title: "Blog | Vize Rehberi",
    description: "Vize ve seyahat ile ilgili güncellemeler ve ipuçları.",
  },
};

const categories = [
  { slug: "schengen-news", name: "Schengen haberleri" },
  { slug: "country-updates", name: "Ülke güncellemeleri" },
  { slug: "visa-tips", name: "Vize ipuçları" },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
          Blog
        </h1>
        <p className="mt-2 text-muted">
          Vize kuralları, ülke güncellemeleri ve pratik ipuçları.
        </p>
        <div className="mt-10 rounded-xl border border-border bg-card p-6">
          <p className="text-muted">
            Blog yazıları yakında eklenecek. Şimdilik rehberler ve ülke
            sayfalarından güncel bilgilere ulaşabilirsiniz.
          </p>
          <ul className="mt-4 space-y-2">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/blog/${c.slug}`}
                  className="text-primary hover:text-primary-hover"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
