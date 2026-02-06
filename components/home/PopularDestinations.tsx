import Link from "next/link";

const popularConfig: { slug: string; label: string; flag: string; href: string }[] = [
  { slug: "schengen", label: "Schengen Bölgesi", flag: "🇪🇺", href: "/countries/schengen" },
  { slug: "uk", label: "Birleşik Krallık", flag: "🇬🇧", href: "/country/uk" },
  { slug: "usa", label: "Amerika Birleşik Devletleri", flag: "🇺🇸", href: "/country/usa" },
  { slug: "japan", label: "Japonya", flag: "🇯🇵", href: "/country/japan" },
];

export default function PopularDestinations() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
          Popüler hedefler
        </h2>
        <p className="mt-2 text-muted">
          En çok aranan ülke ve bölge rehberleri
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {popularConfig.map((item) => (
            <Link
              key={item.slug}
              href={item.href}
              className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:border-primary hover:shadow-md"
            >
              <span className="text-4xl" aria-hidden>
                {item.flag}
              </span>
              <div>
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {item.label}
                </span>
                <p className="text-sm text-muted">
                  Vize rehberi →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
