<!-- eslint-disable no-undef -->
<script setup>
import { getMessaging, requestPermission } from 'firebase/messaging';
import { onMessage } from 'firebase/messaging';
tor.serviceWorker.register("service-worker.js");

function showNotification() {
  Notification.requestPermission().then((result) => {
    if (result === "granted") {
      navigator.serviceWorker.ready.then((registration) => {
        registration.showNotification("Vibration Sample", {
          body: "Buzz! Buzz!",
          icon: "../images/touch/chrome-touch-icon-192x192.png",
          vibrate: [200, 100, 200, 100, 200, 100, 200],
          tag: "vibration-sample",
        });
      });
    }
  });
}



const messaging = getMessaging(app);

// Request notification permission from the user
requestPermission(messaging)
  .then(() => {
    console.log('Notification permission granted.');
  })
  .catch((err) => {
    console.error('Notification permission denied:', err);
  });

 // Listen for incoming messages
onMessage(messaging, (payload) => {
  console.log('Notification received:', payload);

  // Handle the notification here, e.g., display it to the user
  // You can use a Vuex store or emit an event to pass the data to your components
});
</script>

<template>

<button @click="showNotification">Enable Push Notifications</button>
</template>
