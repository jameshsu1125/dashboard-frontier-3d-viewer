import { memo, useContext, useEffect, useState } from 'react';
import { HomeContext } from './config';
import Upload from './upload';
import { useDebounce } from 'use-debounce';

const Drag = memo(() => {
  const [state, setState] = useContext(HomeContext);

  const [scale, setScale] = useState(state.bumpScale);

  const [value] = useDebounce(scale, 1000);
  useEffect(() => {
    setState((S) => ({ ...S, bumpScale: value }));
  }, [value]);

  return (
    <div className='w-full cursor-auto px-5 py-2'>
      <Upload
        uri={state.normalMap}
        onCapture={(e) => setState((S) => ({ ...S, normalMap: e.image }))}
      >
        Upload Normal Mapping
      </Upload>
      <Upload
        uri={state.alphaMap}
        onCapture={(e) => setState((S) => ({ ...S, alphaMap: e.image }))}
      >
        Upload Alpha Mapping
      </Upload>
      <Upload uri={state.bumpMap} onCapture={(e) => setState((S) => ({ ...S, bumpMap: e.image }))}>
        Upload Bump Mapping
      </Upload>
      <div className='flex w-full flex-col space-y-2 py-2'>
        <label>Bump Scale</label>
        <input
          type='range'
          min={0}
          max='100'
          defaultValue={state.bumpScale}
          className='range range-primary'
          onChange={(e) => {
            setScale(Number(e.target.value));
          }}
        />
      </div>
    </div>
  );
});
export default Drag;
