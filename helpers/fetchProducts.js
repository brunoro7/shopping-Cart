const fetchProducts = async (searchValue) => {
  try {
  const urlMontada = `https://api.mercadolibre.com/sites/MLB/search?q=${searchValue}`;
    const apiResponse = await fetch(urlMontada);
    const dataJson = await apiResponse.json();
      // console.log(dataJson);
    return dataJson;
  } catch (error) {
    return error;
  }
};
if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
