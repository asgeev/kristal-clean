'use client';

import { useState } from 'react';
import { ArrowRight2, Category } from 'iconsax-react';
import Link from 'next/link';

export const Navigation = () => {
  const [isMenuOpen, seIsMenuOpen] = useState(false);

  const closeMenu = () => {
    seIsMenuOpen(false);
  };

  const openMenu = () => {
    seIsMenuOpen(true);
  };

  return (
    <nav
      className={`flex flex-col items-end gap-y-10 text-xl md:text-base tracking-widest`}
    >
      <button className="md:hidden" onClick={openMenu}>
        <Category variant="Bold" size={35} />
      </button>
      <div
        data-isMenuOpen={`${isMenuOpen}`}
        className={`
        fixed
        top-0
        max-md:data-[isMenuOpen=false]:hidden
        h-full w-full z-50 
        justify-end bg-black
        md:block 
        md:static  
        md:flex-row 
        max-md:animate-fade-left animate-duration-[400ms] animate-ease-in
        `}
      >
        <div className=" flex flex-col gap-8 p-8  items-end md:flex md:flex-row md:gap-6 md:p-0">
          <button className="md:hidden" onClick={closeMenu}>
            <ArrowRight2 size="40px" />
          </button>
          //Create nav link atom for prevent repeating
          <Link
            href="#uslugi"
            className="max-md:animate-jump-in 
            max-md:animate-duration-[200ms] 
            max-md:animate-delay-[400ms] 
            max-md:animate-ease-in
            md:hover:scale-110
            duration-500	 
            transform-gpu"
            onClick={closeMenu}
          >
            usługi
          </Link>
          <Link
            href="#realizacje"
            className="max-md:animate-jump-in 
            max-md:animate-duration-[200ms] 
            max-md:animate-delay-[600ms] 
            max-md:animate-ease-in
            md:hover:scale-110
            duration-500	  
            transform-gpu"
            onClick={closeMenu}
          >
            realizacje
          </Link>
          <Link
            href="#kontakt"
            className="max-md:animate-jump-in 
            max-md:animate-duration-[200ms] 
            max-md:animate-delay-[800ms] 
            max-md:animate-ease-in
            md:hover:scale-110 
            duration-500	 
            transform-gpu"
            onClick={closeMenu}
          >
            kontakt
          </Link>
          <Link
            href="#cennik"
            className="max-md:animate-jump-in 
            max-md:animate-duration-[200ms] 
            max-md:animate-delay-[1000ms] 
            max-md:animate-ease-in 
            md:hover:scale-110 
            duration-500
            transform-gpu"
            onClick={closeMenu}
          >
            cennik
          </Link>
        </div>
      </div>
    </nav>
  );
};
