'use client';
import { Logo } from '../atoms/Logo';
import { Navigation } from '../atoms/Navigation';

export const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center py-4">
      <Logo />
      <Navigation />
    </header>
  );
};
