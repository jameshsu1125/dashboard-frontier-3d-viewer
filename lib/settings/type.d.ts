import { default as View3DEvents } from '../common/events';
import { Dispatch, ReactNode } from 'react';

export declare enum ActionType {
    Active = "active",
    View3DEvents = "view3DEvents",
    Display = "display",
    ModelPicker = "modelPicker",
    ImagePicker = "imagePicker",
    GUI_Slider = "guiSlider",
    GUI_Color = "guiColor",
    GUI_Panorama = "guiPanorama",
    GUI_temperature = "guiTemperature",
    UserProps = "userProps",
    DiffuseColor = "diffuseColor",
    WebGL = "webgl",
    LoadingProcess = "loadingProcess"
}
export declare enum LoadingProcessType {
    Ball = "balls",
    Bars = "bars",
    Bubbles = "bubbles",
    Cubes = "cubes",
    Cylon = "cylon",
    Spin = "spin",
    SpinningBubbles = "spinningBubbles",
    Spokes = "spokes"
}
export declare enum TransitionType {
    Unset = 0,
    FadeIn = 1,
    FadeOut = 2,
    DidFadeIn = 3,
    DidFadeOut = 4,
    Loop = 5,
    Stop = 6
}
export type TView3DEvents = View3DEvents | null;
export type TLoadingProcessState = {
    enabled?: boolean;
    type?: LoadingProcessType;
    body?: '';
};
export declare enum TDisplayType {
    '2D' = 1,
    '3D' = 2
}
export type TSlider = {
    name: string;
    defaultValue: number;
    value: number;
    min: number;
    max: number;
};
export type TColor = {
    defaultValue: string;
    value: string;
};
export type TGUISlider = {
    data: TSlider[];
};
export type TGUIColor = {
    data: TColor[];
};
export type TModelProps = {
    label: string;
    cover: string;
    glb: string;
    mapScale: number;
    maxScale: number;
    minScale: number;
    scale?: number;
    position?: {
        x: number;
        y: number;
        z: number;
    };
    ignore?: string[];
    hidden?: string[];
};
export type TTextureProps = {
    base: string;
    alpha?: string;
    bump?: string;
    bumpScale?: number;
    dispImgUrl?: string;
    roughImgUrl?: string;
    normalImgUrl?: string;
    normalScale?: number;
    defaultMapScale?: number;
    mapScale?: number;
    dpi?: number;
    color?: {
        r: number;
        g: number;
        b: number;
    };
};
export type TTranslate = {
    [key: string]: string;
};
export type TUserProps = {
    texture: TTextureProps;
    translate?: TTranslate;
    model?: TModelProps[];
};
export type TPanoramaOption = {
    type: 'image' | 'model';
    uri: string;
    name: string;
};
export type TPanorama = {
    name: string;
    index: number;
    data: TPanoramaOption[];
    toggle: {
        name: string;
        visible: boolean;
    };
};
export type TTemperature = {
    name: string;
    index: number;
    data: {
        name: string;
        value: number;
    }[];
};
export interface IState {
    view3DEvents?: TView3DEvents;
    active?: boolean;
    loadingProcess?: TLoadingProcessState;
    display?: TDisplayType;
    modelPicker?: number;
    imagePicker?: keyof TTextureProps;
    guiSlider?: TGUISlider;
    guiColor?: TGUIColor;
    guiPanorama?: TPanorama;
    guiTemperature?: TTemperature;
    userProps?: TUserProps | null;
    diffuseColor?: string;
    webgl?: boolean;
}
export interface IAction {
    state: TView3DEvents | IState | TLoadingProcessState | TDisplayType | TGUISlider | TGUIColor | TUserProps | TTemperature | keyof TUserProps | Partial<TPanorama> | number | boolean | string;
    type: ActionType;
}
export type TContext = [IState, Dispatch<IAction>];
export interface IReactProps {
    readonly children?: ReactNode;
}
