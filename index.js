//Initialize the Platform object:
var platform = new H.service.Platform({
  apikey: "6TPRUpwYy7BTU-9qLgehzVD8kPiV_SvItG7GPf4LU10",
});

// Get the default map types from the Platform object:
var defaultLayers = platform.createDefaultLayers();

// Instantiate the map:
var map = new H.Map(
  defaultLayers.vector.normal.map,
  {
    zoom: 10,
    center: { lng: -97.76370970945004, lat: 30.279820357640524 },
  }
);
document.getElementById("mapContainer").innerHTML = map
// Create the default UI:
var ui = H.ui.UI.createDefault(map, defaultLayers);
