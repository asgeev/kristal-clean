import React from 'react';

interface Props {
  title: string;
}

export const SectionHeader = (props: Props) => {
  return (
    <h1 className="text-2xl font-semibold tracking-wider">{props.title}</h1>
  );
};
