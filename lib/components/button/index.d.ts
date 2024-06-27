import { IReactProps } from '../../settings/type';

type TProps = {
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
};
declare const Button: {
    ({ children, disabled, className, onClick }: IReactProps & TProps): import("react/jsx-runtime").JSX.Element;
    Exit: import('react').MemoExoticComponent<({ className }: IReactProps & {
        className?: string | undefined;
    }) => import("react/jsx-runtime").JSX.Element>;
    Toggle: import('react').MemoExoticComponent<() => import("react/jsx-runtime").JSX.Element>;
    Screenshot: import('react').MemoExoticComponent<() => import("react/jsx-runtime").JSX.Element>;
    Badge: import('react').MemoExoticComponent<({ children, active }: {
        active: boolean;
        children: "alpha" | "base" | "bump" | "dispImgUrl" | "roughImgUrl" | "normalImgUrl" | "color";
    }) => import("react/jsx-runtime").JSX.Element>;
};
export default Button;
