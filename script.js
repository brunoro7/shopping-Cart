const sectionItems = document.querySelector('section .items');
const cartItems = document.querySelector('ol.cart__items');
const buttonClearCart = document.querySelector('.empty-cart');

function chamadaSaveCart() {
  const listaProdutosCartAtual = document.getElementsByClassName('cart__items')[0].innerHTML;
  
  saveCartItems(listaProdutosCartAtual);
}

function clearCart() {
  cartItems.innerHTML = '';
  chamadaSaveCart();
}
buttonClearCart.addEventListener('click', clearCart);

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

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function cartItemClickListener(event) {
  event.target.remove('li.cart__item');
  chamadaSaveCart();
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

/** Meu problema no momento, está no clique do botao, ele não salva desde o primeiro click, pois, esta fazendo o append primeiro, preciso encadear o meu return do addObjProductCar com o chamadaSaveCart */

const addObjProductCart = async (event) => {
  const itemID = event.target.parentElement.id;

  const dataJsonId = await fetchItem(`${itemID}`);
  const objProductId = {
    sku: dataJsonId.id,
    name: dataJsonId.title,
    salePrice: dataJsonId.price,
  };
  // console.log(dataJsonId);
  // console.log(createCartItemElement(objProductId));

  return cartItems.appendChild(createCartItemElement(objProductId));
};

function recebeCadaEventAdd() {
  const listaBtnAddCart = document.getElementsByClassName('item__add');
  for (let i = 0; i < listaBtnAddCart.length; i += 1) {
    listaBtnAddCart[i].addEventListener('click', addObjProductCart);
  }
}

function addLoadingText() {
  const loadingText = document.createElement('p');
  loadingText.className = 'loading';
  loadingText.innerText = 'carregando...';
  sectionItems.appendChild(loadingText);
}

function removeLoadingText() {
  const loadingText = document.querySelector('p.loading');
  sectionItems.removeChild(loadingText);
}

const creatObjProducts = async () => {
  addLoadingText();
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
  removeLoadingText();
  recebeCadaEventAdd();
};

function loadCartItems() {
  const chamadaDoGetSaved = getSavedCartItems();
  const listaCartAtual = document.getElementsByClassName('cart__items')[0];
  // listaCartAtual = chamadaDoGetSaved;
  Array.from(listaCartAtual.children).forEach((productCart) => {
    productCart.addEventListener('click', cartItemClickListener);
  });
  console.log(chamadaDoGetSaved);
  console.log(listaCartAtual);
}

window.onload = () => {
  creatObjProducts(); 
  loadCartItems();
};
