// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  let price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('.quantity input').value;
  let subtotal = price * quantity;
  product.querySelector('.subtotal span').innerHTML = subtotal;
  return subtotal;
}

function calculateAll() {
  let products = document.querySelectorAll('.product');
  let total = 0;
  products.forEach((product) => {
    total += updateSubtotal(product);
  });
  document.querySelector('#total-value span').innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  target.parentNode.parentNode.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const newProduct = document.querySelector('.create-product');
  const newProductName = newProduct.querySelectorAll('input')[0].value;
  const newProductPrice = newProduct.querySelectorAll('input')[1].value;

  if (!newProductName) return alert('Enter a valid product name');

  const newProductHTML = 
  `<tr class="product">
    <td class="name">
      <span>${newProductName}</span></td>
  <td class="price">$<span>${newProductPrice}</span></td>
  <td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action"><button class="btn btn-remove">Remove</button></td>
  </tr>`;

  const addNewRow = document.querySelector('#cart tbody');
  addNewRow.innerHTML += newProductHTML;

  const removeProductBtn = document.querySelectorAll('.btn-remove')
  removeProductBtn.forEach((element)=>{element.onclick = removeProduct})

  newProduct.querySelectorAll('input')[0].value =''
  newProduct.querySelectorAll('input')[1].value =0

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  // calculatePricesBtn.onclick = calculateAll;

  const removeProductBtn = document.querySelectorAll('.btn-remove');
  removeProductBtn.forEach((element) => {
    element.onclick = removeProduct;
  });

  const createNewProductBtn = document.getElementById('create');
  createNewProductBtn.addEventListener('click', createProduct);
});
