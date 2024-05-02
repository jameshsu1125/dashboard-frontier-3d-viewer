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
