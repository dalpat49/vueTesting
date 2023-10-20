<!-- eslint-disable no-mixed-spaces-and-tabs -->
<script setup>
import MeasurementsTable from './components/MeasurementsTable.vue'
import PWAPrompt from './components/PWAPrompt.vue'
import { getMessaging, getToken , onMessage } from "firebase/messaging";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAPptOBI52Kw39NggC7szv-dDFcQy8-UhM",
  authDomain: "testingpwa-d131d.firebaseapp.com",
  projectId: "testingpwa-d131d",
  storageBucket: "testingpwa-d131d.appspot.com",
  messagingSenderId: "136578668350",
  appId: "1:136578668350:web:d3cf098088ac10571a3e6f",
  measurementId: "G-E0LXV17Z05"
};

// Initialize Firebase
 initializeApp(firebaseConfig);


// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
const messaging = getMessaging();
onMessage(messaging, (payload) => {
    console.log('Message received. ', payload);
    // ...
  });

getToken(messaging, { vapidKey: 'BPBd7Kmno_7kOJRGDH82WYdIAa5fjXYd4lWtOaxXnZ2PugpNYdtQuJk-J_ePuf_iK01Kp_pDuCOxpKsqNPUpDoI' }).then((currentToken) => {
  if (currentToken) {
    // Send the token to your server and update the UI if necessary
    // ...
	setTimeout(() => {
		document.getElementById('tokenId').innerHTML = currentToken;
		
	}, 1000);

    console.log('token: ' + currentToken)
    // alert('token: ' + currentToken)
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // ...
});


</script>

<template>
  <div id="app">
	<PWAPrompt />
    <MeasurementsTable />
	<p id="tokenId"></p>
  </div>
</template>



<style lang="scss">
:root {
	--background: #e0fbfc;
	--bright: #ee6c4d;
	--dark: #3d5a80;
	--darker: #293241;
	--accent: #98c1d9;
}

*,
*:before,
*:after {
	box-sizing: border-box;
	font-family: inherit;
	color: inherit;
	max-width: 100%;
}

*:focus {
	outline: 2px solid var(--bright);
	outline-offset: 2px;
}

*::selection {
	background: var(--accent);
	color: var(--dark);
}

html {
	font-size: 1.125em;
}

body {
	margin: 0;
	font-family: "Barlow Condensed", sans-serif;
	background: var(--background);
	color: var(--dark);
	min-height: 100vh;
	display: grid;
	place-content: center;
	grid-template-columns: 100%;
	min-height: 100vh;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

#app {
	width: 100%;
	min-height: 100vh;
}

.container {
	margin: 0 auto;
	width: 100%;
	max-width: 24rem;
}

footer {
	padding: 0.75rem 1.5rem;
	background: var(--dark);
	color: var(--background);
	position: sticky;
	top: 100vh;
	font-size: 0.75rem;

	*:focus {
		outline-color: var(--accent);
	}
}
</style>
