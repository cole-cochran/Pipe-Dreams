var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = 'sk.eyJ1IjoiY29sZS1jb2NocmFuIiwiYSI6ImNrdmwzeWgyNzV5eGQzMm1zbjllaXMwMXoifQ.0nC542MskwYDZ1fJCphsAw';
var map = new mapboxgl.Map({
  container: 'YOUR_CONTAINER_ELEMENT_ID',
  style: 'mapbox://styles/mapbox/streets-v11'
});
