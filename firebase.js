// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';

import { getFirebaseConfig } from './firebase-config.js';

// Initialize Firebase
const firebaseApp = () => initializeApp(getFirebaseConfig());

const analytics = (app) => getAnalytics(app);

const setupAppCheck = (app) => {
  // Initialize with ReCaptchaV3Provider for production
  initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider(import.meta.env.VITE_RECAPTCHA_SITE_KEY),
    isTokenAutoRefreshEnabled: true, // Set to true to allow auto-refresh.
  });
};

export { firebaseApp, analytics, setupAppCheck };
