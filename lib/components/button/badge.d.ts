import { TTextureProps } from '../../settings/type';

type TUserImageProps = Omit<TTextureProps, 'bumpScale' | 'mapScale' | 'defaultMapScale' | 'dpi' | 'normalScale'>;
export declare const TranslateToCurrentName: Record<keyof TUserImageProps, string>;
declare const Badge: import('react').MemoExoticComponent<({ children, active }: {
    active: boolean;
    children: keyof TUserImageProps;
}) => import("react/jsx-runtime").JSX.Element>;
export default Badge;
