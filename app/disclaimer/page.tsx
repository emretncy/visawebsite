import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sorumluluk Reddi",
  description: "Bilgilendirme amaçlı içerik ve sorumluluk sınırları.",
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-foreground">
          Sorumluluk Reddi
        </h1>
        <div className="mt-8 space-y-6 text-foreground">
          <p className="leading-relaxed">
            Bu web sitesindeki vize bilgileri yalnızca genel bilgilendirme
            amacıyla sunulmaktadır. Vize kuralları ve uygulamalar ülkelere ve
            zamana göre değişebilir.
          </p>
          <p className="leading-relaxed">
            Resmî ve güncel bilgi için her zaman ilgili ülkenin konsolosluğu,
            büyükelçiliği veya resmî vize sayfalarına başvurunuz. Başvuru
            öncesi belge listesi ve süreç için konsolosluk kaynaklarını
            kontrol etmeniz önemle tavsiye edilir.
          </p>
          <p className="leading-relaxed">
            Bu sitedeki hiçbir bilgi hukuki veya resmî danışmanlık niteliği
            taşımaz. Vize sonucu veya başvuru sürecinden doğan sonuçlardan
            site işletmecisi sorumlu tutulamaz.
          </p>
        </div>
      </div>
    </div>
  );
}
