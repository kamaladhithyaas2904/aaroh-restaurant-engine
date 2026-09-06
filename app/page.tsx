import { Navbar } from "@/components/navigation/Navbar";
import { Hero } from "@/components/hero/Hero";
import { MobileStickyCTA } from "@/components/ui/MobileStickyCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <MobileStickyCTA />
    </>
  );
}
