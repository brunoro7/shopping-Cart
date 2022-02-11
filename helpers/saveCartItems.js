const saveCartItems = (listaCartAtual) => {
  // const listaCartAtual = document.getElementsByClassName('cart__items');
  localStorage.setItem('cartItems', listaCartAtual);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
