import { Image } from 'iconsax-react';
import { Call, Copy } from 'iconsax-react';

interface Props {
  number: string;
  invert?: boolean;
}
export const PhoneNumber = (props: Props) => {
  return (
    <div
      className={`border-2 border-white ${
        props.invert ? 'bg-white' : 'bg-transparent'
      } border-solid rounded-2xl w-phoneSmall md:max-w-sm`}
    >
      <div className={`px-4 py-3`}>
        <div className="flex flex-row gap-5 md:gap-8 justify-evenly items-center">
          <Call size={28} className={`${props.invert ? 'invert' : null}`} />
          <p
            className={`${
              props.invert ? 'text-black' : null
            } text-xl md:text-2xl tracking-widest	  whitespace-nowrap font-semibold`}
          >
            {props.number}
          </p>
          <button>
            <Copy size={28} className={`${props.invert ? 'invert' : null}`} />
          </button>
        </div>
      </div>
    </div>
  );
};
