export function addProductWish(product) {
  return {
    type: 'ADD_WISH',
    product,
  };
}

export function removeProductWish(id) {
  return {
    type: 'REMOVE_WISH',
    id,
  };
}
