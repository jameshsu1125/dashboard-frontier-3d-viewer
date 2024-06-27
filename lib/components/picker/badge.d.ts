import { TModelProps } from '../../settings/type';

type TProps = {
    data: TModelProps;
    selected: boolean;
    onClick: () => void;
};
declare const Badge: import('react').MemoExoticComponent<({ data, selected, onClick }: TProps) => import("react/jsx-runtime").JSX.Element>;
export default Badge;
