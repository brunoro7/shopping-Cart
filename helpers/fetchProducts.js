function objProduct(dataJson) {
  return {
    sku: dataJson.results[0].id,
    name: dataJson.results[0].title,
    image: dataJson.results[0].thumbnail,
  };
}

const fetchProducts = async (searchValue) => {
  const apiResponse = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${searchValue}`);
  const dataJson = await apiResponse.json();
  const product = objProduct(dataJson);

  console.log(product);
  return dataJson;
};
fetchProducts('computador');
if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
