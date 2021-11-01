//event handlers for homepage
const searchBtn = document.getElementById()
const histBtn = document.getElementById()
const searchTerm = document.getElementById().value.trim();
const messageText = document.getElementById().value.trim();
let longitude;
let latitude;

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
};
  
function showPosition(position) {
    console.log("Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude)
    longitude = position.coords.longitude;
    latitude = position.coords.latitude;
};

function addMessage(){
    if (messageText){
        const response = await fetch('/api/messages', {
            method: 'POST',
            body: JSON.stringify({ messageText, }),
            headers: { 'Content-Type': 'application/json' },
          });
      
          if (response.ok) {
            document.location.replace('/');
          } else {
            alert('Failed to sign up.');
          }
    }
}

//replace with API function
searchBtn.addEventListener('submit', function(event) {
    event.preventDefault();
    if (searchTerm) {
        const response = await fetch('/api/users', {
          method: 'POST',
          body: JSON.stringify({ latitude, longitude }),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
          document.location.replace('/');
        } else {
          alert('Failed to sign up.');
        }
      }

});
