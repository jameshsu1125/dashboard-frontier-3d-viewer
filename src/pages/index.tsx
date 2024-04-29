import Alert from '@/components/alert';
import LoadingProcess from '@/components/loadingProcess';
import Modal from '@/components/modal/index.tsx';
import { Context, InitialState, Reducer } from '@/settings/constant';
import '@/settings/global.less';
import { ActionType, TContext } from '@/settings/type';
import Fetcher, { contentType, formatType } from 'lesca-fetcher';
import Storage from 'lesca-local-storage';
import { Suspense, lazy, memo, useCallback, useMemo, useReducer } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SETTING } from '../../setting';
import Album from './album/index.tsx';
import Edit from './editor';
import Home from './home';
import Login from './login';

Fetcher.install({
  hostUrl: import.meta.env.VITE_API_PATH || './api',
  contentType: contentType.JSON,
  formatType: formatType.JSON,
});

if (import.meta.env.VITE_MOCKING === 'true') {
  import('@/mocks/browser').then((e) => {
    e.worker.start({ serviceWorker: { url: './mockServiceWorker.js' } });
  });
}

const RoutePages = memo(() => {
  const ComponentLoader = useCallback(() => {
    const Element = lazy(() => import('./collection/index.tsx'));
    if (!Element) return null;
    return (
      <Suspense fallback=''>
        <Element />
      </Suspense>
    );
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/album' element={<Album />} />
      <Route path='/editor' element={<Edit />} />
      <Route path='*' element={ComponentLoader()} />
    </Routes>
  );
});

const App = () => {
  const [state, setState] = useReducer(Reducer, InitialState);
  const value: TContext = useMemo(() => [state, setState], [state]);

  const { data, timestamp } = Storage.get(SETTING.dashboard.session.name);
  const status = useMemo(() => {
    if (!data) return false;
    else if (timestamp > SETTING.dashboard.session.time) return false;
    return true;
  }, [data, timestamp]);

  return (
    <Context.Provider {...{ value }}>
      <div className='App'>
        <BrowserRouter>{status ? <RoutePages /> : <Login />}</BrowserRouter>
      </div>
      {state[ActionType.LoadingProcess]?.enabled && <LoadingProcess />}
      {state[ActionType.Alert]?.enabled && <Alert />}
      {state[ActionType.modal]?.enabled && <Modal />}
    </Context.Provider>
  );
};

if (document.getElementById('app1')?.children.length === 0) {
  ReactDOM.createRoot(document.getElementById('app1')!).render(<App />);
}
