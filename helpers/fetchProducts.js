const fetchProducts = async (searchValue) => {
  try {
    const urlMontada = `https://api.mercadolibre.com/sites/MLB/search?q=${searchValue}`;
    const apiResponse = await fetch(urlMontada);
    const dataJson = await apiResponse.json();
      if (!searchValue || urlMontada.endsWith('undefined')) {
        throw new Error('You must provide an url');
      }
      return dataJson;
    } catch (error) {
      throw error.message;
    }
};
if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
