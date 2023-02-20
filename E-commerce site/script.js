
var addToCartButtons = document.querySelectorAll('.product button');

addToCartButtons.forEach(function(button) {
  button.addEventListener('click', addToCartClicked);
});

function addToCartClicked(event) {
  var button = event.target;
  var product = button.parentElement;
  var productName = product.querySelector('h2').innerText;
  var productPrice = product.querySelector('p').innerText;
  alert("Added to cart: " + productName + " " + productPrice);
}
