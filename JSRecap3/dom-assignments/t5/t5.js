// Initialize the map
const map = L.map('map').setView([60.192059, 24.945831], 10);

// Add the OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add markers for each restaurant
for (const restaurant of restaurants) {
  const { coordinates } = restaurant.location;
  const marker = L.marker([coordinates[1], coordinates[0]]).addTo(map);

  // Add a popup to the marker
  marker.bindPopup(`
    <h3>${restaurant.name}</h3>
    <p>${restaurant.address}</p>
  `);
}