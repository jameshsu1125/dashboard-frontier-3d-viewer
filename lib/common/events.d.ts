import { TUserProps } from '../settings/type';
import { default as ReactDOM } from 'react-dom/client';

type EventTypes = 'onMounted' | 'unmounted' | 'onAssetsLoaded';
export default class View3DEvents {
    onMounted: () => void;
    unmounted: () => void;
    onAssetsLoaded: () => void;
    onPropsChange: (props: TUserProps) => void;
    props: TUserProps;
    render: () => void;
    private app;
    renderIndex: number;
    constructor();
    addEventListeners(type: EventTypes, listener: () => any): void;
    setProps(props: TUserProps): void;
    setReactDom(app: ReactDOM.Root): void;
}
export {};
