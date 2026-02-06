import { notFound } from "next/navigation";
import Link from "next/link";
import { getCountryBySlug, countries } from "@/data/countries";
import { site } from "@/lib/site";
import type { Metadata } from "next";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return countries.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const country = getCountryBySlug(params.slug);
  if (!country)
    return { title: "Ülke bulunamadı" };
  return {
    title: `${country.name} Vize Rehberi`,
    description: `${country.name} için vize gereksinimleri, belgeler, süreç ve randevu. Türkiye'den başvuru adımları.`,
    openGraph: {
      title: `${country.name} Vize Rehberi | ${site.name}`,
      description: `${country.name} vize rehberi: belgeler, süreç, ücretler.`,
    },
  };
}

function Section({
  id,
  title,
  children,
  className = "",
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`rounded-xl border border-border bg-card p-6 sm:p-8 ${className}`}>
      <h2 className="text-xl font-semibold text-foreground border-b border-border pb-3 mb-4">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function CountryDetailPage({ params }: PageProps) {
  const country = getCountryBySlug(params.slug);
  if (!country) notFound();

  return (
    <div className="min-h-screen py-8">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/countries"
          className="inline-flex items-center text-sm font-medium text-muted hover:text-foreground mb-6"
        >
          ← Ülkelere dön
        </Link>

        {/* Header */}
        <div className="mb-8 flex flex-wrap items-center gap-4">
          <span className="text-5xl" aria-hidden>
            {country.flag}
          </span>
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              {country.name}
            </h1>
            <p className="text-muted">
              {country.visaTypeLabel} · İşlem süresi: {country.processingTime}
            </p>
          </div>
        </div>

        {/* Overview */}
        <Section id="overview" title="Genel bakış" className="mb-6">
          <p className="text-foreground leading-relaxed">
            {country.visaRequirements}
          </p>
        </Section>

        {/* Visa types */}
        <Section id="visa-types" title="Vize türleri" className="mb-6">
          <ul className="space-y-2">
            {country.visaTypes.map((vt) => (
              <li key={vt.slug} className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                <Link
                  href={site.links.visaType(vt.slug)}
                  className="text-primary hover:text-primary-hover"
                >
                  {vt.name}
                </Link>
              </li>
            ))}
          </ul>
        </Section>

        {/* Process */}
        <Section id="process" title="Başvuru adımları" className="mb-6">
          <ol className="space-y-4">
            {country.processSteps.map((step) => (
              <li key={step.step} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  {step.step}
                </span>
                <div>
                  <span className="font-medium text-foreground">
                    {step.title}
                  </span>
                  {step.description && (
                    <p className="mt-1 text-sm text-muted">
                      {step.description}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </Section>

        {/* Documents */}
        <Section id="documents" title="Gerekli belgeler" className="mb-6">
          <ul className="space-y-2">
            {country.requiredDocuments.map((doc, i) => (
              <li key={i} className="flex items-start gap-2 text-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {doc}
              </li>
            ))}
          </ul>
          {country.documentsByProfile && (
            <div className="mt-6 space-y-4">
              {Object.entries(country.documentsByProfile).map(
                ([key, profile]) => (
                  <div key={key}>
                    <h3 className="font-medium text-foreground">
                      {profile.title}
                    </h3>
                    <ul className="mt-2 space-y-1 text-sm text-muted">
                      {profile.items.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                )
              )}
            </div>
          )}
        </Section>

        {/* Fees */}
        {country.fees && (
          <Section id="fees" title="Ücretler" className="mb-6">
            <p className="text-foreground">{country.fees}</p>
          </Section>
        )}

        {/* Appointment */}
        {country.appointmentInfo && (
          <Section id="appointment" title="Randevu" className="mb-6">
            <p className="text-foreground">{country.appointmentInfo}</p>
          </Section>
        )}

        {/* Rejection reasons */}
        {country.rejectionReasons && country.rejectionReasons.length > 0 && (
          <Section id="rejection" title="Sık red nedenleri" className="mb-6">
            <ul className="space-y-2">
              {country.rejectionReasons.map((reason, i) => (
                <li key={i} className="flex items-start gap-2 text-foreground">
                  <span className="text-muted">•</span>
                  {reason}
                </li>
              ))}
            </ul>
          </Section>
        )}

        {/* FAQ */}
        {country.faq && country.faq.length > 0 && (
          <Section id="faq" title="Sık sorulan sorular" className="mb-6">
            <ul className="space-y-4">
              {country.faq.map((item, i) => (
                <li key={i}>
                  <h4 className="font-medium text-foreground">
                    {item.question}
                  </h4>
                  <p className="mt-1 text-sm text-muted">{item.answer}</p>
                </li>
              ))}
            </ul>
          </Section>
        )}

        {/* Consulates */}
        <Section id="consulates" title="Konsolosluklar" className="mb-6">
          <div className="space-y-6">
            {country.activeConsulates.map((consulate, i) => (
              <div
                key={i}
                className="rounded-lg border border-border bg-background/50 p-4"
              >
                <h3 className="font-semibold text-foreground">
                  {consulate.city} Konsolosluğu
                </h3>
                <p className="mt-2 text-sm text-muted">{consulate.address}</p>
                {consulate.phone && (
                  <a
                    href={`tel:${consulate.phone}`}
                    className="mt-2 block text-sm text-primary hover:text-primary-hover"
                  >
                    {consulate.phone}
                  </a>
                )}
                {consulate.email && (
                  <a
                    href={`mailto:${consulate.email}`}
                    className="mt-1 block text-sm text-primary hover:text-primary-hover"
                  >
                    {consulate.email}
                  </a>
                )}
              </div>
            ))}
          </div>
        </Section>

        <div className="rounded-xl border border-border bg-primary/10 p-6 text-center">
          <p className="font-medium text-foreground">
            Başvuru sürecinde yardım mı istiyorsunuz?
          </p>
          <Link
            href={site.links.contact}
            className="mt-3 inline-block rounded-lg bg-primary px-4 py-2 font-semibold text-primary-foreground hover:bg-primary-hover"
          >
            İletişim
          </Link>
        </div>
      </div>
    </div>
  );
}
