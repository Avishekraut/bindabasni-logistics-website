import HeroSection from "./hero-section";
import AboutSection from "./about-section";
import ServicesSection from "./services-section";
import TerminalSection from "./terminal-section";
import { StatsSection } from "./stats-section";
import CtaSection from "../../components/shared/cta-section";
import ContactForm from "./contact-form";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TerminalSection />
      <StatsSection />
      {/* <Testimonials /> */}
      <div className="px-4 md:px-38 bg-gray-50">
        <CtaSection />
      </div>
      <ContactForm />
    </>
  );
}
