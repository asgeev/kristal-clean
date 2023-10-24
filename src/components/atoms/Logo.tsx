import Image from 'next/image';

export const Logo = () => {
  return (
    <div className="flex flex-row flex-nowrap items-center gap-x-3">
      <p className="font-plateia text-xl tracking-special hidden lg:block">
        KRISTAL
      </p>
      <div className="h-10 w-10 relative">
        <Image priority src="/assets/logo.svg" alt="Kristal Clean" fill />
      </div>

      <p className="font-plateia text-xl tracking-special hidden lg:block">
        CLEAN
      </p>
    </div>
  );
};
