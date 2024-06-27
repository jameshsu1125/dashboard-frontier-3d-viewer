type ImageProcessingType = {
    downscaleWidth: number;
    currentURI: string;
    currentColor?: string;
    ratio?: number;
    width: number;
    height: number;
};
export declare const ImageProcessing: (url: string, isExtractColor?: boolean) => Promise<ImageProcessingType>;
export {};
