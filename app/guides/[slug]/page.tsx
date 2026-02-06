import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/lib/site";

const guideData: Record<string, { title: string; content: string[] }> = {
  "how-to-get-a-visa": {
    title: "Vize nasıl alınır?",
    content: [
      "Hedef ülkenizi ve vize türünüzü (turist, iş, öğrenci vb.) belirleyin. Ülke sayfamızdan gerekli belgeleri ve adımları inceleyin.",
      "Pasaport, fotoğraf, seyahat sigortası (Schengen için zorunlu), konaklama ve ulaşım rezervasyonları, mali durum belgeleri ve iş/öğrenci belgesi çoğu başvuruda istenir. Ülkeye özel ek listeyi kontrol edin.",
      "Resmî başvuru formunu doldurun (online veya kâğıt, ülkeye göre değişir), ücreti yatırın ve randevu alın. Randevu günü belgelerinizi teslim edin; biyometri gerekebilir.",
      "İşlem süresi bitince pasaportunuzu teslim alın. Red alırsanız gerekçeyi inceleyip eksikleri tamamlayarak yeniden başvurabilirsiniz.",
    ],
  },
  "visa-appointment-guide": {
    title: "Vize randevu rehberi",
    content: [
      "Randevu, konsolosluk veya yetkili vize başvuru merkezi (VAC) üzerinden alınır. Ülke sayfamızda ilgili link ve kısa açıklama bulunur.",
      "Randevuyu mümkünse seyahat tarihinizden en az 4–6 hafta önce planlayın; yoğunluk döneminde randevu bulmak zor olabilir.",
      "Randevu öncesi belge listesini tekrar gözden geçirin. Eksik belge ile giderseniz başvurunuz alınmayabilir veya ek randevu istenebilir.",
      "Randevu günü kimlik, başvuru formu ve tüm belgelerinizin asıl ve fotokopilerini (gerekiyorsa) götürün. Biyometri (parmak izi, fotoğraf) alınacaksa randevuya şahsen gitmeniz gerekir.",
    ],
  },
  "visa-documents-guide": {
    title: "Vize belgeleri rehberi",
    content: [
      "Pasaport: Genelde en az 3–6 ay geçerlilik ve boş sayfa istenir; ülkeye göre değişir. Eski pasaportlar da bazen istenir.",
      "Fotoğraf: Biyometrik ölçülere uygun, son 6 ay içinde çekilmiş fotoğraf. Ülkeye göre adet ve ölçü farklıdır.",
      "Seyahat sigortası: Schengen için minimum 30.000 EUR kapsamı ve tüm Schengen bölgesi geçerli olmalı.",
      "Konaklama ve ulaşım: Rezervasyon veya davet mektubu; iptal edilebilir rezervasyon birçok ülkede kabul görür.",
      "Mali durum: Banka ekstreleri, maaş bordrosu veya iş veren mektubu ile gelir ve dönüş niyetinizi gösterin. Öğrenci veya çalışan için ek belgeler gerekebilir.",
    ],
  },
  "visa-rejection-guide": {
    title: "Vize red nedenleri",
    content: [
      "Yetersiz bağlar: Konsolosluk, ülkenize dönmeyeceğinizi düşünürse red edebilir. İş, aile, mülk ve gelir belgeleri ile bağlarınızı güçlü gösterin.",
      "Mali durum: Gelir ve tasarrufunuzun seyahati karşılayacak düzeyde olduğunu banka ekstreleri ve iş belgesi ile kanıtlayın.",
      "Eksik veya tutarsız belgeler: Formdaki bilgilerle belgeler uyumlu olmalı. Seyahat amacı net ve inandırıcı olmalı.",
      "Red sonrası: Gerekçe mektubunu inceleyin. Eksikleri tamamlayıp yeni belgelerle tekrar başvurabilirsiniz; aynı konsolosluğa hemen tekrar başvurmak yerine bir süre beklemek bazen daha iyi sonuç verir.",
    ],
  },
  "first-time-visa": {
    title: "İlk kez vize başvurusu",
    content: [
      "İlk defa vize alacaksanız önce hedef ülkenin resmî vize sayfasını ve bizim ülke rehberimizi okuyun. Gerekli belgeler ve süreç ülkeden ülkeye değişir.",
      "Pasaportunuzun geçerlilik süresi yeterli mi kontrol edin. Fotoğraf ve sigorta gibi standart kalemleri erkenden hazırlayın.",
      "Randevuyu zamanında alın; ilk başvuruda biyometri alındığı için şahsen gitmeniz gerekir. Randevu günü tüm belgelerinizi düzenli ve eksiksiz götürün.",
      "Başvurunuz red alırsa panik yapmayın. Gerekçeyi okuyun, eksikleri tamamlayın ve gerekirse bir süre sonra tekrar deneyin.",
    ],
  },
};

const slugs = Object.keys(guideData);

export async function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const data = guideData[params.slug];
  if (!data) return { title: "Rehber bulunamadı" };
  return {
    title: `${data.title} | Rehberler`,
    description: data.content[0]?.slice(0, 160) ?? data.title,
  };
}

export default function GuidePage({
  params,
}: {
  params: { slug: string };
}) {
  const data = guideData[params.slug];
  if (!data) notFound();

  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/guides"
          className="text-sm font-medium text-muted hover:text-foreground"
        >
          ← Rehberlere dön
        </Link>
        <h1 className="mt-6 text-3xl font-bold text-foreground">
          {data.title}
        </h1>
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
            Ülke rehberlerine git
          </Link>
        </div>
      </div>
    </div>
  );
}
