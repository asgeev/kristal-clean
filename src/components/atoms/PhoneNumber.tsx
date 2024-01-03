'use client';

import { Call, Copy } from 'iconsax-react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast, { Toaster } from 'react-hot-toast';

interface Props {
  number: string;
}
export const PhoneNumber = (props: Props) => {
  const notify = () => toast('Skopiowano!');

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
          <CopyToClipboard text={props.number} onCopy={notify}>
            <button>
              <Copy size={28} color="black" variant="Outline" />
            </button>
          </CopyToClipboard>
          <Toaster
            toastOptions={{
              className: 'font-medium text-sm',
            }}
          />
        </div>
      </div>
    </div>
  );
};
