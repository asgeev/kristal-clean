import { Image } from 'iconsax-react';
import { Call, Copy } from 'iconsax-react';

interface Props {
  number: string;
}
export const PhoneNumber = (props: Props) => {
  return (
    <div
      className={
        'border-2 border-white bg-white  border-solid rounded-2xl w-phoneSmall md:max-w-sm'
      }
    >
      <div className={`px-4 py-3`}>
        <div className="flex flex-row gap-5 md:gap-8 justify-evenly items-center">
          <Call size={28} color="black" variant="Outline" />
          <p
            className={
              'text-black text-xl md:text-2xl tracking-widest whitespace-nowrap font-semibold'
            }
          >
            {props.number}
          </p>
          <button>
            <Copy size={28} color="black" variant="Outline" />
          </button>
        </div>
      </div>
    </div>
  );
};
