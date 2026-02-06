import Link from "next/link";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-accent text-primary-foreground">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/90 to-accent" />
      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-24 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Başvurmadan önce vize sürecinizi anlayın
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/90 sm:text-xl">
          Türkiye&apos;den seyahat edenler için adım adım, net vize rehberi
        </p>
        <div className="mt-10">
          <Link
            href="/countries"
            className="inline-flex items-center justify-center rounded-lg bg-primary-foreground px-6 py-3 text-base font-semibold text-accent shadow-sm hover:bg-primary-foreground/90 transition-colors"
          >
            Hedefinizi seçin
          </Link>
        </div>
      </div>
    </section>
  );
}
