import type { Metadata } from "next";
import Link from "next/link";
import { countries, regionLabels } from "@/data/countries";
import CountryCard from "@/components/CountryCard";

export const metadata: Metadata = {
  title: "Ülkeler",
  description:
    "Türkiye'den seyahat edeceğiniz ülkelere göre vize gereksinimleri, belgeler ve başvuru süreci.",
  openGraph: {
    title: "Ülkeler | Vize Rehberi",
    description:
      "Ülkelere göre vize rehberleri: Schengen, Birleşik Krallık, ABD, Kanada, Japonya ve daha fazlası.",
  },
};

const regionOrder: (keyof typeof regionLabels)[] = [
  "schengen",
  "uk",
  "usa",
  "canada",
  "japan",
  "others",
];

export default function CountriesPage() {
  const byRegion = regionOrder.map((region) => ({
    region,
    label: regionLabels[region],
    countries: countries.filter((c) => c.region === region),
  }));

  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
            Ülkeler
          </h1>
          <p className="mt-2 text-muted">
            Hedef ülkenizi seçin; vize türleri, belgeler ve süreç rehberine
            gidin.
          </p>
        </div>

        <div className="mb-8 rounded-xl border border-border bg-card p-4">
          <h2 className="font-semibold text-foreground">Schengen bölgesi</h2>
          <p className="mt-1 text-sm text-muted">
            Tek Schengen vizesi ile birden fazla ülkeye seyahat edebilirsiniz.
          </p>
          <Link
            href="/countries/schengen"
            className="mt-3 inline-flex items-center text-sm font-medium text-primary hover:text-primary-hover"
          >
            Schengen ülkelerini listele →
          </Link>
        </div>

        {byRegion.map(
          ({ region, label, countries: list }) =>
            list.length > 0 && (
              <section key={region} className="mb-12">
                <h2 className="mb-4 text-xl font-semibold text-foreground">
                  {label}
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {list.map((country) => (
                    <CountryCard key={country.slug} country={country} />
                  ))}
                </div>
              </section>
            )
        )}
      </div>
    </div>
  );
}
