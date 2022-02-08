const sectionItems = document.querySelector('section .items');
// const cartItems = document.querySelector('.cart__items');
// const buttonClearCart = document.querySelector('.empty-cart');
// console.log(buttonClearCart);

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

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';
  
  section.id = sku; // acrescimo para comparar o event.target;
  
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  return section;
}

const creatObjProducts = async () => {
  const dataJson = await fetchProducts('computador');
  const listaDeProdutos = dataJson.results.map((resultDataJson) => resultDataJson);
  listaDeProdutos.map((cadaProduto) => {
    const objProduct = {
      sku: cadaProduto.id,
      name: cadaProduto.title,
      image: cadaProduto.thumbnail,
    };
    // console.log(createProductItemElement(objProduct));
    return sectionItems.appendChild(createProductItemElement(objProduct));
  });
};

// function getSkuFromProductItem(item) {
//   return item.querySelector('span.item__sku').innerText;
// }

function cartItemClickListener(event) {
  event.target.remove('li.cart__item');
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}
// console.log(createCartItemElement);

const addObjProductCart = async () => {
  const dataJson = await fetchProducts('computador');
  const dataJsonId = await fetchItem('MLB2111121759');
  const listaDeProdutos = await dataJson.results.map((resultDataJson) => resultDataJson);

  const objProductId = {
    sku: dataJsonId.id,
    name: dataJsonId.title,
    salePrice: dataJsonId.price,
  };
  console.log(listaDeProdutos);
  console.log(dataJsonId);
  console.log(createCartItemElement(objProductId));
  // return cartItems.appendChild(createCartItemElement(objProductId));

  const listaBtnAddToCart = document.getElementsByClassName('item__add')[37].parentElement;
  console.log(listaBtnAddToCart);
};

window.onload = () => {
  creatObjProducts();
  addObjProductCart();
};
