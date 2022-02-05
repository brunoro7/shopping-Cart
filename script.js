function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

// function objProduct(dataJson) {
//   return {
//     sku: dataJson.results[0].id,
//     name: dataJson.results[0].title,
//     image: dataJson.results[0].thumbnail,
//   };
// }
// const product = objProduct(dataJson);

// fetchProducts('computador');

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  return section;
}
console.log(createProductItemElement({ sku, nome, image }));

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}
console.log(getSkuFromProductItem(item));

function cartItemClickListener(event) {
  event.target.remove();
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}
console.log(createCartItemElement({ sku, nome, salePrice }));
window.onload = () => { };
