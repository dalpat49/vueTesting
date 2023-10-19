
<script setup lang="js">
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


            // fingerprint testig start 
            const authenticateButton = document.getElementById("authenticateButton");


            authenticateButton.addEventListener("click", async () => {
                try {
                   // sample arguments for registration
                      const createCredentialDefaultArgs = {
                        publicKey: {
                          // Relying Party (a.k.a. - Service):
                          rp: {
                            name: "Acme",
                          },
                          // User:
                          user: {
                            id: new Uint8Array(16),
                            name: "carina.p.anand@example.com",
                            displayName: "Carina P. Anand",
                          },
                          pubKeyCredParams: [
                            {
                              type: "public-key",
                              alg: -7,
                            },
                          ],
                          attestation: "direct",
                          timeout: 60000,
                          challenge: new Uint8Array([
                            // must be a cryptographically random number sent from a server
                            0x8c, 0x0a, 0x26, 0xff, 0x22, 0x91, 0xc1, 0xe9, 0xb9, 0x4e, 0x2e, 0x17, 0x1a,
                            0x98, 0x6a, 0x73, 0x71, 0x9d, 0x43, 0x48, 0xd5, 0xa7, 0x6a, 0x15, 0x7e, 0x38,
                            0x94, 0x52, 0x77, 0x97, 0x0f, 0xef,
                          ]).buffer,
                        },
                      };

                      // sample arguments for login
                      const getCredentialDefaultArgs = {
                        publicKey: {
                          timeout: 60000,
                          // allowCredentials: [newCredential] // see below
                          challenge: new Uint8Array([
                            // must be a cryptographically random number sent from a server
                            0x79, 0x50, 0x68, 0x71, 0xda, 0xee, 0xee, 0xb9, 0x94, 0xc3, 0xc2, 0x15, 0x67,
                            0x65, 0x26, 0x22, 0xe3, 0xf3, 0xab, 0x3b, 0x78, 0x2e, 0xd5, 0x6f, 0x81, 0x26,
                            0xe2, 0xa6, 0x01, 0x7d, 0x74, 0x50,
                          ]).buffer,
                        },
                      };

                      // register / create a new credential
                      navigator.credentials
                        .create(createCredentialDefaultArgs)
                        .then((cred) => {
                          console.log("NEW CREDENTIAL", cred);
                          alert('Authentication sucessfully completed')
                          // normally the credential IDs available for an account would come from a server
                          // but we can just copy them from above…
                          const idList = [
                            {
                              id: cred.rawId,
                              transports: ["usb", "nfc", "ble"],
                              type: "public-key",
                            },
                          ];
                          getCredentialDefaultArgs.publicKey.allowCredentials = idList;
                          return navigator.credentials.get(getCredentialDefaultArgs);
                        })
                        .then((assertion) => {
                          console.log("ASSERTION", assertion);
                        })
                        .catch((err) => {
                          console.log("ERROR", err);
                  });
                } catch (error) {
                    console.log("Fingerprint authentication failed:", error);
                    alert("Fingerprint authentication failed. Please try again or use an alternative method.");
                }
            });
            // fingerprint testig end 

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

      <h1>Fingerprint Authentication</h1>
    <button id="authenticateButton">Authenticate with Fingerprint</button>

	</div>
</template>


<style lang="scss">

</style>