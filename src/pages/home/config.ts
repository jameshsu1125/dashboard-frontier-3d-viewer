import { createContext, Dispatch, SetStateAction } from 'react';

export type HomeMap = string | undefined;
export type THomeState = {
  baseMap: HomeMap;
  alphaMap: HomeMap;
  bumpMap: HomeMap;
  normalMap: HomeMap;
  roughnessMap: HomeMap;
  displacementMap: HomeMap;
  bumpScale: number;
};

export type THomeContext = [THomeState, Dispatch<SetStateAction<THomeState>>];

export const HomeState = {
  baseMap: undefined,
  alphaMap: undefined,
  bumpMap: undefined,
  normalMap: undefined,
  roughnessMap: undefined,
  displacementMap: undefined,
  bumpScale: 0.05,
};

export const HomeContext = createContext<THomeContext>([HomeState, () => {}]);

export const DATA = [
  {
    baseMap: `/3d-viewer/mapping/0/base.jpg`,
    normalMap: `/3d-viewer/mapping/0/nrm.jpg`,
    roughnessMap: `/3d-viewer/mapping/0/rough.jpg`,
    displacementMap: `/3d-viewer/mapping/0/disp.jpg`,
  },
  {
    baseMap: `/3d-viewer/mapping/1/base.jpg`,
    normalMap: `/3d-viewer/mapping/1/nrm.jpg`,
    roughnessMap: `/3d-viewer/mapping/1/rough.jpg`,
    displacementMap: `/3d-viewer/mapping/1/disp.jpg`,
  },
  {
    baseMap: `/3d-viewer/mapping/2/base.jpg`,
    normalMap: `/3d-viewer/mapping/2/nrm.jpg`,
    roughnessMap: `/3d-viewer/mapping/3/rough.jpg`,
    displacementMap: `/3d-viewer/mapping/3/disp.jpg`,
  },
  {
    baseMap: `/3d-viewer/mapping/4/base.jpg`,
    normalMap: `/3d-viewer/mapping/4/nrm.jpg`,
    roughnessMap: `/3d-viewer/mapping/4/rough.jpg`,
    displacementMap: `/3d-viewer/mapping/4/disp.jpg`,
  },
  {
    baseMap: `/3d-viewer/mapping/5/base.jpg`,
    normalMap: `/3d-viewer/mapping/5/nrm.jpg`,
    roughnessMap: `/3d-viewer/mapping/5/rough.jpg`,
    displacementMap: `/3d-viewer/mapping/5/disp.jpg`,
  },
  {
    baseMap: `/3d-viewer/mapping/6/base.jpg`,
    normalMap: `/3d-viewer/mapping/6/nrm.jpg`,
    roughnessMap: `/3d-viewer/mapping/6/rough.jpg`,
    displacementMap: `/3d-viewer/mapping/6/disp.jpg`,
  },
  {
    baseMap: `/3d-viewer/mapping/7/base.jpg`,
    normalMap: `/3d-viewer/mapping/7/nrm.jpg`,
    roughnessMap: `/3d-viewer/mapping/7/rough.jpg`,
    displacementMap: `/3d-viewer/mapping/7/disp.jpg`,
  },
  {
    baseMap: `/3d-viewer/mapping/8/base.jpg`,
    normalMap: `/3d-viewer/mapping/8/nrm.jpg`,
    roughnessMap: `/3d-viewer/mapping/8/rough.jpg`,
    displacementMap: `/3d-viewer/mapping/8/disp.jpg`,
  },
  {
    baseMap: `/3d-viewer/mapping/9/base.jpg`,
    normalMap: `/3d-viewer/mapping/9/nrm.jpg`,
    roughnessMap: `/3d-viewer/mapping/9/rough.jpg`,
    displacementMap: `/3d-viewer/mapping/9/disp.jpg`,
  },
  {
    baseMap: `/3d-viewer/mapping/10/base.jpg`,
    normalMap: `/3d-viewer/mapping/10/nrm.jpg`,
    roughnessMap: `/3d-viewer/mapping/10/rough.jpg`,
    displacementMap: `/3d-viewer/mapping/10/disp.jpg`,
  },
  {
    baseMap: `/3d-viewer/mapping/11/base.jpg`,
    normalMap: `/3d-viewer/mapping/11/nrm.jpg`,
    roughnessMap: `/3d-viewer/mapping/11/rough.jpg`,
    displacementMap: `/3d-viewer/mapping/11/disp.jpg`,
    alphaMap: `/3d-viewer/mapping/11/alpha.jpg`,
    bumpMap: `/3d-viewer/mapping/11/metal.jpg`,
  },
  {
    baseMap: `/3d-viewer/mapping/12/base.jpg`,
    normalMap: `/3d-viewer/mapping/12/nrm.jpg`,
    roughnessMap: `/3d-viewer/mapping/12/rough.jpg`,
    displacementMap: `/3d-viewer/mapping/12/disp.jpg`,
    alphaMap: `/3d-viewer/mapping/12/alpha.jpg`,
    bumpMap: `/3d-viewer/mapping/12/metal.jpg`,
  },
  {
    baseMap: `/3d-viewer/mapping/13/base.jpg`,
    normalMap: `/3d-viewer/mapping/13/nrm.jpg`,
    roughnessMap: `/3d-viewer/mapping/13/rough.jpg`,
    displacementMap: `/3d-viewer/mapping/13/disp.jpg`,
  },
];
