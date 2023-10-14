'use client';
import { Logo } from '../atoms/Logo';
import { Navigation } from '../molecules/Navigation';

export const Header = () => {
  return (
    <header className="sticky top-0 z-40 bg-black">
      <div className="flex flex-row justify-between items-center py-4 md:py-6">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};
