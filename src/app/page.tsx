import Hero from "@/components/sections/hero/Hero";
import Articles from "@/components/sections/articles/Articles";
import Gallery from "@/components/sections/gallery/Gallery";
import Features from "@/components/sections/features/Features";
import Testimonials from "@/components/sections/testimonials/Testimonials";
import Team from "@/components/sections/team/Team";
import Skills from "@/components/sections/skills/Skills";
import Services from "@/components/sections/services/Services";
import HowItWorks from "@/components/sections/how-it-works/HowItWorks";
import Events from "@/components/sections/events/Events";
import Pricing from "@/components/sections/pricing/Pricing";
import Videos from "@/components/sections/videos/Videos";
import Stats from "@/components/sections/stats/Stats";
import Discount from "@/components/sections/discount/Discount";

export default function Home() {
  return (
    <>
      <Hero />
      <Articles />
      <Gallery />
      <Features />
      <Testimonials />
      <Team />
      <Services />
      <Skills />
      <HowItWorks />
      <Events />
      <Pricing />
      <Videos />
      <Stats />
      <Discount />
    </>
  );
}
