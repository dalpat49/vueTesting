
<script setup>
 // Check if the Geolocation API is available in the user's browser
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

</script>


<template>
  <div>
	<h1>This is my  new app totally</h1>
  <input type="file" accept="jpg,png" />
  <button id="getLocation">Get Location</button>
	</div>
</template>


<style lang="scss">

</style>