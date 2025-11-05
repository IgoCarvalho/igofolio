import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects";

export default function Home() {
  return (
    <>
      <Header />

      <HeroSection />

      {/* <TechnologiesSection /> */}

      <ProjectsSection />

      <Footer />
    </>
  );
}
