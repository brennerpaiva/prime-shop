import { produce } from 'immer';

export default function purchase(state = [], action) {
  console.log(state);

  switch (action.type) {
    case 'ADD_CART':
      return produce(state, (draft) => {
        const productIndex = draft.findIndex(
          (product) => product.id === action.product.id
        );

        if (productIndex >= 1) {
          draft[productIndex].amount += 1;
        } else {
          draft.push({
            ...action.product,
            amount: 1,
          });
        }
      });

    case 'REMOVE_CART':
      return produce(state, (draft) => {
        const productIndex = draft.findIndex(
          (product) => product.id === action.id
        );
        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });
    default:
      return state;
  }
}
