import { IAction, IState, TContext, TGUIColor, TGUISlider, TLoadingProcessState, TPanorama, TTemperature } from './type';

export declare const LoadingProcessState: TLoadingProcessState;
export declare const GUISliderState: TGUISlider;
export declare const GUIColorState: TGUIColor;
export declare const PanoramaState: TPanorama;
export declare const TemperatureState: TTemperature;
export declare const InitialState: IState;
export declare const Context: import('react').Context<TContext>;
export declare const Reducer: (state: IState, action: IAction) => IState;
