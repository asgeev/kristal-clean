import Image from 'next/image';

export const Logo = () => {
  return (
    <div className="flex flex-row flex-nowrap items-center gap-x-3">
      <p className="font-plateia text-xl tracking-special hidden md:block">
        KRISTAL
      </p>
      <Image
        priority
        src="/assets/logo.svg"
        width="64"
        height="64"
        alt="Kristal Clean"
      />
      <p className="font-plateia text-xl tracking-special hidden md:block">
        CLEAN
      </p>
    </div>
  );
};
