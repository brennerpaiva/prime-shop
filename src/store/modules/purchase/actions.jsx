export function addProduct(product) {
  return {
    type: 'ADD_CART',
    product,
  };
}

export function removeProduct(id) {
  return {
    type: 'REMOVE_CART',
    id,
  };
}

export function updateAmountProduct(id, amount, stock) {
  return {
    type: 'UPDATE_CART',
    id,
    amount,
    stock,
  };
}
