"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { site } from "@/lib/site";
import { countries } from "@/data/countries";

export default function QuickSelector() {
  const router = useRouter();
  const [country, setCountry] = useState("");
  const [purpose, setPurpose] = useState("");

  const handleStart = () => {
    if (country) {
      router.push(site.links.country(country));
    } else {
      router.push("/countries");
    }
  };

  return (
    <section className="border-b border-border bg-card py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="text-center text-lg font-semibold text-foreground sm:text-xl">
            Hızlı başlangıç
          </h2>
          <p className="mt-1 text-center text-sm text-muted">
            Hedef ülke ve vize amacına göre rehbere gidin
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-foreground">
                Hedef ülke
              </label>
              <select
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="mt-1 block w-full rounded-lg border border-border bg-card px-3 py-2 text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              >
                <option value="">Ülke seçin</option>
                {countries.map((c) => (
                  <option key={c.slug} value={c.slug}>
                    {c.flag} {c.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="purpose" className="block text-sm font-medium text-foreground">
                Vize amacı
              </label>
              <select
                id="purpose"
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                className="mt-1 block w-full rounded-lg border border-border bg-card px-3 py-2 text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              >
                <option value="">Amaç seçin</option>
                {site.visaPurposes.map((p) => (
                  <option key={p.value} value={p.value}>
                    {p.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-6">
            <button
              type="button"
              onClick={handleStart}
              className="w-full rounded-lg bg-primary px-4 py-3 font-semibold text-primary-foreground hover:bg-primary-hover transition-colors sm:w-auto sm:px-8"
            >
              Başla
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
