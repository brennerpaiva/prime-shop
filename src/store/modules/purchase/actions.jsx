export function addProductCart(product) {
  return {
    type: 'ADD_CART',
    product,
  };
}

export function removeProductCart(id) {
  return {
    type: 'REMOVE_CART',
    id,
  };
}

export function updateAmountProductCart(id, amount, stock) {
  return {
    type: 'UPDATE_CART',
    id,
    amount,
    stock,
  };
}
