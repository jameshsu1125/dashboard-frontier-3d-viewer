import { TPanorama } from '../../../settings/type';
import { THREE } from 'lesca-webgl-threejs';
import { TWebGLProps } from '../webgl';

export default class Panorama {
    private scene;
    private sphere;
    private sphereMaterial;
    private options;
    private ground;
    private groundMaterial;
    private type;
    private fog;
    constructor(scene: THREE.Scene, options: TWebGLProps);
    addMaterial(map: THREE.Texture, panoramaOptions: TPanorama): void;
    rerender(): void;
    updateToggle(toggle: boolean): void;
}
