import Hero from "@/components/sections/hero/Hero";
import Articles from "@/components/sections/articles/Articles";
import Gallery from "@/components/sections/gallery/Gallery";
import Features from "@/components/sections/features/Features";
import Testimonials from "@/components/sections/testimonials/Testimonials";
import Team from "@/components/sections/team/Team";

export default function Home() {
  return (
    <>
      <Hero />
      <Articles />
      <Gallery />
      <Features />
      <Testimonials />
      <Team />
    </>
  );
}
