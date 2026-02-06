export interface VisaTypeInfo {
  slug: string;
  name: string;
  description: string;
  whoItFor: string;
  typicalDuration: string;
  keyRequirements: string;
}

export const visaTypesInfo: Record<string, VisaTypeInfo> = {
  "tourist-visa": {
    slug: "tourist-visa",
    name: "Turist vizesi",
    description:
      "Tatil, turizm veya aile ve arkadaş ziyareti amacıyla kısa süreli giriş için verilen vizedir. Hedef ülkeye turist olarak gireceğiniz durumlarda başvurulur.",
    whoItFor:
      "Tatil yapacaklar, aile/arkadaş ziyareti yapacaklar, kısa süreli geziler planlayanlar.",
    typicalDuration:
      "Schengen’de genelde 90 gün (180 gün içinde). Diğer ülkelerde 2 hafta–6 ay arası değişir.",
    keyRequirements:
      "Pasaport, fotoğraf, seyahat sigortası (Schengen için zorunlu), konaklama ve ulaşım rezervasyonları, mali durum belgeleri, iş veya öğrenci belgesi.",
  },
  "business-visa": {
    slug: "business-visa",
    name: "İş vizesi",
    description:
      "Toplantı, fuar, müzakere veya kısa süreli iş amaçlı seyahatler için kullanılır. Ücret hedef ülkede alınmıyorsa genelde kısa süreli iş vizesi yeterlidir.",
    whoItFor:
      "İş toplantısına gidecekler, fuara katılacaklar, müşteri ziyareti yapacaklar, kısa süreli iş görüşmeleri yapacaklar.",
    typicalDuration:
      "Genelde 1–3 ay veya toplantı/fuar süresi kadar. Ülkeye göre değişir.",
    keyRequirements:
      "Turist vizesi belgelerine ek olarak davet mektubu (invitation letter), iş veren onayı ve şirket belgeleri. Davet eden firma veya kurum tarafından verilen mektup çoğu ülkede zorunludur.",
  },
  "student-visa": {
    slug: "student-visa",
    name: "Öğrenci vizesi",
    description:
      "Dil kursu, sertifika programı veya tam zamanlı eğitim için verilir. Eğitim süresi ve türüne göre vize süresi değişir.",
    whoItFor:
      "Dil kursuna gidecekler, üniversite veya yüksek lisans okuyacaklar, kısa süreli eğitim programına katılacaklar.",
    typicalDuration:
      "Kurs veya program süresine göre; birkaç haftadan birkaç yıla kadar. Çalışma izni ülkeye göre değişir.",
    keyRequirements:
      "Kabul mektubu (acceptance letter), mali durum kanıtı (burs veya hesap), sağlık sigortası. Bazı ülkelerde dil sınavı sonucu veya önceki eğitim belgeleri istenir.",
  },
  "family-reunion": {
    slug: "family-reunion",
    name: "Aile birleşimi / Aile ziyareti",
    description:
      "Hedef ülkede ikamet eden aile üyesini ziyaret için kısa süreli vize veya uzun süreli aile birleşimi vizesi. Ziyaret vizesi kısa kalış, birleşim vizesi ikamet amaçlıdır.",
    whoItFor:
      "Eş, çocuk, ebeveyn veya diğer yakın akrabayı ziyaret edecekler veya yanlarına yerleşecekler.",
    typicalDuration:
      "Ziyaret: birkaç hafta–6 ay. Aile birleşimi: ülkeye göre kalıcı veya uzun süreli.",
    keyRequirements:
      "Davet mektubu, akrabalık belgesi (evlilik, doğum vb.), davet edenin ikamet ve gelir belgeleri. Standart vize belgeleri (pasaport, sigorta, mali durum) de istenir.",
  },
};

export function getVisaTypeInfo(slug: string): VisaTypeInfo | undefined {
  return visaTypesInfo[slug];
}

export const visaTypeSlugs = Object.keys(visaTypesInfo);
