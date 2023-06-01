export default function purchase(state = [], action) {
  // console.log(state);

  switch (action.type) {
    case 'ADD_CART':
      return [...state, action.product];
    default:
      return state;
  }
}
