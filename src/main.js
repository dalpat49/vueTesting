import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import 'firebase/messaging'
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCIty6mcdUJPR_VOSP5vCjWp5ZoDQbEqXw",
    authDomain: "expense-tracker-66e12.firebaseapp.com",
    projectId: "expense-tracker-66e12",
    storageBucket: "expense-tracker-66e12.appspot.com",
    messagingSenderId: "391391350134",
    appId: "1:391391350134:web:448cb2e903b491045ebe57"
}

const app = initializeApp(firebaseConfig);



let auth;
const initFirebase = async () => {
  auth = await getAuth(app);
};


initFirebase().then(() => {
    try{
        // Now you can use the auth object and set up the listener
        onAuthStateChanged(auth, (user) => {
            console.log(auth);
            if (user) {
                // User is signed in.
            alert("User is signed in")

            } else {
                // User is signed out.
            alert("User is signed out")
        }
        });
    } catch (error) {
        console.error('Auth state change error:', error);
    }
  });



createApp(App).provide('firebaseApp', app).mount('#app')
