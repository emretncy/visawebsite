import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description: "Gizlilik politikası ve kişisel verilerin işlenmesi.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-foreground">
          Gizlilik Politikası
        </h1>
        <p className="mt-2 text-muted">
          Son güncelleme: {new Date().toLocaleDateString("tr-TR")}
        </p>
        <div className="mt-8 space-y-6 text-foreground">
          <p className="leading-relaxed">
            Bu web sitesi ziyaretçilerinin gizliliğine saygı duyar. Topladığımız
            veriler (ör. iletişim formu ile gönderilen ad, e-posta) yalnızca
            talebinize yanıt vermek ve siteyi iyileştirmek amacıyla
            kullanılır.
          </p>
          <p className="leading-relaxed">
            Kişisel verileriniz üçüncü taraflarla paylaşılmaz (yasal zorunluluk
            hariç). Verilerinize erişim, düzeltme veya silme talebinde bulunmak
            için bizimle iletişime geçebilirsiniz.
          </p>
          <p className="leading-relaxed">
            Çerezler ve analiz araçları, site kullanımını anlamak için
            kullanılabilir; tarayıcı ayarlarınızdan çerez tercihlerinizi
            yönetebilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
}
