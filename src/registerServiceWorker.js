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
      console.log('New content is downloading.')
    },
    updated () {
      alert('New content is available; please refresh.');
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
