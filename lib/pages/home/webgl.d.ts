import { TModelProps, TPanorama, TSlider, TTemperature, TUserProps } from '../../settings/type';
import { THomeState } from './config';

export type TWebGLProps = {
    dom: HTMLDivElement;
    userProps: TUserProps;
    color: string;
    slider: TSlider[];
    model: TModelProps;
    panorama: TPanorama;
    temperature: TTemperature;
    setState: React.Dispatch<React.SetStateAction<THomeState>>;
    onColorChange: (color: string) => void;
};
type TWebGLEvent = 'onReady' | 'onUpdate';
export default class WebGL {
    private props;
    private webgl;
    private panorama;
    private object3D;
    private onReady;
    private onUpdate;
    constructor(props: TWebGLProps);
    private loadAndProcessingMaterial;
    private loadModel;
    private loadTexture;
    updateMaterial(data: TSlider[]): void;
    updateModel(options: TModelProps, onload?: () => void): void;
    updateColor(color: string): void;
    updateMatrix(): void;
    stopRender(): void;
    restart(dom: HTMLElement): void;
    addEventListener(event: TWebGLEvent, listener: () => void): void;
    setSpotLightIntensityByColor(color: string): void;
    updateUserProps(userProps: TUserProps, onload?: () => void): Promise<void>;
    getDomElementFromRender(): HTMLCanvasElement;
    updatePanorama(panorama: TPanorama, onload?: () => void): void;
    updateTemperature(temperature: TTemperature): void;
}
export {};
