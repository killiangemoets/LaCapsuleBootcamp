const countSection = $("#header").find("span");
const currenciesSection = $("#main_container");

const newCurrencies = [
  {
    name: "Ripple",
    logo: "images/ripple.png",
    value: 0.2,
  },
  {
    name: "Litecoin",
    logo: "images/litecoin.png",
    value: 39.9,
  },
];

const countCurrencies = function () {
  countSection.text($(".crypto_container").length);
};

const addNewCurrency = function (currency) {
  markup = `
        <div class="crypto_container">
            <img src="${currency.logo}" alt="${currency.name}" class="picto-crypto" />
            <h6>${currency.name}</h6>
            <div class="divider"></div>
            <p>${currency.value}€</p>
        </div>
    `;
  currenciesSection.append(markup);
  countCurrencies();
};

countCurrencies();

$("body").click(function () {
  newCurrencies.forEach(addNewCurrency);
});
