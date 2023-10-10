import { ServiceCard } from '../atoms/ServiceCard';

interface ServicesKeys {
  header: string;
  description: string;
  iconSrc: string;
}

const services: ServicesKeys[] = [
  {
    header: 'Odkurzanie',
    description: 'Lorem ipsum, lorem ipsum, lorem ipsum',
    iconSrc: '/assets/vacuum.svg',
  },
  {
    header: 'Zamiatanie',
    description: 'Lorem ipsum, lorem ipsum, lorem ipsum',
    iconSrc: '/assets/broom.svg',
  },
  {
    header: 'Polerowanie',
    description: 'Lorem ipsum, lorem ipsum, lorem ipsum',
    iconSrc: '/assets/rag.svg',
  },
  {
    header: 'Mycie',
    description: 'Lorem ipsum, lorem ipsum, lorem ipsum',
    iconSrc: '/assets/detergent.svg',
  },
];

const ServicesSection = () => {
  return (
    <div className="flex flex-col gap-14 py-12">
      <h1 id="uslugi" className="text-xl font-semibold tracking-wider">
        Usługi
      </h1>
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
    </div>
  );
};

export default ServicesSection;
