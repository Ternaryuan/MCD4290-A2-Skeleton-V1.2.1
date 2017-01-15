// Shared code needed by the code of all three pages.

// Prefix to use for Local Storage.  You may change this.
var APP_PREFIX = "monash.eng1003.runChallengeApp";

// Array of saved Run objects.
var savedRuns = [];


// This function displays the given message String as a "toast" message at
// the bottom of the screen.  It will be displayed for 2 second, or if the
// number of milliseconds given by the timeout argument if specified.
function displayMessage(message, timeout)
{
    if (timeout === undefined)
    {
        // Timeout argument not specifed, use default.
        timeout = 2000;
    } 

    if (typeof(message) == 'number')
    {
        // If argument is a number, convert to a string.
        message = message.toString();
    }

    if (typeof(message) != 'string')
    {
        console.log("displayMessage: Argument is not a string.");
        return;
    }

    if (message.length == 0)
    {
        console.log("displayMessage: Given an empty string.");
        return;
    }

    var snackbarContainer = document.getElementById('toast');
    var data = {
        message: message,
        timeout: timeout
    };
    if (snackbarContainer && snackbarContainer.hasOwnProperty("MaterialSnackbar"))
    {
        snackbarContainer.MaterialSnackbar.showSnackbar(data);
    }
}
function run_class(initial_location,destination,start_timeReference,end_timeReference,timeReference) {
    this.initial_location=initial_location
    this.destination=destination
    this.start_timeReference=start_timeReference
    this.end_timeReference=end_timeReference
    this.timeReference=timeReference
}

function initial_map() 
{
    var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 15
    });
    
    var infoWindow = new google.maps.InfoWindow({map: map});

    // Try HTML5 geolocation.
    if (navigator.geolocation) 
    {
        navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
            };

        infoWindow.setPosition(pos);
        infoWindow.setContent('Location found.');
        map.setCenter(pos);
        }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
        }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) 
{
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ? 
                          'Error: The Geolocation service failed.' : 
                          'Error: Your browser doesn\'t support geolocation.');
}
var initial_location=new google.maps.LatLng(pos.lat,pos.lng)
document.getElementById("initial_location").innerHTML="initial location  "+"lat: "+pos.lat+" "+"lng: "+pos.lng

function positioning() {
    navigator.geolocation.watchPosition(function(position) {
        var current_location = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
              accuracy: position.coords.accuracy
            };

            infoWindow.setPosition(current_location);
            infoWindow.setContent('^_^');
            map.setCenter(current_location);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          })
    latest_location=new google.maps.LatLng(current_location.lat,current_location.lng)
}

var new_run=new run_class(initial_location,destination,start_timeReference,end_timeReference,timeReference)
function save() {
    localStorage.setItem(last_run,JSON.stringify(new_run))
}

