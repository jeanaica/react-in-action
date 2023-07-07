import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { analytics, firebaseApp, setupAppCheck } from '../firebase';
import App from './App.jsx';
import './index.css';

const app = firebaseApp();

setupAppCheck(app);
analytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.DEV ? '/' : '/react-in-action/'}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
