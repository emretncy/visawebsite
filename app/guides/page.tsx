import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Rehberler",
  description:
    "Vize başvurusu, randevu, belgeler ve red nedenleri hakkında adım adım rehberler.",
  openGraph: {
    title: "Rehberler | Vize Rehberi",
    description: "Vize süreci rehberleri ve ipuçları.",
  },
};

const guides = [
  { slug: "how-to-get-a-visa", title: "Vize nasıl alınır?", excerpt: "Genel vize başvuru süreci ve adımlar." },
  { slug: "visa-appointment-guide", title: "Vize randevu rehberi", excerpt: "Randevu alma ve hazırlık ipuçları." },
  { slug: "visa-documents-guide", title: "Vize belgeleri rehberi", excerpt: "Hangi belgeler gerekli, nasıl hazırlanır." },
  { slug: "visa-rejection-guide", title: "Vize red nedenleri", excerpt: "Sık red nedenleri ve tekrar başvuru." },
  { slug: "first-time-visa", title: "İlk kez vize başvurusu", excerpt: "İlk defa vize alacaklar için rehber." },
];

export default function GuidesPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
          Rehberler
        </h1>
        <p className="mt-2 text-muted">
          Vize süreci, belgeler ve randevu hakkında rehber içerikler.
        </p>
        <ul className="mt-10 space-y-4">
          {guides.map((g) => (
            <li key={g.slug}>
              <Link
                href={site.links.guide(g.slug)}
                className="block rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary hover:bg-background/50"
              >
                <h2 className="font-semibold text-foreground">{g.title}</h2>
                <p className="mt-2 text-sm text-muted">{g.excerpt}</p>
                <span className="mt-3 inline-block text-sm font-medium text-primary">
                  Oku →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
