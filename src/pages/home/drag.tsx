import { memo, useContext, useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { HomeContext } from './config';
import Upload from './upload';

const Drag = memo(() => {
  const [state, setState] = useContext(HomeContext);
  const [scale, setScale] = useState(state.bumpScale);
  const [value] = useDebounce(scale, 100);

  useEffect(() => {
    setState((S) => ({ ...S, bumpScale: value }));
  }, [value]);

  return (
    <div className='w-full cursor-auto px-5 py-2'>
      <Upload
        uri={state.baseMap}
        onCancel={() => setState((S) => ({ ...S, baseMap: undefined }))}
        onCapture={(e) => setState((S) => ({ ...S, baseMap: e.image }))}
      >
        Base Mapping
      </Upload>
      <Upload
        uri={state.alphaMap}
        onCancel={() => setState((S) => ({ ...S, alphaMap: undefined }))}
        onCapture={(e) => setState((S) => ({ ...S, alphaMap: e.image }))}
      >
        Alpha Mapping
      </Upload>
      <Upload
        uri={state.bumpMap}
        onCancel={() => setState((S) => ({ ...S, bumpMap: undefined }))}
        onCapture={(e) => setState((S) => ({ ...S, bumpMap: e.image }))}
      >
        Upload Bump Mapping
      </Upload>
      <Upload
        uri={state.displacementMap}
        onCancel={() => setState((S) => ({ ...S, displacementMap: undefined }))}
        onCapture={(e) => setState((S) => ({ ...S, displacementMap: e.image }))}
      >
        Upload Displacement Map
      </Upload>
      <Upload
        uri={state.roughnessMap}
        onCancel={() => setState((S) => ({ ...S, roughnessMap: undefined }))}
        onCapture={(e) => setState((S) => ({ ...S, roughnessMap: e.image }))}
      >
        Upload Roughness Map
      </Upload>
      <Upload
        uri={state.normalMap}
        onCancel={() => setState((S) => ({ ...S, normalMap: undefined }))}
        onCapture={(e) => setState((S) => ({ ...S, normalMap: e.image }))}
      >
        Upload Normal Map
      </Upload>
      <Upload
        uri={state.roughnessMap}
        onCancel={() => setState((S) => ({ ...S, roughnessMap: undefined }))}
        onCapture={(e) => setState((S) => ({ ...S, roughnessMap: e.image }))}
      >
        Upload Roughness Map
      </Upload>

      <div className='flex w-full flex-col space-y-2 py-2'>
        <label>Bump Scale</label>
        <div className='join flex flex-col space-y-2'>
          <input
            type='range'
            min={0}
            max='100'
            defaultValue={state.bumpScale * 100}
            className='range range-primary'
            onChange={(e) => {
              setScale(Number(e.target.value) / 100);
            }}
          />
          <input
            type='number'
            value={value}
            className='input input-primary'
            onChange={(e) => setScale(Number(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
});
export default Drag;
