const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoiZmxvcmlubm4iLCJhIjoiY2xmcHZkNTQ2MGN6MzNycGYzb3NndzN1bSJ9.GeeQ3N9dmiizfvpdeZvBTw"

// This line of code gets the user's location
// If location was found, call the succesLocation function
// Else call the errorLocation function
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true
})

function setupMap(centerPosition) {
  const map = new mapboxgl.Map({
    accessToken: MAPBOX_ACCESS_TOKEN,
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: centerPosition,
    zoom: 15
  })

  // Navigation contol
  const navigationControl = new mapboxgl.NavigationControl()
  map.addControl(navigationControl, "top-right")
  // Direction control
  const directionControl = new MapboxDirections({
    accessToken: MAPBOX_ACCESS_TOKEN
  })
  map.addControl(directionControl, "top-left")
}

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude])
}

// If location wasn't found, this coords are by default to Oradea.
function errorLocation() {
  setupMap([21.910568, 47.029269])
}
