import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getCountryBySlug,
  countries,
  getDocumentsForVisaType,
} from "@/data/countries";
import { getVisaTypeInfo } from "@/data/visaTypes";
import { site } from "@/lib/site";
import type { Metadata } from "next";

interface PageProps {
  params: { slug: string; visaTypeSlug: string };
}

export async function generateStaticParams() {
  const params: { slug: string; visaTypeSlug: string }[] = [];
  for (const country of countries) {
    for (const vt of country.visaTypes) {
      params.push({ slug: country.slug, visaTypeSlug: vt.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const country = getCountryBySlug(params.slug);
  const visaInfo = getVisaTypeInfo(params.visaTypeSlug);
  if (!country || !visaInfo)
    return { title: "Sayfa bulunamadı" };
  const hasVisaType = country.visaTypes.some((vt) => vt.slug === params.visaTypeSlug);
  if (!hasVisaType)
    return { title: "Vize türü bulunamadı" };
  return {
    title: `${visaInfo.name} – Gerekli belgeler | ${country.name}`,
    description: `${country.name} ${visaInfo.name} için gerekli belgeler listesi.`,
  };
}

export default function ApplyDocumentsPage({ params }: PageProps) {
  const country = getCountryBySlug(params.slug);
  const visaTypeSlug = params.visaTypeSlug;
  const visaInfo = getVisaTypeInfo(visaTypeSlug);

  if (!country || !visaInfo) notFound();

  const hasVisaType = country.visaTypes.some((vt) => vt.slug === visaTypeSlug);
  if (!hasVisaType) notFound();

  const documents = getDocumentsForVisaType(country, visaTypeSlug);

  return (
    <div className="min-h-screen py-8">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href={`/country/${country.slug}/apply`}
          className="inline-flex items-center text-sm font-medium text-muted hover:text-foreground mb-6"
        >
          ← Vize türü seçimine dön
        </Link>

        <div className="mb-8 flex items-center gap-4">
          <span className="text-4xl" aria-hidden>
            {country.flag}
          </span>
          <div>
            <p className="text-sm font-medium text-primary">Adım 2 / 2</p>
            <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
              Gerekli belgeler
            </h1>
            <p className="mt-1 text-muted">
              {country.name} – {visaInfo.name}
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-foreground border-b border-border pb-3 mb-4">
            Başvurunuz için hazırlamanız gereken belgeler
          </h2>
          <ul className="space-y-3">
            {documents.map((doc, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-foreground"
              >
                <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-semibold text-primary">
                  {i + 1}
                </span>
                {doc}
              </li>
            ))}
          </ul>
        </div>

        {country.processSteps && country.processSteps.length > 0 && (
          <div className="mt-8 rounded-xl border border-border bg-card p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-foreground border-b border-border pb-3 mb-4">
              Başvuru adımları
            </h2>
            <ol className="space-y-3">
              {country.processSteps.map((step) => (
                <li
                  key={step.step}
                  className="flex gap-3"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                    {step.step}
                  </span>
                  <span className="text-foreground">{step.title}</span>
                </li>
              ))}
            </ol>
          </div>
        )}

        {country.fees && (
          <div className="mt-6 rounded-xl border border-border bg-card p-6">
            <h2 className="font-semibold text-foreground">Ücretler</h2>
            <p className="mt-2 text-sm text-muted">{country.fees}</p>
          </div>
        )}

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href={`/country/${country.slug}`}
            className="inline-flex items-center rounded-lg border border-border bg-card px-4 py-2 font-medium text-foreground hover:bg-background"
          >
            Tüm {country.name} rehberi
          </Link>
          <Link
            href={site.links.contact}
            className="inline-flex items-center rounded-lg bg-primary px-4 py-2 font-medium text-primary-foreground hover:bg-primary-hover"
          >
            Soru için iletişim
          </Link>
        </div>
      </div>
    </div>
  );
}
