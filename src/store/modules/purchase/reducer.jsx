import { produce } from 'immer';

export default function purchase(state = [], action) {
  console.log(state);

  switch (action.type) {
    case 'ADD_CART':
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

    case 'UPDATE_CART':
      if (action.amount <= 0) {
        return state;
      } else if (action.amount > action.stock) {
        return alert('Verifique a disponibilidade do Estoque'), state;
      }
      return produce(state, (draft) => {
        const productIndex = draft.findIndex(
          (product) => product.id === action.id
        );

        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.amount);
        }
      });

    default:
      return state;
  }
}
