import React from 'react';
import Image from 'next/image';

interface Props {
  header: string;
  description: string;
  iconSrc: string;
}

export const ServiceCard = (props: Props) => {
  return (
    <div className="max-w-card">
      <div className="flex flex-col gap-5">
        <Image
          priority
          src={props.iconSrc}
          width="40"
          height="40"
          alt="vacuum"
          color="white"
          quality={100}
          style={{
            filter: 'invert(1)',
          }}
        />
        <div className="flex flex-col gap-4">
          <p className="text-lg md:text-xl font-semibold tracking-widest">
            {props.header}
          </p>
          <p className=" text-sm md:text:basic font-light tracking-wider">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
};
