import Button from '@/components/button';
import { CAPTURE_PROPERTY } from '@/settings/config';
import { IReactProps } from '@/settings/type';
import CaptureProvider, { DOMString } from 'lesca-react-capture-button';
import { TResult } from 'lesca-react-capture-button/lib/type';
import { memo } from 'react';
import { FaImage } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';
import { twMerge } from 'tailwind-merge';

type T = IReactProps & {
  uri: string | undefined;
  onCapture: (e: TResult) => void;
  onCancel?: () => void;
};

const Upload = memo(({ children, uri, onCapture, onCancel }: T) => {
  return (
    <div className={twMerge('flex w-full flex-row items-center space-x-2 py-2')}>
      {uri && (
        <Button className='h-12 w-12 p-0' onClick={onCancel}>
          <div
            className='flex h-full w-full items-center justify-center bg-contain text-7xl text-transparent hover:text-black'
            style={{ backgroundImage: `url(${uri})` }}
          >
            <IoClose />
          </div>
        </Button>
      )}
      <div className='flex flex-1 flex-col space-y-2'>
        <div className='join w-full'>
          <CaptureProvider
            maxWidth={CAPTURE_PROPERTY.maxWidth}
            compress={CAPTURE_PROPERTY.compress}
            type={DOMString.png}
            onCapture={onCapture}
          >
            <Button className='join-item btn-md btn-block text-xs'>
              <FaImage />
              {children}
            </Button>
          </CaptureProvider>
        </div>
      </div>
    </div>
  );
});
export default Upload;
