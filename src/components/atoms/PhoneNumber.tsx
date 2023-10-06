import { Image } from 'iconsax-react';
import { Call, Copy } from 'iconsax-react';

interface Props {
  text: string;
  invert?: boolean;
}
export const PhoneNumber = (props: Props) => {
  return (
    <div
      className={`border-2 border-white ${
        props.invert ? 'bg-white' : 'bg-transparent'
      } border-solid rounded-2xl max-w-phoneSmall md:max-w-sm`}
    >
      <div className={`px-4 py-3`}>
        <div className="flex flex-row gap-5 md:gap-8 justify-evenly items-center">
          <Call size={32} className={`${props.invert ? 'invert' : null}`} />
          <p
            className={`${
              props.invert ? 'text-black' : null
            } text-2xl md:text-3xl whitespace-nowrap font-bold`}
          >
            {props.text}
          </p>
          <button>
            <Copy size={30} className={`${props.invert ? 'invert' : null}`} />
          </button>
        </div>
      </div>
    </div>
  );
};
