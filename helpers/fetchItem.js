const fetchItem = async (itemID) => {
  try {
    const urlIdMontada = `https://api.mercadolibre.com/items/${itemID}`;
    if (!itemID || urlIdMontada.endsWith('undefined')) {
      throw new Error('You must provide an url');
    }
    const apiResponseId = await fetch(urlIdMontada);
    const dataJsonId = await apiResponseId.json();

    return dataJsonId;
  } catch (error) {
    return error;
  }
};
// fetchItem('MLB1615760527');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
