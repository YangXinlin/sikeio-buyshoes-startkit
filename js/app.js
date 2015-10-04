window.onload = function() {
  makeCartScrollNicely();
}

function makeCartScrollNicely() {
  var cart = document.querySelector('.cart');
  Ps.initialize(cart);
}
