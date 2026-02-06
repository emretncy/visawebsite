import type { Metadata } from "next";
import { countries, continentLabels } from "@/data/countries";
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

const continentOrder: (keyof typeof continentLabels)[] = [
  "europe",
  "north-america",
  "asia",
  "oceania",
  "other",
];

export default function CountriesPage() {
  const byContinent = continentOrder.map((continent) => ({
    continent,
    label: continentLabels[continent],
    countries: countries.filter((c) => c.continent === continent),
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
            gidin. Ülkeler kıtaya göre gruplandırılmıştır.
          </p>
        </div>

        {byContinent.map(
          ({ continent, label, countries: list }) =>
            list.length > 0 && (
              <section key={continent} className="mb-12">
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
