mapboxgl.accessToken = 'pk.eyJ1IjoiY29sZS1jb2NocmFuIiwiYSI6ImNrdmlnZmtkMjBicGIyb3BrdWxsdzI0aW4ifQ.j8T0PTzOZhOeFHglpSASyw';
const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: [-97.76370970945004, 30.2672],
zoom: 13
});

// Add the control to the map.
map.addControl(
new MapboxGeocoder({
accessToken: mapboxgl.accessToken,
mapboxgl: mapboxgl,

}),
'top-right'
);
map.addControl(
new MapboxDirections({
accessToken: mapboxgl.accessToken,
}),
'top-left'
);
map.addControl(
new mapboxgl.FullscreenControl(),
'bottom-right'
);