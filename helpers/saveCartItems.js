const saveCartItems = (listaCartAtual) => {
  localStorage.setItem('cartItems', listaCartAtual);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
