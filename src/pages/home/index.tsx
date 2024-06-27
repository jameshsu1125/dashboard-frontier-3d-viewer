import Button from '@/components/button';
import { memo, useEffect, useMemo, useRef, useState } from 'react';
import Draggable from 'react-draggable';
import { BsArrowsExpand } from 'react-icons/bs';
import { HomeContext, HomeState, THomeState } from './config';
import Drag from './drag';

import './index.less';

export type TTextureProps = {
  base: string;
  alpha?: string;
  bump?: string;
  bumpScale?: number;
  dispImgUrl?: string;
  roughImgUrl?: string;
  normalImgUrl?: string;
  defaultMapScale?: number;
  mapScale?: number;
  normalScale?: number;
};
export type TTranslate = {
  [key: string]: string;
};
export type TUserProps = {
  texture: TTextureProps;
  translate?: TTranslate;
};

const Home = memo(() => {
  const [state, setState] = useState<THomeState>(HomeState);
  const ref = useRef<any>();

  const texture = useMemo(() => {
    const p: TTextureProps = {
      base: state.baseMap || '',
      bumpScale: state.bumpScale,
      normalScale: state.normalScale,
    };
    if (state.alphaMap) p.alpha = state.alphaMap;
    if (state.bumpMap) p.bump = state.bumpMap;
    if (state.normalMap) p.normalImgUrl = state.normalMap;
    if (state.roughnessMap) p.roughImgUrl = state.roughnessMap;
    if (state.displacementMap) p.dispImgUrl = state.displacementMap;

    return p;
  }, [state]);

  useEffect(() => {
    if (ref.current) {
      ref.current.setProps({ texture });
    }
  }, [texture]);

  useEffect(() => {
    const callFunction = async () => {
      const viewer = (await import('../../../lib/index')).default;
      ref.current = viewer;
      viewer.render();
    };
    callFunction();
  }, []);

  const [open, setOpen] = useState(true);

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
            <div className='handle relative w-full cursor-grab bg-base-200 text-center font-bold capitalize active:cursor-grabbing'>
              set material mapping props
              <Button
                className='absolute right-0 top-0 h-6 min-h-6 w-6 bg-primary p-0'
                onClick={() => setOpen((S) => !S)}
              >
                <BsArrowsExpand />
              </Button>
            </div>
            {open && <Drag />}
          </div>
        </Draggable>
      </HomeContext.Provider>
    </div>
  );
});

export default Home;
