export interface Consulate {
  city: string;
  address: string;
  phone?: string;
  email?: string;
}

export interface CountryVisaType {
  slug: string;
  name: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description?: string;
}

export interface DocumentProfile {
  title: string;
  items: string[];
}

export interface CountryFAQ {
  question: string;
  answer: string;
}

export type RegionSlug = "schengen" | "uk" | "usa" | "canada" | "japan" | "others";

export interface Country {
  /** English URL slug (e.g. italy, usa) */
  slug: string;
  name: string;
  flag: string;
  region: RegionSlug;
  visaRequirements: string;
  /** Visa type: Schengen / National etc. */
  visaTypeLabel: string;
  /** Average processing time description */
  processingTime: string;
  /** Available visa types for this country */
  visaTypes: CountryVisaType[];
  processSteps: ProcessStep[];
  requiredDocuments: string[];
  /** Documents by applicant profile */
  documentsByProfile?: Record<string, DocumentProfile>;
  activeConsulates: Consulate[];
  /** Fee description or amount */
  fees?: string;
  /** Appointment booking info */
  appointmentInfo?: string;
  /** Common rejection reasons */
  rejectionReasons?: string[];
  faq?: CountryFAQ[];
}

const defaultProcessSteps: ProcessStep[] = [
  { step: 1, title: "Gerekli belgeleri hazırlayın" },
  { step: 2, title: "Online başvuru formunu doldurun" },
  { step: 3, title: "Randevu alın" },
  { step: 4, title: "Biyometri ve belgeleri teslim edin" },
  { step: 5, title: "Kararı bekleyin" },
];

