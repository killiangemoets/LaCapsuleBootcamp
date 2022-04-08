var map = L.map("map").setView([20, 20], 4);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

let control = L.Routing.control({
  waypoints: [],
  routeWhileDragging: true,
}).addTo(map);

let startBtn, destBtn;

// const control = L.Control;

function createButton(label, container) {
  var btn = L.DomUtil.create("button", "", container);
  btn.setAttribute("type", "button");
  btn.innerHTML = label;
  return btn;
}

map.on("click", function (e) {
  var container = L.DomUtil.create("div"),
    startBtn = createButton("Start from this location", container),
    destBtn = createButton("Go to this location", container);

  L.popup().setContent(container).setLatLng(e.latlng).openOn(map);

  L.DomEvent.on(startBtn, "click", function () {
    control.spliceWaypoints(0, 1, e.latlng);
    map.closePopup();
  });

  L.DomEvent.on(destBtn, "click", function () {
    control.spliceWaypoints(control.getWaypoints().length - 1, 1, e.latlng);
    map.closePopup();
  });
});
