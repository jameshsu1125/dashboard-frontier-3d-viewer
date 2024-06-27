
type TPicker = {
    color: string;
    setState: React.Dispatch<React.SetStateAction<{
        enabled: boolean;
        color: string;
    }>>;
};
declare const ColorPicker: import('react').MemoExoticComponent<({ color, setState }: TPicker) => import("react/jsx-runtime").JSX.Element>;
export default ColorPicker;
