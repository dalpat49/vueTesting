import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import 'firebase/messaging'
// import { initializeApp } from 'firebase/app';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';


createApp(App).mount('#app')
