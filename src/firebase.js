// src/firebase.js
import firebase from 'firebase/app';
import 'firebase/messaging';

const firebaseConfig = {
  apiKey: 'AAAAWyC-DXY:APA91bEPcZ8RShC9zIAgmX911pTXbS4yulDiYY6_7K1QLod5QrvyTZ7K0ataMHKhy6fAPBG_GUHGQjksOtJJGMmMRpoQTsGI-pk5b5eW6FSFmoRC0N0TsCsCHiCDc3hreM-5xN6zclWB',
  projectId: 'expense-tracker-66e12 ',
  messagingSenderId: '391391350134',
};

firebase.initializeApp(firebaseConfig);

export const messaging = firebase.messaging();
