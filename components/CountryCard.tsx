import Link from "next/link";
import type { Country } from "@/data/countries";
import { site } from "@/lib/site";

interface CountryCardProps {
  country: Country;
}

export default function CountryCard({ country }: CountryCardProps) {
  const href = site.links.country(country.slug);
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-xl border border-border bg-card shadow-sm transition-all hover:border-primary hover:shadow-md overflow-hidden"
    >
      <div className="flex h-32 items-center justify-center bg-background/50">
        <span className="text-5xl" aria-hidden>
          {country.flag}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
          {country.name}
        </h3>
        <p className="mt-1 text-sm text-muted">
          {country.visaTypeLabel} · {country.processingTime}
        </p>
        <p className="mt-2 text-sm text-muted">
          Vize rehberi →
        </p>
      </div>
    </Link>
  );
}
