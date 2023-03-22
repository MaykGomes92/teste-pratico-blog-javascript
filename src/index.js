import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import { UsersGlobalContextProvider } from './Hooks/ContextUsers';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UsersGlobalContextProvider>
      <App />
    </UsersGlobalContextProvider>
  </React.StrictMode>
);
