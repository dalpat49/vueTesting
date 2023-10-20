
<script setup lang="js">

import NormalNotification from './NormalNotification.vue';
import Fingerprint from './FingerPrint.vue';

 // Check if the Geolocation API is available in the user's browser
 document.addEventListener("DOMContentLoaded", function() {
 if ("geolocation" in navigator) {
            // Get the button element
            var getLocationButton = document.getElementById("getLocation");

            // Get the demo element to display the location
            var locationDisplay = document.getElementById("demo");

            // Add a click event listener to the button
            getLocationButton.addEventListener("click", function() {
                // Request the user's current location
                navigator.geolocation.getCurrentPosition(function(position) {
                    // Get the latitude and longitude
                    var latitude = position.coords.latitude;
                    var longitude = position.coords.longitude;

                    // Display the location on the page
                    locationDisplay.innerHTML = "Latitude: " + latitude + "<br>Longitude: " + longitude;
                }, function(error) {
                    // Handle errors
                    locationDisplay.innerHTML = "Error getting location: " + error.message;
                });
            });
        } else {
            locationDisplay.innerHTML = "Geolocation is not available in your browser.";
        }
      });

       // Check if the Geolocation API is available in the user's browser
        // Predefined latitude and longitude of the geofence center
        var geofenceLat = 26.9525;  // Example latitude (New York City)
        var geofenceLng = 75.7105; // Example longitude (New York City)
        var geofenceRadius = 20;    // Geofence radius in meters

        
        document.addEventListener("DOMContentLoaded", function() {
          var resultDisplay = document.getElementById("result");
            var checkLocationButton = document.getElementById("checkLocation");

            checkLocationButton.addEventListener("click", function() {
                navigator.geolocation.getCurrentPosition(function(position) {
                    var userLat = position.coords.latitude;
                    var userLng = position.coords.longitude;

                    // Calculate the distance between the user's location and the geofence center
                    var distance = calculateDistance(userLat, userLng, geofenceLat, geofenceLng);

                    if (distance <= geofenceRadius) {
                        resultDisplay.innerHTML = "You are within the geofence!";
                    } else {
                        resultDisplay.innerHTML = "You are outside the geofence.";
                    }
                }, function(error) {
                    resultDisplay.innerHTML = "Error getting location: " + error.message;
                });
            });       

        });

        
        // Function to calculate the distance between two sets of coordinates using the Haversine formula
        function calculateDistance(lat1, lon1, lat2, lon2) {
            var R = 6371000;  // Radius of the Earth in meters
            var φ1 = lat1 * (Math.PI / 180);
            var φ2 = lat2 * (Math.PI / 180);
            var Δφ = (lat2 - lat1) * (Math.PI / 180);
            var Δλ = (lon2 - lon1) * (Math.PI / 180);

            var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
                    Math.cos(φ1) * Math.cos(φ2) *
                    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

            var distance = R * c;
            return distance;
        }


</script>


<template>
  <div>
    <h1>This is my  new app totally</h1>
    <input type="file" accept="jpg,png" />
    <button id="getLocation">Get Location</button>
    <p id="demo"></p>

    <button id="checkLocation">Check Location</button>
    <p id="result"></p>

    <Fingerprint></Fingerprint>
    
  <NormalNotification></NormalNotification> 
	</div>
</template>


<style lang="scss">

</style>