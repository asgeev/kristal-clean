import Image from 'next/image';

export const Logo = () => {
  return (
    <div className="flex flex-row flex-nowrap items-center gap-x-3">
      <p className="font-plateia text-xl tracking-special hidden lg:block">
        KRISTAL
      </p>
      <Image
        priority
        src="/assets/logo.svg"
        width="52"
        height="52"
        alt="Kristal Clean"
      />
      <p className="font-plateia text-xl tracking-special hidden lg:block">
        CLEAN
      </p>
    </div>
  );
};
