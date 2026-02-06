import type { Metadata } from "next";
import { schengenCountries } from "@/data/countries";
import CountryCard from "@/components/CountryCard";

export const metadata: Metadata = {
  title: "Schengen Ülkeleri",
  description:
    "Schengen vizesi ile seyahat edebileceğiniz ülkeler: Almanya, Fransa, İtalya, Hollanda, İspanya, Yunanistan ve daha fazlası. Tek vize ile tüm bölgeye seyahat.",
  openGraph: {
    title: "Schengen Ülkeleri | Vize Rehberi",
    description:
      "Schengen bölgesi ülkeleri ve vize rehberleri. Türkiye'den başvuru adımları.",
  },
};

export default function SchengenCountriesPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
            Schengen bölgesi
          </h1>
          <p className="mt-2 text-muted">
            Tek Schengen vizesi ile aşağıdaki ülkelere seyahat edebilirsiniz.
            Ana hedef ülkenize veya ilk giriş yapacağınız ülkeye göre başvuru
            yapın.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {schengenCountries.map((country) => (
            <CountryCard key={country.slug} country={country} />
          ))}
        </div>
      </div>
    </div>
  );
}
