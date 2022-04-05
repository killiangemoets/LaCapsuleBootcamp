const shippingChoices = document.querySelectorAll(".shippingChoices");

const totalCost = document.querySelector("#totalCost");

const basketCost = document.querySelector("#basketCost");

const checkoutInput = document.querySelector("#checkoutInput");

let total;
for (var i = 0; i < shippingChoices.length; i++) {
  shippingChoices[i].addEventListener("change", function () {
    total = +basketCost.textContent + +this.dataset.cost;
    totalCost.textContent = total;
    checkoutInput.value = +this.dataset.cost;
  });
}
