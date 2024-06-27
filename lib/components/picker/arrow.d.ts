import { TScrollable } from '.';

type TProps = {
    state: TScrollable;
    onLeft: () => void;
    onRight: () => void;
};
declare const Arrow: import('react').MemoExoticComponent<({ state, onLeft, onRight }: TProps) => import("react/jsx-runtime").JSX.Element>;
export default Arrow;
