//=>pizza input
var pizzaSize = document.getElementById("pizzaSize");
var pizzaCrust = document.getElementById("pizzaCrust");
var pizzaTopping = document.getElementById("pizzaTopping");
var pizzaNumber = document.getElementById("pizzaNumber");
var pizzaLocation = document.getElementById("pizzaLocation");

var priceForm = document.getElementById("priceForm");

//=>pizza output
var pizzaOutput = document.getElementById("pizzaOutput");
var crustOutput = document.getElementById("crustOutput");
var toppingOutput = document.getElementById("toppingOutput");
var quantityOutput = document.getElementById("quantityOutput");
var deliveryOutput = document.getElementById("deliveryOutput");
var totals = document.getElementById("totals");

//=>add functionality
priceForm.addEventListener("submit", priceCalc);

function priceCalc(e) {
  e.preventDefault();

  if (
    pizzaSize === "" ||
    pizzaCrust === "" ||
    pizzaTopping === "" ||
    pizzaNumber === ""
  ) {
    alert("Fill in the required inputs. (starred*)");
  } else {
    pizzaOutput.innerHTML = `${pizzaSize.value}`;
    crustOutput.innerHTML = `${pizzaCrust.value}`;
    toppingOutput.innerHTML = `${pizzaTopping.value}`;
    quantityOutput.innerHTML = `${pizzaNumber.value}`;
    deliveryOutput.innerHTML = `${pizzaLocation.value}`;
    totals.innerHTML =
      (+pizzaSize.value + +pizzaCrust.value + +pizzaTopping.value) *
        pizzaNumber.value +
      +pizzaLocation.value;
  }
}
