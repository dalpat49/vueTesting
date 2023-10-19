import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import 'firebase/messaging'
import { initializeApp } from 'firebase/app';

const firebaseConfig = {

    authDomain: 'expense-tracker-66e12.firebaseapp.com',
    storageBucket: 'expense-tracker-66e12.appspot.com',
    appId: '1:391391350134:web:448cb2e903b491045ebe57',
    apiKey: 'AAAAWyC-DXY:APA91bEPcZ8RShC9zIAgmX911pTXbS4yulDiYY6_7K1QLod5QrvyTZ7K0ataMHKhy6fAPBG_GUHGQjksOtJJGMmMRpoQTsGI-pk5b5eW6FSFmoRC0N0TsCsCHiCDc3hreM-5xN6zclWB',
    projectId: 'expense-tracker-66e12 ',
    messagingSenderId: '391391350134',
}

const app = initializeApp(firebaseConfig)

createApp(App).provide('firebaseApp', app).mount('#app')
