import HeroSection from "./hero-section";
import AboutSection from "./about-section";
import ServicesSection from "./services-section";
import TerminalSection from "./terminal-section";
import { StatsSection } from "./stats-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TerminalSection />
      <StatsSection />
    </>
  );
}
