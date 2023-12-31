import { ContactSection } from '../molecules/ContactSection';
import { HeroSection } from '../molecules/HeroSection';
import { ServicesSection } from '../molecules/ServicesSection';
import { PriceSection } from '../molecules/PriceSection';

export const Main = () => {
  return (
    <main>
      <HeroSection />
      <ContactSection />
      <ServicesSection />
      <PriceSection />
    </main>
  );
};
