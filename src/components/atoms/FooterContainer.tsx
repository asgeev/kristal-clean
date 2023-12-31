import React from 'react';

interface Props {
  title: string;
  children?: React.ReactNode;
}

export const FooterContainer = (props: Props) => {
  return (
    <div className="w-max">
      <p className="font-medium tracking-widest">{props.title}</p>
      <div className="mt-6 text-sm md:text-base font-light">
        {props.children}
      </div>
    </div>
  );
};
