import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/lib/site";

const toolSlugs = [
  "visa-checker",
  "document-checklist",
  "appointment-tracker",
  "timeline-estimator",
];

const toolNames: Record<string, string> = {
  "visa-checker": "Vize ihtiyacı kontrolü",
  "document-checklist": "Belge listesi",
  "appointment-tracker": "Randevu takibi",
  "timeline-estimator": "Süre tahmini",
};

export async function generateStaticParams() {
  return toolSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const name = toolNames[params.slug];
  if (!name) return { title: "Araç bulunamadı" };
  return { title: `${name} | Araçlar` };
}

export default function ToolPage({
  params,
}: {
  params: { slug: string };
}) {
  const name = toolNames[params.slug];
  if (!name) notFound();

  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/tools"
          className="text-sm font-medium text-muted hover:text-foreground"
        >
          ← Araçlara dön
        </Link>
        <h1 className="mt-6 text-2xl font-bold text-foreground">
          {name}
        </h1>
        <p className="mt-4 rounded-lg border border-border bg-card p-6 text-muted">
          Bu araç şu an MVP aşamasındadır. Yakında etkileşimli sürüm eklenecektir.
          Şimdilik ilgili ülke ve rehber sayfalarından bilgi alabilirsiniz.
        </p>
        <div className="mt-6 flex gap-4">
          <Link
            href={site.links.countries}
            className="rounded-lg bg-primary px-4 py-2 font-semibold text-primary-foreground hover:bg-primary-hover"
          >
            Ülke rehberleri
          </Link>
          <Link
            href={site.links.guides}
            className="rounded-lg border border-border bg-card px-4 py-2 font-semibold text-foreground hover:bg-background"
          >
            Rehberler
          </Link>
        </div>
      </div>
    </div>
  );
}
