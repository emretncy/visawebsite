import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Araçlar",
  description:
    "Vize ihtiyacı kontrolü, belge listesi, randevu takibi ve süre tahmini araçları.",
  openGraph: {
    title: "Araçlar | Vize Rehberi",
    description: "Vize checker, belge listesi ve randevu takip araçları.",
  },
};

const tools = [
  { slug: "visa-checker", name: "Vize ihtiyacı kontrolü", description: "Ülke ve pasaport bilgisiyle vize gerekli mi öğrenin." },
  { slug: "document-checklist", name: "Belge listesi", description: "Hedef ülke ve vize türüne göre indirilebilir kontrol listesi." },
  { slug: "appointment-tracker", name: "Randevu takibi", description: "Randevu hatırlatıcı ve takip." },
  { slug: "timeline-estimator", name: "Süre tahmini", description: "Ortalama işlem süresi tahmini." },
];

export default function ToolsPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
          Araçlar
        </h1>
        <p className="mt-2 text-muted">
          Vize sürecinizi kolaylaştıran yardımcı araçlar (MVP; zamanla geliştirilecek).
        </p>
        <ul className="mt-10 space-y-4">
          {tools.map((t) => (
            <li key={t.slug}>
              <Link
                href={site.links.tool(t.slug)}
                className="block rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary hover:bg-background/50"
              >
                <h2 className="font-semibold text-foreground">{t.name}</h2>
                <p className="mt-2 text-sm text-muted">{t.description}</p>
                <span className="mt-3 inline-block text-sm font-medium text-primary">
                  Kullan →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
