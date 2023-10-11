'use client';

import { useState } from 'react';
import { ArrowRight2, Category } from 'iconsax-react';

export const Navigation = () => {
  const [isMenuOpen, seIsMenuOpen] = useState(false);

  return (
    <nav
      className={`flex flex-col items-end gap-y-10 text-xl md:text-base tracking-widest`}
    >
      <button className="md:hidden" onClick={() => seIsMenuOpen(true)}>
        <Category variant="Bold" size={35} />
      </button>
      <div
        className={`${
          isMenuOpen ? 'flex visible' : 'hidden invisible'
        } fixed  justify-end bg-black md:visible md:flex md:flex-row md:bg-transparent md:static`}
      >
        <div className="flex flex-col gap-8 p-8  items-end md:flex md:flex-row md:gap-6 md:p-0">
          <button className="md:hidden" onClick={() => seIsMenuOpen(false)}>
            <ArrowRight2 size="40px" />
          </button>
          <a href="#uslugi">usługi</a>
          <a href="#realizacje">realizacje</a>
          <a href="#kontakt">kontakt</a>
          <a href="#cennik">cennik</a>
        </div>
      </div>
    </nav>
  );
};
