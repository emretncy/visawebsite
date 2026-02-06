import { site } from "@/lib/site";

export default function HowItWorks() {
  return (
    <section className="border-t border-border bg-card/50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
          Nasıl çalışır?
        </h2>
        <p className="mt-2 text-muted">
          Ülke + vize türü + başvuru profili: net adımlarla ilerleyin
        </p>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {site.howItWorks.map((item) => (
            <div key={item.step} className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                {item.step}
              </div>
              <h3 className="mt-4 font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
