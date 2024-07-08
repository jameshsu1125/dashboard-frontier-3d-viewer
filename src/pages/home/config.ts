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
  normalScale: number;
};

export type THomeContext = [THomeState, Dispatch<SetStateAction<THomeState>>];

export const HomeState: THomeState = {
  baseMap: undefined,
  alphaMap: undefined,
  bumpMap: undefined,
  normalMap: undefined,
  roughnessMap: undefined,
  displacementMap: undefined,
  bumpScale: 0.05,
  normalScale: 0.5,
};

export const HomeContext = createContext<THomeContext>([HomeState, () => {}]);

export const DATA = [
  {
    baseMap: `/3d-viewer/mapping/20240410011320_F041013017317_202404100926293876/base.png`,
    normalMap: `/3d-viewer/mapping/20240410011320_F041013017317_202404100926293876/nrm.png`,
    roughnessMap: `/3d-viewer/mapping/20240410011320_F041013017317_202404100926293876/rough.png`,
    displacementMap: `/3d-viewer/mapping/20240410011320_F041013017317_202404100926293876/disp.png`,
    alphaMap: undefined,
    bumpMap: undefined,
  },
  {
    baseMap: `/3d-viewer/mapping/20240425054922_F042555395107_202404251355493448/base.png`,
    normalMap: `/3d-viewer/mapping/20240425054922_F042555395107_202404251355493448/nrm.png`,
    roughnessMap: `/3d-viewer/mapping/20240425054922_F042555395107_202404251355493448/rough.png`,
    displacementMap: `/3d-viewer/mapping/20240425054922_F042555395107_202404251355493448/disp.png`,
    alphaMap: undefined,
    bumpMap: undefined,
  },
  {
    baseMap: `/3d-viewer/mapping/20240513140647_F051333144002_202407021551178983/base.png`,
    normalMap: `/3d-viewer/mapping/20240513140647_F051333144002_202407021551178983/nrm.png`,
    roughnessMap: `/3d-viewer/mapping/20240513140647_F051333144002_202407021551178983/rough.png`,
    displacementMap: `/3d-viewer/mapping/20240513140647_F051333144002_202407021551178983/disp.png`,
    alphaMap: `/3d-viewer/mapping/20240513140647_F051333144002_202407021551178983/alpha.png`,
    bumpMap: `/3d-viewer/mapping/20240513140647_F051333144002_202407021551178983/metal.png`,
  },
  {
    baseMap: `/3d-viewer/mapping/G-star 2_F776629520328_202407021815166313/base.png`,
    normalMap: `/3d-viewer/mapping/G-star 2_F776629520328_202407021815166313/nrm.png`,
    roughnessMap: `/3d-viewer/mapping/G-star 2_F776629520328_202407021815166313/rough.png`,
    displacementMap: `/3d-viewer/mapping/G-star 2_F776629520328_202407021815166313/disp.png`,
    alphaMap: `/3d-viewer/mapping/G-star 2_F776629520328_202407021815166313/alpha.png`,
    bumpMap: `/3d-viewer/mapping/G-star 2_F776629520328_202407021815166313/metal.png`,
  },
  {
    baseMap: `/3d-viewer/mapping/G-star_F070291070302_202407021540089378/base.png`,
    normalMap: `/3d-viewer/mapping/G-star_F070291070302_202407021540089378/nrm.png`,
    roughnessMap: `/3d-viewer/mapping/G-star_F070291070302_202407021540089378/rough.png`,
    displacementMap: `/3d-viewer/mapping/20240513140647_F051333144002_202407021551178983/disp.png`,
    alphaMap: `/3d-viewer/mapping/G-star_F070291070302_202407021540089378/alpha.png`,
    bumpMap: `/3d-viewer/mapping/G-star_F070291070302_202407021540089378/metal.png`,
  },
  {
    baseMap: `/3d-viewer/mapping/Ugly-F062721028810-202406271543281323/base.png`,
    normalMap: `/3d-viewer/mapping/Ugly-F062721028810-202406271543281323/nrm.png`,
    roughnessMap: `/3d-viewer/mapping/Ugly-F062721028810-202406271543281323/rough.png`,
    displacementMap: `/3d-viewer/mapping/Ugly-F062721028810-202406271543281323/disp.png`,
    alphaMap: `/3d-viewer/mapping/Ugly-F062721028810-202406271543281323/alpha.png`,
    bumpMap: `/3d-viewer/mapping/Ugly-F062721028810-202406271543281323/metal.png`,
  },
  {
    baseMap: `/3d-viewer/mapping/B335E6/base.jpg`,
    normalMap: `/3d-viewer/mapping/B335E6/nrm.jpg`,
    roughnessMap: `/3d-viewer/mapping/B335E6/rough.jpg`,
    displacementMap: `/3d-viewer/mapping/B335E6/disp.jpg`,
    alphaMap: `/3d-viewer/mapping/B335E6/alpha.jpg`,
    bumpMap: `/3d-viewer/mapping/B335E6/metal.jpg`,
  },
  {
    baseMap: `/3d-viewer/mapping/0/base.jpg`,
    normalMap: `/3d-viewer/mapping/0/nrm.jpg`,
    roughnessMap: `/3d-viewer/mapping/0/rough.jpg`,
    displacementMap: `/3d-viewer/mapping/0/disp.jpg`,
    alphaMap: undefined,
    bumpMap: undefined,
  },
  {
    baseMap: `/3d-viewer/mapping/1/base.jpg`,
    normalMap: `/3d-viewer/mapping/1/nrm.jpg`,
    roughnessMap: `/3d-viewer/mapping/1/rough.jpg`,
    displacementMap: `/3d-viewer/mapping/1/disp.jpg`,
    alphaMap: undefined,
    bumpMap: undefined,
  },
  {
    baseMap: `/3d-viewer/mapping/2/base.jpg`,
    normalMap: `/3d-viewer/mapping/2/nrm.jpg`,
    roughnessMap: `/3d-viewer/mapping/3/rough.jpg`,
    displacementMap: `/3d-viewer/mapping/3/disp.jpg`,
    alphaMap: undefined,
    bumpMap: undefined,
  },
  {
    baseMap: `/3d-viewer/mapping/4/base.jpg`,
    normalMap: `/3d-viewer/mapping/4/nrm.jpg`,
    roughnessMap: `/3d-viewer/mapping/4/rough.jpg`,
    displacementMap: `/3d-viewer/mapping/4/disp.jpg`,
    alphaMap: undefined,
    bumpMap: undefined,
  },
  {
    baseMap: `/3d-viewer/mapping/5/base.jpg`,
    normalMap: `/3d-viewer/mapping/5/nrm.jpg`,
    roughnessMap: `/3d-viewer/mapping/5/rough.jpg`,
    displacementMap: `/3d-viewer/mapping/5/disp.jpg`,
    alphaMap: undefined,
    bumpMap: undefined,
  },
  {
    baseMap: `/3d-viewer/mapping/6/base.jpg`,
    normalMap: `/3d-viewer/mapping/6/nrm.jpg`,
    roughnessMap: `/3d-viewer/mapping/6/rough.jpg`,
    displacementMap: `/3d-viewer/mapping/6/disp.jpg`,
    alphaMap: undefined,
    bumpMap: undefined,
  },
  {
    baseMap: `/3d-viewer/mapping/7/base.jpg`,
    normalMap: `/3d-viewer/mapping/7/nrm.jpg`,
    roughnessMap: `/3d-viewer/mapping/7/rough.jpg`,
    displacementMap: `/3d-viewer/mapping/7/disp.jpg`,
    alphaMap: undefined,
    bumpMap: undefined,
  },
  {
    baseMap: `/3d-viewer/mapping/8/base.jpg`,
    normalMap: `/3d-viewer/mapping/8/nrm.jpg`,
    roughnessMap: `/3d-viewer/mapping/8/rough.jpg`,
    displacementMap: `/3d-viewer/mapping/8/disp.jpg`,
    alphaMap: undefined,
    bumpMap: undefined,
  },
  {
    baseMap: `/3d-viewer/mapping/9/base.jpg`,
    normalMap: `/3d-viewer/mapping/9/nrm.jpg`,
    roughnessMap: `/3d-viewer/mapping/9/rough.jpg`,
    displacementMap: `/3d-viewer/mapping/9/disp.jpg`,
    alphaMap: undefined,
    bumpMap: undefined,
  },
  {
    baseMap: `/3d-viewer/mapping/416568/base.jpeg`,
    normalMap: `/3d-viewer/mapping/416568/nrm.jpg`,
    roughnessMap: `/3d-viewer/mapping/416568/rough.jpg`,
    displacementMap: `/3d-viewer/mapping/416568/disp.jpg`,
    alphaMap: `/3d-viewer/mapping/416568/alpha.jpg`,
    bumpMap: `/3d-viewer/mapping/416568/metal.jpg`,
  },
  {
    baseMap: `/3d-viewer/mapping/ED27343/base.jpg`,
    normalMap: `/3d-viewer/mapping/ED27343/nrm.jpg`,
    roughnessMap: `/3d-viewer/mapping/ED27343/rough.jpg`,
    displacementMap: `/3d-viewer/mapping/ED27343/disp.jpg`,
    alphaMap: `/3d-viewer/mapping/ED27343/alpha.jpg`,
    bumpMap: `/3d-viewer/mapping/ED27343/metal.jpg`,
  },
  {
    baseMap: `/3d-viewer/mapping/n/base.jpg`,
    normalMap: `/3d-viewer/mapping/n/nrm.jpg`,
    roughnessMap: `/3d-viewer/mapping/n/rough.jpg`,
    displacementMap: `/3d-viewer/mapping/n/disp.jpg`,
  },
];
