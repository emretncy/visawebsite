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
    if (!country) {
      router.push("/countries");
      return;
    }
    // Map purpose to visa type slug; if set, go straight to documents step
    const purposeToVisaType: Record<string, string> = {
      tourist: "tourist-visa",
      business: "business-visa",
      student: "student-visa",
      family: "family-reunion",
    };
    const visaTypeSlug = purpose ? purposeToVisaType[purpose] : null;
    if (visaTypeSlug) {
      router.push(`/country/${country}/apply/${visaTypeSlug}`);
    } else {
      router.push(`/country/${country}/apply`);
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
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-4">
            <div className="flex-1 min-w-0">
              <label htmlFor="country" className="block text-sm font-medium text-foreground">
                Hedef ülke
              </label>
              <select
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="mt-1 block w-full rounded-lg border border-border bg-card px-3 py-2.5 text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              >
                <option value="">Ülke seçin</option>
                {countries.map((c) => (
                  <option key={c.slug} value={c.slug}>
                    {c.flag} {c.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex-1 min-w-0">
              <label htmlFor="purpose" className="block text-sm font-medium text-foreground">
                Vize amacı
              </label>
              <select
                id="purpose"
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                className="mt-1 block w-full rounded-lg border border-border bg-card px-3 py-2.5 text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              >
                <option value="">Amaç seçin</option>
                {site.visaPurposes.map((p) => (
                  <option key={p.value} value={p.value}>
                    {p.label}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="button"
              onClick={handleStart}
              className="w-full sm:w-auto shrink-0 rounded-lg bg-primary px-6 py-2.5 font-semibold text-primary-foreground hover:bg-primary-hover transition-colors flex items-center justify-center gap-2 h-[42px] sm:min-w-[120px]"
            >
              Rehbere git
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
