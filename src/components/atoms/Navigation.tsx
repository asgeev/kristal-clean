import { ArrowRight2 } from 'iconsax-react';
export const Navigation = () => {
  return (
    <nav
      className={`flex flex-col items-end gap-y-10 text-2xl tracking-widest	`}
    >
      <button className="w-12 h-12">
        <ArrowRight2 />
      </button>
      <a href="sevices" className="">
        usługi
      </a>
      <a href="sevices">realizacje</a>
      <a href="sevices">kontakt</a>
      <a href="sevices">cennik</a>
    </nav>
  );
};