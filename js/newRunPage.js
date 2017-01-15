// Code for the Measure Run page.
function random_destination() {
    if (current_location.accuarcy>20) {
        document.getElementById("get_destination")
        element.disabled=true
    }
    else {
        document.getElementById("get_destination")
        element.disabled=false
    var lat_symbol=Math.random()
    if (lat_symbol>0.5) {
        lat_destination=location.lat+Math.random()*0.001
    }
    else if (lat_symbol<0.5) {
        lat_destination=location.lat-Math.random()*0.001
    }
    var lng_symbol=Math.random()
    if (lng_symbol>0.5) {
        lng_destination=location.lng+Math.random()*0.001
    }
    else if (lng_symbol<0.5) {
        lng_destination=location.lng-Math.random()*0.001
    }
    }
    destination=new google.maps.LatLng(lat_destination,lng_destination)
}
 while (google.maps.geometry.spherical.computeDistanceBetween(pos,destination)<40) {
     random_destination()
 }

document.getElementById("start")
element.disabled=false
document.getElementById("distance").innerHTML="distance:"+google.maps.geometry.spherical.computeDistanceBetween(latest_location,destination)
function start() {
    start_timeReference=document.getElementById("start_time").innerHTML
    start_timeReference=new Date()
    start_location=latest_location
}

function end() {
    if (google.maps.geometry.spherical.computeDistanceBetween(latest_location,destination)<10) {
        end_timeReference=document.getElementById("end_time").innerHTML
        end_timeReference=new Date()
        end_location=latest_location
    }
    document.getElementById("save")
    element.disabled=false
}
timeReference=document.getElementById("time").innerHTML
timeReference=end_timeReference-start_timeReference
document.getElementById("walk_distance").innerHTML=google.maps.geometry.spherical.computeDistanceBetween(start_location,end_location)
