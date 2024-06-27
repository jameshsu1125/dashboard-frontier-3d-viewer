import { TPanorama, TSlider, TTemperature } from '../../settings/type';
import { MemoExoticComponent } from 'react';

declare const GUI: {
    Slider: MemoExoticComponent<(props: {
        data: TSlider;
    }) => JSX.Element>;
    Color: MemoExoticComponent<() => JSX.Element>;
    Panorama: MemoExoticComponent<(props: {
        data: TPanorama;
    }) => JSX.Element>;
    Temperature: MemoExoticComponent<(props: {
        data: TTemperature;
    }) => JSX.Element>;
};
export default GUI;
