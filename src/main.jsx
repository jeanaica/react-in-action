import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { analytics, firebaseApp, setupAppCheck } from '../firebase';
import App from './App.jsx';
import { FavoritesContextProvider } from './store/favorites-context';
import './index.css';

const app = firebaseApp();

setupAppCheck(app);
analytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FavoritesContextProvider>
      <BrowserRouter basename={import.meta.env.DEV ? '/' : '/react-in-action/'}>
        <App />
      </BrowserRouter>
    </FavoritesContextProvider>
  </React.StrictMode>
);
