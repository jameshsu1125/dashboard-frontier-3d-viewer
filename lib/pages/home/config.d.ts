import { Dispatch, SetStateAction } from 'react';

export declare enum THomeDrawerType {
    Open = 0,
    Close = 1
}
export declare enum THomeLoadStepsType {
    unset = 0,
    dom = 1
}
export type THomeState = {
    drawer: THomeDrawerType;
    loadSteps: THomeLoadStepsType;
    domElement: HTMLCanvasElement | undefined;
    polar: number | undefined;
};
export type THomeContext = [THomeState, Dispatch<SetStateAction<THomeState>>];
export declare const HomeState: THomeState;
export declare const HomeContext: import('react').Context<THomeContext>;
export declare const MODEL_NARROW_MESH: {
    name: string;
    scale: number;
    position: {
        x: number;
        y: number;
        z: number;
    };
}[];
export declare const FLOOR_POSITION_Y = -2;
