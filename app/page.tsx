import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import QuickSelector from "@/components/home/QuickSelector";
import PopularDestinations from "@/components/home/PopularDestinations";
import HowItWorks from "@/components/home/HowItWorks";
import HomeFAQ from "@/components/home/HomeFAQ";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ana Sayfa",
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <QuickSelector />
      <PopularDestinations />
      <HowItWorks />
      <HomeFAQ />
    </div>
  );
}
