import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: `${site.name} – Türkiye'den seyahat edenlere net vize rehberi.`,
  openGraph: {
    title: "Hakkımızda | Vize Rehberi",
    description: site.description,
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
          Hakkımızda
        </h1>
        <div className="mt-8 space-y-6 text-foreground">
          <p className="leading-relaxed">
            {site.name}, Türkiye&apos;den diğer ülkelere seyahat edenler için
            vize sürecini anlaşılır ve adım adım anlatan bir bilgi platformudur.
          </p>
          <p className="leading-relaxed">
            Amacımız, &quot;ülke + vize türü + başvuru profili&quot; üçlüsünde
            netlik sağlamak. Hangi belgelerin gerekli olduğunu, başvurunun nasıl
            yapıldığını ve sık karşılaşılan red nedenlerini tek bir yerde
            bulabilmenizi hedefliyoruz.
          </p>
          <p className="leading-relaxed">
            Bu site yalnızca bilgilendirme amaçlıdır. Resmî vize kuralları ve
            güncel uygulamalar için her zaman ilgili konsolosluk veya resmî
            kaynaklara başvurun.
          </p>
        </div>
        <div className="mt-10">
          <a
            href="/contact"
            className="inline-flex items-center rounded-lg bg-primary px-4 py-2 font-semibold text-primary-foreground hover:bg-primary-hover"
          >
            İletişim
          </a>
        </div>
      </div>
    </div>
  );
}
