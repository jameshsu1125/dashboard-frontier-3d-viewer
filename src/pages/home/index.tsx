import { memo, useEffect, useMemo, useRef, useState } from 'react';
import Draggable from 'react-draggable';
import { HomeContext, HomeState, THomeState } from './config';
import Drag from './drag';
import './index.less';

type TUserProps = {
  base: string;
  alpha?: string;
  bump?: string;
  bumpScale?: number;
  dispImgUrl?: string;
  roughImgUrl?: string;
  normalImgUrl?: string;
};

const Home = memo(() => {
  const [state, setState] = useState<THomeState>(HomeState);
  const ref = useRef<any>();

  const props = useMemo(() => {
    const p: TUserProps = {
      base: state.baseMap || '',
      bumpScale: state.bumpScale,
    };
    if (state.alphaMap) p.alpha = state.alphaMap;
    if (state.bumpMap) p.bump = state.bumpMap;
    if (state.normalMap) p.normalImgUrl = state.baseMap;
    if (state.roughnessMap) p.roughImgUrl = state.roughnessMap;
    if (state.displacementMap) p.dispImgUrl = state.displacementMap;

    return p;
  }, [state]);

  useEffect(() => {
    if (ref.current) {
      ref.current.setProps(props);
    }
  }, [props]);

  useEffect(() => {
    const callFunction = async () => {
      const viewer = (await import('frontier-3d-viewer')).default;
      ref.current = viewer;
      viewer.render();
    };
    callFunction();
  }, []);

  return (
    <div className='Home'>
      <HomeContext.Provider value={[state, setState]}>
        <div id='app'></div>
        <Draggable
          handle='.handle'
          defaultPosition={{ x: window.innerWidth - 320, y: 80 }}
          scale={1}
        >
          <div className='w-80 bg-base-100 p-1 drop-shadow-2xl'>
            <div className='handle w-full cursor-grab bg-base-200 text-center font-bold capitalize active:cursor-grabbing'>
              set material mapping props
            </div>
            <Drag />
          </div>
        </Draggable>
      </HomeContext.Provider>
    </div>
  );
});

export default Home;
