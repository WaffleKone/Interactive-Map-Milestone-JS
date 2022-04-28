let businesses = []
let userLat
let userLong
let businessType 
let map
let business1;
let business2;
let business3;
let business4;
let business5;

// Get user's location
async function getCoords() {
  pos = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
  userLat = pos.coords.latitude
  userLong = pos.coords.longitude
  console.log(pos.coords.latitude, pos.coords.longitude);
  return [pos.coords.latitude, pos.coords.longitude];
}
// Build map with that location data
function makeMap(coordinates) {
  const coords = coordinates;
  map = L.map('map', {
    center: [coords[0], coords[1]],
    zoom: 13,
  });
  let marker = L.marker([coords[0], coords[1]]).addTo(map);
  marker.bindPopup('Your location').openPopup();
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: '13',
  }).addTo(map);
}

// Ask user what type of business they would like to find
document.getElementById('submit').addEventListener('click', async (event) => {
  event.preventDefault();
  businessType = document.getElementById('business').value;
  clearMarkers()
  findBusinesses()
  console.log(businessType);
});
// Take that data and find nearby businesses matching that description
const options = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    Authorization: 'fsq3ATzZbmcGhdeFafr73wZcnJ+LlN6bK+4dh19a7ClS4u8='
  }
};
async function findBusinesses() {
  let response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.foursquare.com/v3/places/search?query=${businessType}&ll=${userLat}%2C${userLong}&radius=50000&limit=5`, options)
  let jsonData = await response.json()
  console.log(jsonData)
  displayMarkers(jsonData)
}
// Add nearby business locations to the map with markers
function displayMarkers(data) {
    business1 = new L.marker([data.results[0].geocodes.main.latitude, data.results[0].geocodes.main.longitude]).addTo(map);
    business2 = new L.marker([data.results[1].geocodes.main.latitude, data.results[1].geocodes.main.longitude]).addTo(map);
    business3 = new L.marker([data.results[2].geocodes.main.latitude, data.results[2].geocodes.main.longitude]).addTo(map);
    business4 = new L.marker([data.results[3].geocodes.main.latitude, data.results[3].geocodes.main.longitude]).addTo(map);
    business5 = new L.marker([data.results[4].geocodes.main.latitude, data.results[4].geocodes.main.longitude]).addTo(map);
}
function clearMarkers() {
// logic to clear the markers goes here
}
// Do this when the window loads:
window.onload = async () => {
  const coords = await getCoords();
  makeMap(coords);
};
// API Key: fsq32RbyOSvMejHNLAcfxK8ev0jp10iq4mtHKPzVXr+Rnq4=
