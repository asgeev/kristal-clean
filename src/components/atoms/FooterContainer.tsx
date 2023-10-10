import React from 'react';

interface Props {
  title: string;
  children?: React.ReactNode;
}

export const FooterContainer = (props: Props) => {
  return (
    <div>
      <p className="font-medium tracking-widest">{props.title}</p>
      <div className="mt-6 text-sm	 font-light">{props.children}</div>
    </div>
  );
};
