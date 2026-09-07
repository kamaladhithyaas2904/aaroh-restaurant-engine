import { Navbar } from "@/components/navigation/Navbar";
import { Hero } from "@/components/hero/Hero";
import { Intro } from "@/components/sections/Intro";
import { OpeningHours } from "@/components/sections/OpeningHours";
import { SignatureDishes } from "@/components/sections/SignatureDishes";
import { MenuPreview } from "@/components/sections/MenuPreview";
import { Story } from "@/components/sections/Story";
import { Experience } from "@/components/sections/Experience";
import { SeasonalOffer } from "@/components/sections/SeasonalOffer";
import { Gallery } from "@/components/sections/Gallery";
import { MobileStickyCTA } from "@/components/ui/MobileStickyCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Intro />
      <OpeningHours />
      <SignatureDishes />
      <MenuPreview />
      <Story />
      <Experience />
      <SeasonalOffer />
      <Gallery />
      <MobileStickyCTA />
    </>
  );
}
