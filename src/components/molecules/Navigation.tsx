'use client';

import { useState, useLayoutEffect } from 'react';
import { ArrowRight2, Category } from 'iconsax-react';
import { NavLink } from '../atoms/NavLink';
import { useLockedBody, useMediaQuery } from 'usehooks-ts';

export const Navigation = () => {
  const [isMenuOpen, seIsMenuOpen] = useState(false);
  const [locked, setLocked] = useLockedBody(false, 'body');
  const matches = useMediaQuery('(min-width: 768px)');

  const closeMenu = () => {
    setLocked(false);
    seIsMenuOpen(false);
  };

  const openMenu = () => {
    setLocked(true);
    seIsMenuOpen(true);
  };

  //Set body scroll to false when window is resized over md:768px
  useLayoutEffect(() => {
    setLocked(false);
  }, [matches]);

  return (
    <nav
      className={`flex flex-col items-end gap-y-10 text-xl md:text-base tracking-widest z-50`}
    >
      <button className="md:hidden" onClick={openMenu}>
        <Category variant="Bold" size={35} />
      </button>
      <div
        data-isMenuOpen={`${isMenuOpen}`}
        className={`
        fixed
        top-0
        right-0
        max-md:data-[isMenuOpen=false]:hidden
        max-md:data-[isMenuOpen=true]:bg-black
        max-md:data-[isMenuOpen=true]:h-100vh 
        max-md:data-[isMenuOpen=true]:w-100vw
        p-2
        z-50 
        justify-en
        md:block 
        md:static  
        md:flex-row 
        max-md:animate-fade-left animate-duration-[400ms] animate-ease-in
        overflow-hidden
        `}
      >
        <div className="flex flex-col gap-8 p-6 items-end md:flex md:flex-row md:gap-6 md:p-0">
          <button className="md:hidden" onClick={closeMenu}>
            <ArrowRight2 size="40px" />
          </button>
          <NavLink
            href="#kontakt"
            name="kontakt"
            animationDelay={400}
            onClick={closeMenu}
          />
          <NavLink
            href="#uslugi"
            name="usługi"
            animationDelay={600}
            onClick={closeMenu}
          />
          {/* <NavLink
            href="#cennik"
            name="cennik"
            animationDelay={800}
            onClick={closeMenu}
          />
          <NavLink
            href="#realizacje"
            name="realizacje"
            animationDelay={1000}
            onClick={closeMenu}
          /> */}
        </div>
      </div>
    </nav>
  );
};
