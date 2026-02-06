import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kullanım Koşulları",
  description: "Site kullanım koşulları ve sorumluluk reddi.",
};

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-foreground">
          Kullanım Koşulları
        </h1>
        <p className="mt-2 text-muted">
          Son güncelleme: {new Date().toLocaleDateString("tr-TR")}
        </p>
        <div className="mt-8 space-y-6 text-foreground">
          <p className="leading-relaxed">
            Bu site yalnızca bilgilendirme amaçlıdır. Sunulan bilgiler genel
            niteliktedir ve resmî vize kurallarının yerine geçmez. Vize
            başvurusu yapmadan önce ilgili konsolosluk veya resmî kaynaklardan
            güncel bilgi almanız gerekir.
          </p>
          <p className="leading-relaxed">
            Sitedeki içerikler &quot;olduğu gibi&quot; sunulmaktadır. Vize
            sonucundan veya başvuru sürecinden doğan doğrudan veya dolaylı
            zararlardan site sorumlu tutulamaz.
          </p>
          <p className="leading-relaxed">
            Siteyi kullanarak bu koşulları kabul etmiş sayılırsınız.
          </p>
        </div>
      </div>
    </div>
  );
}
