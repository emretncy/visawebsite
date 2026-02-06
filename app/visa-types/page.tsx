import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Vize Türleri",
  description:
    "Turist, iş, öğrenci ve aile birleşimi vize türleri. Her vize türü için genel bilgi ve ülkelere göre farklılıklar.",
  openGraph: {
    title: "Vize Türleri | Vize Rehberi",
    description: "Turist, iş, öğrenci ve aile vizesi rehberleri.",
  },
};

const visaTypes = [
  { slug: "tourist-visa", name: "Turist vizesi", description: "Tatil ve ziyaret amaçlı kısa süreli vize." },
  { slug: "business-visa", name: "İş vizesi", description: "Toplantı, fuar ve iş görüşmeleri için vize." },
  { slug: "student-visa", name: "Öğrenci vizesi", description: "Eğitim ve dil kursu için vize." },
  { slug: "family-reunion", name: "Aile birleşimi", description: "Aile üyelerini ziyaret veya birleşim vizesi." },
];

export default function VisaTypesPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
          Vize türleri
        </h1>
        <p className="mt-2 text-muted">
          Vize türüne göre genel bilgi ve ülkelere göre farklılıklar.
        </p>
        <ul className="mt-10 space-y-4">
          {visaTypes.map((vt) => (
            <li key={vt.slug}>
              <Link
                href={site.links.visaType(vt.slug)}
                className="block rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary hover:bg-background/50"
              >
                <h2 className="font-semibold text-foreground">
                  {vt.name}
                </h2>
                <p className="mt-2 text-sm text-muted">
                  {vt.description}
                </p>
                <span className="mt-3 inline-block text-sm font-medium text-primary">
                  Detaylar →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
