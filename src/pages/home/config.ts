import { createContext, Dispatch, SetStateAction } from 'react';

export type HomeMap = string | undefined;
export type THomeState = {
  normalMap: HomeMap;
  alphaMap: HomeMap;
  bumpMap: HomeMap;
  bumpScale: number;
};

export type THomeContext = [THomeState, Dispatch<SetStateAction<THomeState>>];

export const HomeState = {
  normalMap: undefined,
  alphaMap: undefined,
  bumpMap: undefined,
  bumpScale: 0.2,
};

export const HomeContext = createContext<THomeContext>([HomeState, () => {}]);