export const countries: Country[] = [
  {
    slug: "usa",
    name: "Amerika Birleşik Devletleri",
    flag: "🇺🇸",
    region: "usa",
    visaTypeLabel: "Ulusal (B-1/B-2)",
    processingTime: "2–4 hafta",
    visaRequirements:
      "Türk vatandaşları ABD'ye seyahat etmek için B-1/B-2 turist veya iş vizesi almalıdır. DS-160 formu doldurulur, ardından konsoloslukta mülakat yapılır.",
    visaTypes: [
      { slug: "tourist-visa", name: "Turist vizesi" },
      { slug: "business-visa", name: "İş vizesi" },
      { slug: "student-visa", name: "Öğrenci vizesi" },
    ],
    processSteps: [
      { step: 1, title: "DS-160 formunu doldurun" },
      { step: 2, title: "Vize ücretini yatırın ve randevu alın" },
      { step: 3, title: "Konsoloslukta mülakata katılın" },
      { step: 4, title: "Pasaport ve kararı bekleyin" },
    ],
    requiredDocuments: [
      "Geçerli pasaport (en az 6 ay geçerlilik)",
      "DS-160 başvuru formu",
      "Vize ücreti ödeme makbuzu",
      "2 adet 5x5 cm biyometrik fotoğraf",
      "Seyahat amacını gösteren belgeler",
      "Mali durum belgeleri (banka ekstreleri)",
      "İş veya öğrenci belgesi",
      "Seyahat sigortası",
    ],
    documentsByProfile: {
      employed: {
        title: "Çalışanlar",
        items: ["İş veren mektubu", "Maaş bordrosu", "SGK işe giriş belgesi"],
      },
      student: {
        title: "Öğrenciler",
        items: ["Öğrenci belgesi", "Okul kimliği"],
      },
      selfEmployed: {
        title: "Serbest / Kendi işi",
        items: ["Vergi levhası", "Ticaret sicil gazetesi", "Banka ekstreleri"],
      },
    },
    activeConsulates: [
      { city: "İstanbul", address: "Büyükdere Caddesi No: 75, 34394 Şişli, İstanbul", phone: "+90 212 335 9000", email: "istanbulacs@state.gov" },
      { city: "Ankara", address: "Atatürk Bulvarı No: 110, 06100 Kavaklıdere, Ankara", phone: "+90 312 455 5555", email: "ankaraacs@state.gov" },
    ],
    fees: "Vize başvuru ücreti yaklaşık 185 USD. Randevu ve diğer hizmetler ek ücrete tabidir.",
    appointmentInfo: "CEAC sisteminden randevu alınır. İstanbul ve Ankara’da başvuru merkezleri bulunur.",
    rejectionReasons: [
      "Yetersiz bağlar (ülkeye dönüş niyeti kanıtlanamadı)",
      "Mali durumun yeterince gösterilmemesi",
      "Eksik veya tutarsız belgeler",
      "DS-160’ta hatalı veya çelişkili bilgi",
    ],
    faq: [
      { question: "ABD vizesi ne kadar sürer?", answer: "Randevudan sonra genelde 1–2 hafta içinde pasaport iade edilir. Yoğunluk döneminde süre uzayabilir." },
      { question: "Mülakatta ne sorulur?", answer: "Seyahat amacı, işiniz, mali durumunuz ve Türkiye’ye dönüş planlarınız hakkında kısa sorular sorulur." },
    ],
  },
  {
    slug: "uk",
    name: "Birleşik Krallık",
    flag: "🇬🇧",
    region: "uk",
    visaTypeLabel: "Ulusal (Standart Ziyaretçi)",
    processingTime: "Yaklaşık 3 hafta",
    visaRequirements:
      "Türk vatandaşları Birleşik Krallık'a seyahat için vize almalıdır. Standart ziyaretçi vizesi 6 aya kadar kalış için geçerlidir.",
    visaTypes: [
      { slug: "tourist-visa", name: "Turist vizesi" },
      { slug: "business-visa", name: "İş vizesi" },
      { slug: "student-visa", name: "Öğrenci vizesi" },
      { slug: "family-reunion", name: "Aile ziyareti" },
    ],
    processSteps: defaultProcessSteps,
    requiredDocuments: [
      "Geçerli pasaport",
      "Online vize başvuru formu",
      "Vize ücreti ödeme belgesi",
      "2 adet renkli fotoğraf",
      "Mali durum belgeleri (son 6 ay banka ekstreleri)",
      "Konaklama rezervasyonu",
      "Uçak bileti rezervasyonu",
      "İş veya öğrenci belgesi",
      "Seyahat sigortası",
    ],
    activeConsulates: [
      { city: "İstanbul", address: "Meşrutiyet Caddesi No: 34, 34430 Beyoğlu, İstanbul", phone: "+90 212 334 6400", email: "istanbul@fco.gov.uk" },
      { city: "Ankara", address: "Şehit Ersan Caddesi No: 46/A, 06680 Çankaya, Ankara", phone: "+90 312 455 3344", email: "ankara@fco.gov.uk" },
    ],
    fees: "Standart ziyaretçi vizesi ücreti yaklaşık 100 GBP civarındadır (tür ve süreye göre değişir).",
    appointmentInfo: "Gov.uk üzerinden başvuru yapılır; biyometri ve belge teslimi için VAC randevusu alınır.",
    rejectionReasons: [
      "Mali durumun yeterince kanıtlanamaması",
      "Seyahat amacının net açıklanmaması",
      "Konaklama veya dönüş planlarının belirsiz olması",
    ],
    faq: [
      { question: "BK vizesi ne kadar sürer?", answer: "Başvuru tesliminden itibaren genelde 3 hafta içinde sonuç verilir." },
    ],
  },
  {
    slug: "germany",
    name: "Almanya",
    flag: "🇩🇪",
    region: "schengen",
    visaTypeLabel: "Schengen",
    processingTime: "10–15 iş günü",
    visaRequirements:
      "Türk vatandaşları Almanya'ya seyahat için Schengen vizesi almalıdır. Kısa süreli (90 gün) vize ile diğer Schengen ülkelerine de seyahat edilebilir.",
    visaTypes: [
      { slug: "tourist-visa", name: "Turist vizesi" },
      { slug: "business-visa", name: "İş vizesi" },
      { slug: "student-visa", name: "Öğrenci vizesi" },
    ],
    processSteps: defaultProcessSteps,
    requiredDocuments: [
      "Geçerli pasaport (en az 3 ay geçerlilik)",
      "Schengen vize başvuru formu",
      "2 adet biyometrik fotoğraf",
      "Seyahat sigortası (min. 30.000 EUR)",
      "Uçak bileti rezervasyonu",
      "Konaklama rezervasyonu",
      "Mali durum belgeleri",
      "İş veya öğrenci belgesi",
      "Seyahat amacı belgesi",
    ],
    activeConsulates: [
      { city: "İstanbul", address: "İnönü Caddesi No: 16-18, 34437 Gümüşsuyu, İstanbul", phone: "+90 212 334 6100", email: "info@istanbul.diplo.de" },
      { city: "Ankara", address: "Atatürk Bulvarı No: 114, 06680 Kavaklıdere, Ankara", phone: "+90 312 455 5100", email: "info@ankara.diplo.de" },
    ],
    fees: "Schengen vize ücreti 80 EUR (6–12 yaş 40 EUR, 6 yaş altı ücretsiz).",
    appointmentInfo: "Almanya konsoloslukları veya yetkili VFS/TLS randevu sistemleri üzerinden randevu alınır.",
    rejectionReasons: [
      "Seyahat sigortası eksik veya yetersiz",
      "Konaklama veya rota tutarsızlığı",
      "Mali durumun yeterince gösterilmemesi",
    ],
    faq: [
      { question: "Almanya Schengen ile başka ülkelere gidebilir miyim?", answer: "Evet. Geçerli Schengen vizesi ile Schengen bölgesindeki diğer ülkelere seyahat edebilirsiniz." },
    ],
  },
  {
    slug: "france",
    name: "Fransa",
    flag: "🇫🇷",
    region: "schengen",
    visaTypeLabel: "Schengen",
    processingTime: "5–15 iş günü",
    visaRequirements:
      "Türk vatandaşları Fransa'ya seyahat için Schengen vizesi almalıdır. Turist, iş ve öğrenci vizesi türleri mevcuttur.",
    visaTypes: [
      { slug: "tourist-visa", name: "Turist vizesi" },
      { slug: "business-visa", name: "İş vizesi" },
      { slug: "student-visa", name: "Öğrenci vizesi" },
    ],
    processSteps: defaultProcessSteps,
    requiredDocuments: [
      "Geçerli pasaport",
      "Schengen vize başvuru formu",
      "2 adet biyometrik fotoğraf",
      "Seyahat sigortası (min. 30.000 EUR)",
      "Uçak bileti rezervasyonu",
      "Konaklama rezervasyonu veya davet mektubu",
      "Mali durum belgeleri (son 3 ay)",
      "İş veya öğrenci belgesi",
      "Seyahat programı",
    ],
    activeConsulates: [
      { city: "İstanbul", address: "İstiklal Caddesi No: 4, 34430 Beyoğlu, İstanbul", phone: "+90 212 334 8700", email: "istanbul@diplomatie.gouv.fr" },
      { city: "Ankara", address: "Paris Caddesi No: 70, 06420 Çankaya, Ankara", phone: "+90 312 455 4545", email: "ankara@diplomatie.gouv.fr" },
    ],
    fees: "Schengen vize ücreti 80 EUR.",
    appointmentInfo: "Fransa Konsolosluğu veya yetkili randevu merkezi (TLS Contact vb.) üzerinden randevu alınır.",
    rejectionReasons: [
      "Sigorta veya konaklama eksikliği",
      "Mali durum belgelerinin yetersiz görülmesi",
      "Seyahat amacının tutarsız açıklanması",
    ],
    faq: [],
  },
  {
    slug: "italy",
    name: "İtalya",
    flag: "🇮🇹",
    region: "schengen",
    visaTypeLabel: "Schengen",
    processingTime: "5–10 iş günü",
    visaRequirements:
      "Türk vatandaşları İtalya'ya seyahat için Schengen vizesi almalıdır. Bu vize ile diğer Schengen ülkelerine de seyahat edilebilir.",
    visaTypes: [
      { slug: "tourist-visa", name: "Turist vizesi" },
      { slug: "business-visa", name: "İş vizesi" },
      { slug: "student-visa", name: "Öğrenci vizesi" },
    ],
    processSteps: defaultProcessSteps,
    requiredDocuments: [
      "Geçerli pasaport",
      "Schengen vize başvuru formu",
      "2 adet biyometrik fotoğraf",
      "Seyahat sigortası (min. 30.000 EUR)",
      "Uçak bileti rezervasyonu",
      "Konaklama rezervasyonu",
      "Mali durum belgeleri",
      "İş veya öğrenci belgesi",
      "Seyahat amacı belgesi",
    ],
    activeConsulates: [
      { city: "İstanbul", address: "Tomtom Kaptan Sokak No: 11, 34433 Beyoğlu, İstanbul", phone: "+90 212 243 1024", email: "consolato.istanbul@esteri.it" },
      { city: "Ankara", address: "Atatürk Bulvarı No: 118, 06680 Kavaklıdere, Ankara", phone: "+90 312 426 5460", email: "ambasciata.ankara@esteri.it" },
    ],
    fees: "Schengen vize ücreti 80 EUR.",
    appointmentInfo: "İtalya konsolosluğu veya yetkili randevu merkezi üzerinden randevu alınır.",
    rejectionReasons: [
      "Eksik belgeler",
      "Seyahat sigortası veya konaklama yetersizliği",
      "Mali durumun net gösterilmemesi",
    ],
    faq: [],
  },
  {
    slug: "netherlands",
    name: "Hollanda",
    flag: "🇳🇱",
    region: "schengen",
    visaTypeLabel: "Schengen",
    processingTime: "5–15 iş günü",
    visaRequirements:
      "Türk vatandaşları Hollanda'ya seyahat için Schengen vizesi almalıdır. Ana hedef ülke Hollanda ise bu ülkeye başvuru yapılır.",
    visaTypes: [
      { slug: "tourist-visa", name: "Turist vizesi" },
      { slug: "business-visa", name: "İş vizesi" },
      { slug: "student-visa", name: "Öğrenci vizesi" },
    ],
    processSteps: defaultProcessSteps,
    requiredDocuments: [
      "Geçerli pasaport",
      "Schengen vize başvuru formu",
      "2 adet biyometrik fotoğraf",
      "Seyahat sigortası (min. 30.000 EUR)",
      "Uçak bileti rezervasyonu",
      "Konaklama rezervasyonu",
      "Mali durum belgeleri",
      "İş veya öğrenci belgesi",
    ],
    activeConsulates: [
      { city: "İstanbul", address: "İstiklal Caddesi No: 197, 34433 Beyoğlu, İstanbul", phone: "+90 212 251 0020", email: "ist@minbuza.nl" },
      { city: "Ankara", address: "Uğur Mumcu Caddesi No: 93, 06680 Çankaya, Ankara", phone: "+90 312 409 1800", email: "ank@minbuza.nl" },
    ],
    fees: "Schengen vize ücreti 80 EUR.",
    appointmentInfo: "Hollanda konsolosluğu veya VFS Global üzerinden randevu alınır.",
    rejectionReasons: [
      "Ana hedef ülke belirsizliği (Schengen kuralları)",
      "Eksik veya yetersiz belgeler",
      "Mali durum kanıtının yetersiz görülmesi",
    ],
    faq: [],
  },
  {
    slug: "spain",
    name: "İspanya",
    flag: "🇪🇸",
    region: "schengen",
    visaTypeLabel: "Schengen",
    processingTime: "5–15 iş günü",
    visaRequirements:
      "Türk vatandaşları İspanya'ya seyahat için Schengen vizesi almalıdır. Turist vizesi için başvuru süreci genelde 5–15 iş günü sürer.",
    visaTypes: [
      { slug: "tourist-visa", name: "Turist vizesi" },
      { slug: "business-visa", name: "İş vizesi" },
      { slug: "student-visa", name: "Öğrenci vizesi" },
    ],
    processSteps: defaultProcessSteps,
    requiredDocuments: [
      "Geçerli pasaport",
      "Schengen vize başvuru formu",
      "2 adet biyometrik fotoğraf",
      "Seyahat sigortası (min. 30.000 EUR)",
      "Uçak bileti rezervasyonu",
      "Konaklama rezervasyonu",
      "Mali durum belgeleri",
      "İş veya öğrenci belgesi",
      "Seyahat programı",
    ],
    activeConsulates: [
      { city: "İstanbul", address: "Sıraselviler Caddesi No: 57, 34420 Beyoğlu, İstanbul", phone: "+90 212 292 6400", email: "cog.estambul@maec.es" },
      { city: "Ankara", address: "Abdullah Cevdet Sokak No: 8, 06680 Çankaya, Ankara", phone: "+90 312 440 1796", email: "emb.ankara@maec.es" },
    ],
    fees: "Schengen vize ücreti 80 EUR.",
    appointmentInfo: "İspanya konsolosluğu veya BLS vb. randevu merkezi üzerinden randevu alınır.",
    rejectionReasons: [
      "Eksik belgeler",
      "Konaklama veya rota tutarsızlığı",
      "Mali durumun yeterince gösterilmemesi",
    ],
    faq: [],
  },
  {
    slug: "greece",
    name: "Yunanistan",
    flag: "🇬🇷",
    region: "schengen",
    visaTypeLabel: "Schengen",
    processingTime: "5–10 iş günü",
    visaRequirements:
      "Türk vatandaşları Yunanistan'a seyahat için Schengen vizesi almalıdır. Bu vize ile diğer Schengen ülkelerine de seyahat edilebilir.",
    visaTypes: [
      { slug: "tourist-visa", name: "Turist vizesi" },
      { slug: "business-visa", name: "İş vizesi" },
    ],
    processSteps: defaultProcessSteps,
    requiredDocuments: [
      "Geçerli pasaport",
      "Schengen vize başvuru formu",
      "2 adet biyometrik fotoğraf",
      "Seyahat sigortası (min. 30.000 EUR)",
      "Uçak bileti rezervasyonu",
      "Konaklama rezervasyonu",
      "Mali durum belgeleri",
      "İş veya öğrenci belgesi",
      "Seyahat amacı belgesi",
    ],
    activeConsulates: [
      { city: "İstanbul", address: "Turnacıbaşı Sokak No: 32, 34420 Beyoğlu, İstanbul", phone: "+90 212 245 0596", email: "grcgencon.ist@mfa.gr" },
      { city: "Ankara", address: "Kazım Özalp Sokak No: 44, 06650 Çankaya, Ankara", phone: "+90 312 448 0647", email: "gremb.ank@mfa.gr" },
    ],
    fees: "Schengen vize ücreti 80 EUR.",
    appointmentInfo: "Yunanistan konsolosluğu veya yetkili randevu merkezi üzerinden randevu alınır.",
    rejectionReasons: ["Eksik belgeler", "Mali durumun yetersiz görülmesi"],
    faq: [],
  },
  {
    slug: "canada",
    name: "Kanada",
    flag: "🇨🇦",
    region: "canada",
    visaTypeLabel: "Ulusal",
    processingTime: "2–4 hafta",
    visaRequirements:
      "Türk vatandaşları Kanada'ya seyahat için vize almalıdır. Turist vizesi için online başvuru yapılır. İş, öğrenci ve aile ziyareti vize türleri mevcuttur.",
    visaTypes: [
      { slug: "tourist-visa", name: "Turist vizesi" },
      { slug: "business-visa", name: "İş vizesi" },
      { slug: "student-visa", name: "Öğrenci vizesi" },
      { slug: "family-reunion", name: "Aile ziyareti" },
    ],
    processSteps: [
      { step: 1, title: "Online başvuru (IRCC portal) hazırlayın" },
      { step: 2, title: "Biyometri randevusu alın ve verin" },
      { step: 3, title: "Belgeleri yükleyin ve ücreti ödeyin" },
      { step: 4, title: "Kararı bekleyin" },
    ],
    requiredDocuments: [
      "Geçerli pasaport",
      "Online vize başvuru formu",
      "Vize ücreti ödeme belgesi",
      "2 adet biyometrik fotoğraf",
      "Seyahat sigortası",
      "Uçak bileti rezervasyonu",
      "Konaklama rezervasyonu",
      "Mali durum belgeleri (son 4 ay)",
      "İş veya öğrenci belgesi",
      "Seyahat amacı belgesi",
    ],
    activeConsulates: [
      { city: "İstanbul", address: "Büyükdere Caddesi No: 209, 34394 Levent, İstanbul", phone: "+90 212 385 9700", email: "istanbul@international.gc.ca" },
      { city: "Ankara", address: "Cinnah Caddesi No: 58, 06690 Çankaya, Ankara", phone: "+90 312 409 2700", email: "ankara@international.gc.ca" },
    ],
    fees: "Turist vizesi ücreti yaklaşık 100 CAD civarındadır. Biyometri ücreti ayrıca alınır.",
    appointmentInfo: "IRCC portalı üzerinden başvuru yapılır; biyometri için VAC randevusu alınır.",
    rejectionReasons: [
      "Yetersiz bağlar",
      "Mali durumun yeterince kanıtlanamaması",
      "Seyahat amacının net açıklanmaması",
    ],
    faq: [],
  },
  {
    slug: "japan",
    name: "Japonya",
    flag: "🇯🇵",
    region: "japan",
    visaTypeLabel: "Ulusal",
    processingTime: "5–7 iş günü",
    visaRequirements:
      "Türk vatandaşları Japonya'ya seyahat için vize almalıdır. Turist vizesi için başvuru genelde 5–7 iş günü sürer. Konsolosluğa şahsen başvuru yapılır.",
    visaTypes: [
      { slug: "tourist-visa", name: "Turist vizesi" },
      { slug: "business-visa", name: "İş vizesi" },
      { slug: "student-visa", name: "Öğrenci vizesi" },
    ],
    processSteps: [
      { step: 1, title: "Gerekli belgeleri hazırlayın" },
      { step: 2, title: "Vize başvuru formunu doldurun" },
      { step: 3, title: "Konsolosluğa şahsen başvurun" },
      { step: 4, title: "Vize ücretini yatırın ve sonucu bekleyin" },
    ],
    requiredDocuments: [
      "Geçerli pasaport",
      "Vize başvuru formu",
      "2 adet biyometrik fotoğraf (4.5x4.5 cm)",
      "Uçak bileti rezervasyonu",
      "Konaklama rezervasyonu",
      "Mali durum belgeleri",
      "İş veya öğrenci belgesi",
      "Seyahat programı",
      "Vize ücreti",
    ],
    activeConsulates: [
      { city: "İstanbul", address: "Büyükdere Caddesi No: 209, 34394 Levent, İstanbul", phone: "+90 212 317 1200", email: "info@cg.mofa.go.jp" },
      { city: "Ankara", address: "Kazım Özalp Sokak No: 46, 06650 Çankaya, Ankara", phone: "+90 312 446 0500", email: "embjapan@ank.mofa.go.jp" },
    ],
    fees: "Turist vizesi ücreti genelde tek giriş için belirli bir miktar (konsolosluk güncel ücreti açıklar).",
    appointmentInfo: "Japonya konsolosluklarına şahsen başvuru yapılır; bazı dönemlerde randevu gerekebilir.",
    rejectionReasons: [
      "Eksik belgeler",
      "Seyahat programının tutarsız olması",
      "Mali durumun yeterince gösterilmemesi",
    ],
    faq: [
      { question: "Japonya vizesi için randevu gerekir mi?", answer: "Konsolosluklar genelde şahsen başvuru kabul eder; yoğunluk döneminde randevu istenebilir. Güncel uygulama için konsolosluğu kontrol edin." },
    ],
  },
  {
    slug: "australia",
    name: "Avustralya",
    flag: "🇦🇺",
    region: "others",
    visaTypeLabel: "Ulusal",
    processingTime: "2–4 hafta",
    visaRequirements:
      "Türk vatandaşları Avustralya'ya seyahat için vize almalıdır. Visitor Visa için online başvuru yapılır. İş, öğrenci ve çalışma tatili vize türleri de mevcuttur.",
    visaTypes: [
      { slug: "tourist-visa", name: "Turist vizesi" },
      { slug: "business-visa", name: "İş vizesi" },
      { slug: "student-visa", name: "Öğrenci vizesi" },
    ],
    processSteps: defaultProcessSteps,
    requiredDocuments: [
      "Geçerli pasaport",
      "Online vize başvuru formu",
      "Vize ücreti ödeme belgesi",
      "2 adet biyometrik fotoğraf",
      "Seyahat sigortası",
      "Uçak bileti rezervasyonu",
      "Konaklama rezervasyonu",
      "Mali durum belgeleri",
      "İş veya öğrenci belgesi",
      "Seyahat amacı belgesi",
    ],
    activeConsulates: [
      { city: "Ankara", address: "Ugur Mumcu Caddesi No: 88, 06700 Gaziosmanpaşa, Ankara", phone: "+90 312 459 9500", email: "ankara.embassy@dfat.gov.au" },
    ],
    fees: "Visitor Visa ücreti AUD cinsinden ImmiAccount üzerinden ödenir; tür ve süreye göre değişir.",
    appointmentInfo: "Online ImmiAccount üzerinden başvuru yapılır; biyometri gerekirse VAC’a yönlendirilirsiniz.",
    rejectionReasons: [
      "Sağlık veya karakter gereksinimlerinin karşılanmaması",
      "Yetersiz mali durum veya bağlar",
    ],
    faq: [],
  },
];

export const regionLabels: Record<RegionSlug, string> = {
  schengen: "Schengen Bölgesi",
  uk: "Birleşik Krallık",
  usa: "Amerika Birleşik Devletleri",
  canada: "Kanada",
  japan: "Japonya",
  others: "Diğer Ülkeler",
};

export const schengenCountries = countries.filter((c) => c.region === "schengen");

export function getCountryBySlug(slug: string): Country | undefined {
  return countries.find((c) => c.slug === slug);
}

export function getCountriesByRegion(region: RegionSlug): Country[] {
  return countries.filter((c) => c.region === region);
}
