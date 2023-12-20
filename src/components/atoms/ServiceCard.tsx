import React from 'react';
import Image from 'next/image';

interface Props {
  header: string;
  description: string;
  iconSrc: string;
}

export const ServiceCard = (props: Props) => {
  return (
    <div className="w-full sm:w-4/5 md:max-w-card">
      <div className="flex flex-col gap-5">
        <Image
          priority
          src={props.iconSrc}
          width="40"
          height="40"
          alt="vacuum"
          quality={100}
        />
        <div className="flex flex-col gap-4">
          <p className="text-lg md:text-xl font-semibold tracking-widest">
            {props.header}
          </p>
          <p className=" text-sm md:text:basic font-light tracking-widest">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
};
