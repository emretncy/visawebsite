import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/lib/site";

const visaTypeData: Record<
  string,
  { name: string; description: string; content: string[] }
> = {
  "tourist-visa": {
    name: "Turist vizesi",
    description: "Tatil ve ziyaret amaçlı kısa süreli vize.",
    content: [
      "Turist vizesi, hedef ülkeye turizm veya aile/arkadaş ziyareti amacıyla kısa süreli giriş için verilir.",
      "Schengen’de genelde 90 gün/180 gün kuralı geçerlidir. Ulusal vizelerde süre ülkeye göre değişir.",
      "Genel belgeler: pasaport, fotoğraf, seyahat sigortası (Schengen için zorunlu), konaklama ve ulaşım rezervasyonları, mali durum belgeleri, iş/öğrenci belgesi.",
      "Ülkelere göre ek belgeler veya formlar istenebilir; ilgili ülke rehberinden kontrol edin.",
    ],
  },
  "business-visa": {
    name: "İş vizesi",
    description: "Toplantı, fuar ve iş görüşmeleri için vize.",
    content: [
      "İş vizesi, toplantı, fuar, müzakere veya kısa süreli iş amaçlı seyahatler için kullanılır.",
      "Davet mektubu (invitation letter) çoğu ülkede istenir. Davet eden firma veya kurum tarafından verilir.",
      "Genel belgeler: turist vizesi belgelerine ek olarak davet mektubu, iş veren onayı, şirket belgeleri.",
      "Ülkeye göre “business visa” veya “tourist + business purpose” farklı uygulanabilir; ülke sayfasına bakın.",
    ],
  },
  "student-visa": {
    name: "Öğrenci vizesi",
    description: "Eğitim ve dil kursu için vize.",
    content: [
      "Öğrenci vizesi, dil kursu, sertifika programı veya tam zamanlı eğitim için verilir.",
      "Kabul mektubu (acceptance letter) ve gerekiyorsa finansman kanıtı şarttır.",
      "Genel belgeler: pasaport, kabul mektubu, mali durum (burs/hesap), sağlık sigortası, bazen dil sınavı sonucu.",
      "Süre ve çalışma izni ülkeye göre değişir; hedef ülkenin öğrenci vizesi sayfasına bakın.",
    ],
  },
  "family-reunion": {
    name: "Aile birleşimi / Aile ziyareti",
    description: "Aile üyelerini ziyaret veya birleşim vizesi.",
    content: [
      "Aile ziyareti vizesi, hedef ülkede ikamet eden aile üyesini ziyaret için kısa süreli vizedir.",
      "Davet mektubu ve davet edenin ikamet/vatandaşlık belgeleri genelde istenir.",
      "Aile birleşimi (uzun süreli) farklı kurallara tabidir; ülkeye göre başvuru koşulları değişir.",
      "Belgeler: davet mektubu, akrabalık belgesi, davet edenin gelir/konut belgeleri, standart vize belgeleri.",
    ],
  },
};

const slugs = Object.keys(visaTypeData);

export async function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const data = visaTypeData[params.slug];
  if (!data)
    return { title: "Vize türü bulunamadı" };
  return {
    title: `${data.name} | Vize Türleri`,
    description: data.description,
  };
}

export default function VisaTypePage({
  params,
}: {
  params: { slug: string };
}) {
  const data = visaTypeData[params.slug];
  if (!data) notFound();

  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/visa-types"
          className="text-sm font-medium text-muted hover:text-foreground"
        >
          ← Vize türlerine dön
        </Link>
        <h1 className="mt-6 text-3xl font-bold text-foreground">
          {data.name}
        </h1>
        <p className="mt-2 text-muted">{data.description}</p>
        <div className="mt-8 space-y-4 text-foreground">
          {data.content.map((paragraph, i) => (
            <p key={i} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="mt-10">
          <Link
            href={site.links.countries}
            className="inline-flex items-center rounded-lg bg-primary px-4 py-2 font-semibold text-primary-foreground hover:bg-primary-hover"
          >
            Ülkelere göre incele
          </Link>
        </div>
      </div>
    </div>
  );
}
