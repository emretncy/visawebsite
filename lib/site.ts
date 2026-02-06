export const site = {
  name: "Vize Rehberi",
  tagline: "Türkiye'den seyahat edenler için net vize bilgisi",
  description:
    "Ülke, vize türü ve başvuru profiline göre adım adım vize rehberi. Başvurmadan önce süreci anlayın.",
  links: {
    countries: "/countries",
    country: (slug: string) => `/country/${slug}`,
    visaTypes: "/visa-types",
    visaType: (slug: string) => `/visa-types/${slug}`,
    guides: "/guides",
    guide: (slug: string) => `/guides/${slug}`,
    tools: "/tools",
    tool: (slug: string) => `/tools/${slug}`,
    blog: "/blog",
    about: "/about",
    contact: "/contact",
    privacy: "/legal/privacy-policy",
    terms: "/legal/terms-of-use",
    disclaimer: "/disclaimer",
  },
  nav: [
    { label: "Ana Sayfa", href: "/" },
    { label: "Ülkeler", href: "/countries" },
    { label: "Vize Türleri", href: "/visa-types" },
    { label: "Rehberler", href: "/guides" },
    { label: "Araçlar", href: "/tools" },
    { label: "Blog", href: "/blog" },
    { label: "Hakkımızda", href: "/about" },
    { label: "İletişim", href: "/contact" },
  ],
  footer: {
    columns: [
      {
        title: "Ülkeler",
        links: [
          { label: "Tüm Ülkeler", href: "/countries" },
          { label: "Schengen", href: "/countries/schengen" },
          { label: "Birleşik Krallık", href: "/country/uk" },
          { label: "ABD", href: "/country/usa" },
          { label: "Japonya", href: "/country/japan" },
        ],
      },
      {
        title: "Vize Türleri",
        links: [
          { label: "Turist Vizesi", href: "/visa-types/tourist-visa" },
          { label: "İş Vizesi", href: "/visa-types/business-visa" },
          { label: "Öğrenci Vizesi", href: "/visa-types/student-visa" },
          { label: "Aile Birleşimi", href: "/visa-types/family-reunion" },
        ],
      },
      {
        title: "Kaynaklar",
        links: [
          { label: "Rehberler", href: "/guides" },
          { label: "Araçlar", href: "/tools" },
          { label: "Blog", href: "/blog" },
        ],
      },
      {
        title: "Kurumsal",
        links: [
          { label: "Hakkımızda", href: "/about" },
          { label: "İletişim", href: "/contact" },
          { label: "Gizlilik", href: "/legal/privacy-policy" },
          { label: "Kullanım Koşulları", href: "/legal/terms-of-use" },
          { label: "Sorumluluk Reddi", href: "/disclaimer" },
        ],
      },
    ],
  },
  visaPurposes: [
    { value: "tourist", label: "Turizm" },
    { value: "business", label: "İş" },
    { value: "student", label: "Öğrenci" },
    { value: "family", label: "Aile ziyareti" },
  ],
  howItWorks: [
    {
      step: 1,
      title: "Hedefinizi seçin",
      description: "Gideceğiniz ülkeyi ve vize türünü belirleyin.",
    },
    {
      step: 2,
      title: "Gerekli belgeleri kontrol edin",
      description: "Başvurunuz için gereken belgeleri listeleyin.",
    },
    {
      step: 3,
      title: "Başvuru adımlarını öğrenin",
      description: "Form, randevu ve teslim sürecini takip edin.",
    },
    {
      step: 4,
      title: "Güvenle başvurun",
      description: "Eksiksiz hazırlanıp başvurunuzu yapın.",
    },
  ],
  homeFaq: [
    {
      question: "Türk vatandaşları vizeye ihtiyaç duyar mı?",
      answer:
        "Çoğu ülkeye (Schengen, ABD, Birleşik Krallık, Kanada, Japonya vb.) seyahat için Türk vatandaşlarının vize alması gerekir. Vizesiz veya kapıda vize ile girilebilen ülkeler de vardır; hedef ülkenize göre kontrol edin.",
    },
    {
      question: "Vize işlemi ne kadar sürer?",
      answer:
        "Ülkeye ve vize türüne göre değişir. Schengen genelde 5–15 iş günü, ABD ve Birleşik Krallık 2–4 hafta, Japonya 5–7 iş günü civarında olabilir. Yoğunluk dönemlerinde süre uzayabilir.",
    },
    {
      question: "Vizeler neden reddedilir?",
      answer:
        "Yetersiz belgeler, mali durumun yeterince kanıtlanamaması, seyahat amacının net açıklanmaması veya randevuya gelinmemesi sık red nedenleridir. Rehberlerimizde bu konuları detaylı anlatıyoruz.",
    },
  ],
  popularDestinationSlugs: ["schengen", "uk", "usa", "japan"] as const,
};

export type PopularSlug = (typeof site.popularDestinationSlugs)[number];
