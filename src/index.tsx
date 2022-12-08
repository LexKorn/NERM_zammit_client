import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import AdminStore from './store/AdminStore';

import './style/style.sass';

type RootStateContextValue = {
  admin: AdminStore;
};

export const Context = createContext<RootStateContextValue>({} as RootStateContextValue);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Context.Provider value={{
    admin: new AdminStore()
  }}>
    <App />
  </Context.Provider>
);