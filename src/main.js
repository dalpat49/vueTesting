import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import 'firebase/messaging'
import { initializeApp } from 'firebase/app';


const firebaseConfig = {
    apiKey: ' AIzaSyCIty6mcdUJPR_VOSP5vCjWp5ZoDQbEqXw ',
    authDomain: 'expense-tracker-66e12.firebaseapp.com',
    storageBucket: 'expense-tracker-66e12.appspot.com',
    projectId: 'expense-tracker-66e12 ',
    messagingSenderId: '391391350134',
    appId: '1:391391350134:web:448cb2e903b491045ebe57',
}

const app = initializeApp(firebaseConfig);

import { getAuth, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth(app);
// Example: Listen for authentication state changes
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in.
    alert("User is signed in")
  } else {
    // User is signed out.
    alert("User is signed out")

  }
});

createApp(App).provide('firebaseApp', app).mount('#app')
