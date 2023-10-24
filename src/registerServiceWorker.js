/* eslint-disable no-console */

import { register } from 'register-service-worker'

  register(`${process.env.BASE_URL}service-worker.js`, {
    ready () {
      console.log(
        'App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB'
      )
    },
    registered () {
      console.log('new content.')
    },
    cached () {
      console.log('Content has been cached for offline use.')
    },
    updatefound () {
    // Optionally, you can add a button to trigger the refresh
    const refreshButton = document.createElement('button');
    refreshButton.textContent = 'Refresh';
    refreshButton.addEventListener('click', () => {
      // Reload the page to apply the update
      window.location.reload();
    });

    // Append the refresh button to the page
    document.body.appendChild(refreshButton);
          // alert('New content is downloading');

          console.log('New content is downloading.')
        },
    updated () {
      console.log('New content is available; please refresh.');
      //alert('New content is available; please refresh.');
      console.log('New content is available; please refresh.')
    },
    offline () {
        alert('No internet connection found. App is running in offline mode.');
       console.log('No internet connection found. App is running in offline mode.')
    },
    error (error) {
      console.error('Error during service worker registration:', error)
    }
  })

  
self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request)
      .then(function(response) {
        // Online: Respond with the actual network response
        return response;
      })
      .catch(function() {
        // Offline: Respond with a custom offline status
        return new Response(JSON.stringify({ status: 'offline' }), {
          headers: { 'Content-Type': 'application/json' },
        });
      })
  );
});
