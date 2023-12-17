import { ServiceCard } from '../atoms/ServiceCard';
import { SectionHeader } from '../atoms/SectionHeader';
import { Section } from '../atoms/Section';
interface ServicesKeys {
  header: string;
  description: string;
  iconSrc: string;
}

const services: ServicesKeys[] = [
  {
    header: 'Pranie',
    description:
      'Pranie krzeseł, foteli, kanap. Pranie tapicerki samochodowej oraz impregnacja.',
    iconSrc: '/assets/vacuum.svg',
  },
  // {
  //   header: 'Zamiatanie',
  //   description: 'Lorem ipsum, lorem ipsum, lorem ipsum',
  //   iconSrc: '/assets/broom.svg',
  // },
  {
    header: 'Impregnacja',
    description:
      'Zabezpieczenie okien powłoką odpychającą brud. Impregnacja tapicerki materiałowej również samochodowej.',
    iconSrc: '/assets/rag.svg',
  },
  {
    header: 'Mycie',
    description:
      'Mycie okien, usuwanie osadów, żywicy, grzybów, farby. Mycie parapetów i ram okiennych.',
    iconSrc: '/assets/detergent.svg',
  },
];

export const ServicesSection = () => {
  return (
    <Section id="usługi">
      <SectionHeader title="Usługi" />
      <div className="flex flex-row flex-wrap gap-10">
        {services.map((service, index: number) => {
          return (
            <ServiceCard
              key={index}
              header={service.header}
              description={service.description}
              iconSrc={service.iconSrc}
            />
          );
        })}
      </div>
    </Section>
  );
};
