const fetchProducts = () => {
  console.log('oi');
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
fetchProducts();