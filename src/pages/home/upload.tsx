import Button from '@/components/button';
import { CAPTURE_PROPERTY } from '@/settings/config';
import { IReactProps } from '@/settings/type';
import CaptureProvider, { DOMString } from 'lesca-react-capture-button';
import { TResult } from 'lesca-react-capture-button/lib/type';
import { memo } from 'react';
import { FaImage } from 'react-icons/fa6';
import { twMerge } from 'tailwind-merge';

type T = IReactProps & {
  uri: string | undefined;
  onCapture: (e: TResult) => void;
};

const Upload = memo(({ children, uri, onCapture }: T) => {
  return (
    <div className={twMerge('flex w-full flex-row items-center space-x-2 py-2')}>
      {uri && <img className='h-20 w-20' src={uri} />}
      <div className='flex flex-1 flex-col space-y-2'>
        <h1 className='w-full text-center text-sm font-bold'>{children}</h1>
        <CaptureProvider
          maxWidth={CAPTURE_PROPERTY.maxWidth}
          compress={CAPTURE_PROPERTY.compress}
          type={DOMString.png}
          onCapture={onCapture}
        >
          <Button className='btn-block'>
            <FaImage />
            Upload Image
          </Button>
        </CaptureProvider>
      </div>
    </div>
  );
});
export default Upload;
