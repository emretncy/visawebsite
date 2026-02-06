import { notFound } from "next/navigation";
import Link from "next/link";
import { getCountryBySlug, countries } from "@/data/countries";
import { getVisaTypeInfo } from "@/data/visaTypes";
import type { Metadata } from "next";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return countries.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const country = getCountryBySlug(params.slug);
  if (!country)
    return { title: "Ülke bulunamadı" };
  return {
    title: `Vize türü seçin – ${country.name} | Başvuru rehberi`,
    description: `${country.name} için vize türünüzü seçin; ardından gerekli belgeleri görün.`,
  };
}

export default function ApplyVisaTypePage({ params }: PageProps) {
  const country = getCountryBySlug(params.slug);
  if (!country) notFound();

  return (
    <div className="min-h-screen py-8">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href={`/country/${country.slug}`}
          className="inline-flex items-center text-sm font-medium text-muted hover:text-foreground mb-6"
        >
          ← {country.name} rehberine dön
        </Link>

        <div className="mb-8 flex items-center gap-4">
          <span className="text-4xl" aria-hidden>
            {country.flag}
          </span>
          <div>
            <p className="text-sm font-medium text-primary">Adım 1 / 2</p>
            <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
              Vize türünüzü seçin
            </h1>
            <p className="mt-1 text-muted">
              {country.name} için hangi vize türüne başvuruyorsunuz?
            </p>
          </div>
        </div>

        <ul className="space-y-4">
          {country.visaTypes.map((vt) => {
            const info = getVisaTypeInfo(vt.slug);
            const href = `/country/${country.slug}/apply/${vt.slug}`;
            return (
              <li key={vt.slug}>
                <Link
                  href={href}
                  className="block rounded-xl border border-border bg-card p-6 text-left transition-all hover:border-primary hover:shadow-md"
                >
                  <h2 className="text-lg font-semibold text-foreground">
                    {vt.name}
                  </h2>
                  {info && (
                    <div className="mt-3 space-y-2 text-sm text-muted">
                      <p>{info.description}</p>
                      <p>
                        <span className="font-medium text-foreground">
                          Kimler başvurur:
                        </span>{" "}
                        {info.whoItFor}
                      </p>
                      <p>
                        <span className="font-medium text-foreground">
                          Tipik süre:
                        </span>{" "}
                        {info.typicalDuration}
                      </p>
                      <p>
                        <span className="font-medium text-foreground">
                          Temel gereksinimler:
                        </span>{" "}
                        {info.keyRequirements}
                      </p>
                    </div>
                  )}
                  <span className="mt-4 inline-block text-sm font-medium text-primary">
                    Bu vize türü için belgeleri gör →
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
