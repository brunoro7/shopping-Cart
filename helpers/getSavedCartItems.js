const getSavedCartItems = () => {
  const cartSavedItems = localStorage.getItem('cartItems');
  // console.log(cartSavedItems);
  return cartSavedItems;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
