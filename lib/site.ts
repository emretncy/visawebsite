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
    {
      question: "Schengen vizesi ile hangi ülkelere gidilebilir?",
      answer:
        "Tek bir Schengen vizesi ile Avrupa'da 27 ülkeye (Almanya, Fransa, İtalya, İspanya, Hollanda, Yunanistan, Avusturya, Belçika, İsviçre, Portekiz, Polonya, Çekya, İsveç, Norveç, Danimarka, Finlandiya, Macaristan vb.) seyahat edebilirsiniz. Vizeyi, seyahatinizde ana hedef veya ilk giriş yapacağınız ülkeye başvurarak alırsınız.",
    },
    {
      question: "Vize randevusu nasıl alınır?",
      answer:
        "Randevu, hedef ülkenin konsolosluğu veya yetkili vize başvuru merkezi (VAC) üzerinden alınır. Çoğu ülke online randevu sistemine geçmiştir; ilgili ülke sayfamızdaki randevu bilgisinden linke ulaşabilirsiniz. Randevuyu seyahat tarihinizden en az 4–6 hafta önce planlamanız önerilir.",
    },
    {
      question: "Seyahat sigortası neden gerekli?",
      answer:
        "Schengen ülkelerine başvuruda seyahat sigortası zorunludur; minimum 30.000 EUR kapsamı ve tüm Schengen bölgesi geçerli olmalıdır. Diğer ülkelerde de çoğu başvuruda sigorta istenir. Sağlık masraflarını karşılamak ve konsolosluğun şartını yerine getirmek için gereklidir.",
    },
    {
      question: "Pasaportumun geçerlilik süresi ne kadar olmalı?",
      answer:
        "Çoğu ülke en az 3 ay, bazıları (ör. ABD) en az 6 ay geçerlilik ister. Başvuru yaparken pasaportunuzun seyahat bitiş tarihinden sonra da geçerli olması gerekir. Hedef ülkenin sayfasından güncel şartı kontrol edin.",
    },
    {
      question: "Vize ücretleri ne kadar?",
      answer:
        "Ülkeye ve vize türüne göre değişir. Schengen vizesi genelde 80 EUR, 6–12 yaş 40 EUR, 6 yaş altı ücretsizdir. ABD, Birleşik Krallık, Kanada gibi ülkelerin ücretleri kendi para birimlerinde ve türe göre farklıdır. Her ülke sayfamızda ücret bilgisi yer alır.",
    },
    {
      question: "Başvuruyu ne kadar önceden yapmalıyım?",
      answer:
        "Seyahat tarihinizden en az 4–6 hafta önce başvuru yapmanız önerilir. Yoğun dönemlerde randevu bulmak ve işlem süresi uzayabilir. Bazı ülkeler en erken 3–6 ay önceden başvuru kabul eder; en geç başvuru tarihi de ülkeye göre değişir.",
    },
    {
      question: "Red alırsam tekrar başvurabilir miyim?",
      answer:
        "Evet. Red gerekçesini inceleyip eksik veya hatalı belgeleri tamamlayarak yeni bir başvuru yapabilirsiniz. Aynı konsolosluğa hemen tekrar başvurmak yerine bir süre bekleyip daha güçlü bir dosya ile başvurmak genelde daha iyi sonuç verir. Rehberlerimizde red nedenleri ve tekrar başvuru ipuçları anlatılıyor.",
    },
    {
      question: "Biyometri nedir, neden isteniyor?",
      answer:
        "Biyometri, parmak izi ve fotoğraf alınmasıdır. Birçok ülke (Schengen, ABD, Birleşik Krallık vb.) vize başvurusunda biyometri toplar; güvenlik ve kimlik doğrulama amacıyladır. Randevuya şahsen gitmeniz gerekir; biyometri daha önce alındıysa bazı ülkelerde belirli süre tekrar istenmeyebilir.",
    },
    {
      question: "Turist ve iş vizesi arasındaki fark nedir?",
      answer:
        "Turist vizesi tatil, aile/arkadaş ziyareti veya kısa süreli geziler içindir; ülkede çalışma veya ücretli faaliyet yasaktır. İş vizesi toplantı, fuar, müşteri ziyareti gibi kısa süreli iş amaçlı seyahatler içindir; genelde davet mektubu ve iş veren belgesi istenir. Her iki vize türünün belgeleri ve süreleri farklıdır; hedef ülke sayfasından detaylara bakın.",
    },
  ],
  popularDestinationSlugs: ["schengen", "uk", "usa", "japan"] as const,
};

export type PopularSlug = (typeof site.popularDestinationSlugs)[number];
