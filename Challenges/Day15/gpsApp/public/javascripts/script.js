var map = L.map("map").setView([20, 20], 4);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.Routing.control({
  waypoints: [L.latLng(57.74, 11.94), L.latLng(57.6792, 11.949)],
}).addTo(map);

map.on("click", function () {
  console.log(this);
  const { lat, lng } = this.latlng;
});
