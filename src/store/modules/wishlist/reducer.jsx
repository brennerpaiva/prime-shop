import { produce } from 'immer';

export default function wishlist(state = [], action) {
  console.log(state);

  switch (action.type) {
    case 'ADD_WISH':
      return produce(state, (draft) => {
        const productIndex = draft.findIndex(
          (product) => product.id === action.product.id
        );

        if (productIndex >= 0) {
          return state;
        } else {
          draft.push({
            ...action.product,
            amount: 1,
          });
          console.log('passou aqui');
        }
      });

    case 'REMOVE_WISH':
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
