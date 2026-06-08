import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { LoadingScreen } from "@/components/swagat/LoadingScreen";
import { Navbar } from "@/components/swagat/Navbar";
import { Hero } from "@/components/swagat/Hero";
import { Stats } from "@/components/swagat/Stats";
import { About } from "@/components/swagat/About";
import { Projects } from "@/components/swagat/Projects";
import { Signature } from "@/components/swagat/Signature";
import { WhySwagat } from "@/components/swagat/WhySwagat";
import { Amenities } from "@/components/swagat/Amenities";
import { Statement } from "@/components/swagat/Statement";
import { Contact } from "@/components/swagat/Contact";
import { FinalCTA } from "@/components/swagat/FinalCTA";
import { Footer } from "@/components/swagat/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Swagat Developers — Turning Addresses Into Landmarks | Surat" },
      {
        name: "description",
        content:
          "Swagat Developers — 18+ years of trust and 15+ landmark residential & commercial projects in Surat. Premium developments built on quality, planning and elegant architecture.",
      },
      { property: "og:title", content: "Swagat Developers — Turning Addresses Into Landmarks" },
      {
        property: "og:description",
        content:
          "Premium residential and commercial developments in Surat by Swagat Developers.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RealEstateAgent",
          name: "Swagat Developers",
          slogan: "Turning Addresses Into Landmarks",
          areaServed: "Surat, Gujarat, India",
          address: { "@type": "PostalAddress", addressLocality: "Surat", addressRegion: "Gujarat", addressCountry: "IN" },
          sameAs: ["https://www.instagram.com/swagatdevelopers/"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background text-foreground min-h-screen overflow-x-hidden">
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Projects />
        <Signature />
        <WhySwagat />
        <Amenities />
        <Statement />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
      <Toaster theme="dark" />
    </div>
  );
}
