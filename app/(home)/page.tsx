import HeroSection from "./hero-section";
import AboutSection from "./about-section";
import ServicesSection from "./services-section";
import TerminalSection from "./terminal-section";
import { StatsSection } from "./stats-section";
import Testimonials from "./testimonial-section";
import CtaSection from "./cta-section";
import ContactForm from "./contact-form";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TerminalSection />
      <StatsSection />
      <Testimonials />
      <CtaSection />
      <ContactForm />
    </>
  );
}
