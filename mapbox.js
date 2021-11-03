var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = 'pk.eyJ1IjoiY29sZS1jb2NocmFuIiwiYSI6ImNrdmlnZmtkMjBicGIyb3BrdWxsdzI0aW4ifQ.j8T0PTzOZhOeFHglpSASyw';
var map = new mapboxgl.Map({
  container: 'YOUR_CONTAINER_ELEMENT_ID',
  style: 'mapbox://styles/mapbox/streets-v11'
});
