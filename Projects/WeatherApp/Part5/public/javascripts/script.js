console.log("Hello World");

const cards = document.querySelectorAll(".city-card");
console.log(cards);
var map = L.map("map").setView(
  [cards[0].dataset.lat, cards[0].dataset.long],
  4
);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

var customIcon = L.icon({
  iconUrl:
    "https://leafletjs.com/SlavaUkraini/examples/custom-icons/leaf-green.png",
  shadowUrl:
    "https://leafletjs.com/SlavaUkraini/examples/custom-icons/leaf-shadow.png",

  iconSize: [38, 95],
  shadowSize: [50, 64],

  iconAnchor: [22, 94],
  shadowAnchor: [4, 62],

  popupAnchor: [-3, -76],
});

let markups = [];
cards.forEach((card) => {
  const markup = L.marker([card.dataset.lat, card.dataset.long], {
    icon: customIcon,
  })
    .addTo(map)
    .bindPopup(card.dataset.name)
    .openPopup();
  markups.push(markup);

  card.addEventListener("click", function (e) {
    map.setView([card.dataset.lat, card.dataset.long], 10, {
      animate: true,
      pan: {
        duration: 4,
      },
    });

    markup.openPopup();
  });
});
