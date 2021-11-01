//event handlers for homepage
const searchBtn = document.getElementById()
const histBtn = document.getElementById()

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
};
  
function showPosition(position) {
    console.log("Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude);
};


//replace with API function
searchBtn.addEventListener('click', function(event) {
    event.preventDefault();


})