// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';

import { getFirebaseConfig } from './firebase-config.js';

// Initialize Firebase
const firebaseApp = () => initializeApp(getFirebaseConfig());

const analytics = (app) => getAnalytics(app);

const setupAppCheck = (app) => {
  let appCheckToken = import.meta.env.VITE_FIREBASE_DEBUG_TOKEN;
  if (import.meta.env.MODE === 'development') {
    self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
  } else {
    appCheckToken = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
  }
  // Initialize with ReCaptchaV3Provider for production
  initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider(`${appCheckToken}`),
    isTokenAutoRefreshEnabled: true, // Set to true to allow auto-refresh.
  });
};

export { firebaseApp, analytics, setupAppCheck };
