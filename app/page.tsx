import { Navbar } from "@/components/navigation/Navbar";
import { Hero } from "@/components/hero/Hero";
import { Intro } from "@/components/sections/Intro";
import { OpeningHours } from "@/components/sections/OpeningHours";
import { SignatureDishes } from "@/components/sections/SignatureDishes";
import { MenuPreview } from "@/components/sections/MenuPreview";
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
      <MobileStickyCTA />
    </>
  );
}
