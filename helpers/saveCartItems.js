const saveCartItems = () => {
  const listaCartAtual = document.querySelector('ol.cart__items');
  localStorage.setItem('cartItems', listaCartAtual);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
