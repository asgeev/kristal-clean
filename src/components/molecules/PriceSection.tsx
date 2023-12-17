import React from 'react';
import { SectionHeader } from '../atoms/SectionHeader';
import { PriceTable } from '../atoms/PriceTable';
import { Section } from '../atoms/Section';

const prices = [
  {
    title: 'Pranie tapicerki',
    items: [
      {
        name: 'krzesło',
        price: 'od 25 zł',
      },
      {
        name: 'fotel',
        price: 'od 50 zł',
      },
      {
        name: 'mała kanapa/wersalka',
        price: 'od 120 zł',
      },
      {
        name: 'duża kanapa',
        price: 'od 150 zł',
      },
      {
        name: 'materac (jedna strona)',
        price: 'od 140 zł',
      },
      {
        name: 'narożnik',
        price: 'od 200 zł',
      },
      {
        name: 'dywan',
        price: 'od 50 zł',
      },
    ],
  },
  {
    title: 'Mycie okien',
    items: [
      {
        name: 'okno pojedyncze',
        price: '15 zł',
      },
      {
        name: 'okno podwójne',
        price: '30 zł',
      },
      {
        name: 'duże okno tarasowe',
        price: '40 zł',
      },
      {
        name: 'powłoka hybrydowa',
        price: 'od 15 zł',
      },
    ],
  },
  {
    title: 'Pranie tapicerki samochodowej',
    items: [
      {
        name: 'fotel 1 szt.',
        price: 'od 50 zł',
      },
      {
        name: 'fotele',
        price: 'od 200 zł',
      },
      {
        name: 'cały samochód',
        price: 'od 400 zł',
      },
    ],
  },
  {
    title: 'Dodatkowe usługi',
    items: [
      {
        name: 'impregnacja tapicerki samochodowej',
        price: 'od 30 zł',
      },
    ],
  },
];

export const PriceSection = () => {
  return (
    <Section id="cennik">
      <SectionHeader title="Cennik" />
      <p className="text-lg font-medium tracking-wider">
        Dojazd do 15 km - GRATIS!
      </p>
      <div className="flex flex-col gap-y-16 lg:flex-wrap lg:flex-row lg:gap-x-32 xl:gap-x-48">
        {prices.map((element, index: number) => {
          return (
            <PriceTable
              key={index}
              title={element.title}
              items={element.items}
            />
          );
        })}
      </div>
    </Section>
  );
};
