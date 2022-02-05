function objProduct(dataJson) {
  return {
    sku: dataJson.results[0].id,
    name: dataJson.results[0].title,
    image: dataJson.results[0].thumbnail,
  };
}

const fetchProducts = async (searchValue) => {
  const urlMontada = `https://api.mercadolibre.com/sites/MLB/search?q=${searchValue}`;
  try {
    if (!searchValue || searchValue.endsWith('undefined')) {
      throw new Error('You must provide an url');
    }
  } catch (error) {
    throw error.message;
  }

  const apiResponse = await fetch(urlMontada);

  const dataJson = await apiResponse.json();
  const product = objProduct(dataJson);

  return dataJson;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
