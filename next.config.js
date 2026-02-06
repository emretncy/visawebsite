/** @type {import('next').NextConfig} */
const legacyCountrySlugs = [
  ["/ulkeler/abd", "/country/usa"],
  ["/ulkeler/birlesik-krallik", "/country/uk"],
  ["/ulkeler/almanya", "/country/germany"],
  ["/ulkeler/fransa", "/country/france"],
  ["/ulkeler/italya", "/country/italy"],
  ["/ulkeler/ispanya", "/country/spain"],
  ["/ulkeler/kanada", "/country/canada"],
  ["/ulkeler/avustralya", "/country/australia"],
  ["/ulkeler/japonya", "/country/japan"],
  ["/ulkeler/yunanistan", "/country/greece"],
];

const nextConfig = {
  async redirects() {
    return [
      { source: "/ulkeler", destination: "/countries", permanent: true },
      ...legacyCountrySlugs.map(([source, destination]) => ({
        source,
        destination,
        permanent: true,
      })),
      { source: "/ulkeler/:slug", destination: "/countries", permanent: true },
      { source: "/bize-ulasin", destination: "/contact", permanent: true },
      { source: "/referanslarimiz", destination: "/about", permanent: true },
      { source: "/mutlu-musteriler", destination: "/about", permanent: true },
    ];
  },
};

module.exports = nextConfig;
