import './cart.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeProductCart,
  updateAmountProductCart,
} from '../../store/modules/purchase/actions';
import { Link } from 'react-router-dom';

export default function Cart() {
  const purchases = useSelector((state) => state.purchase);
  const dispatch = useDispatch();

  function removeFromCart(id) {
    dispatch(removeProductCart(id));
  }

  function decrementAmount(product) {
    dispatch(updateAmountProductCart(product.id, product.amount - 1));
    console.log(product);
  }

  function incrementAmount(product) {
    dispatch(
      updateAmountProductCart(
        product.id,
        product.amount + 1,
        product.available_quantity
      )
    );
  }

  return (
    <div className="container">
      <h1>Seu Carrinho 🛒 </h1>
      {purchases.map((purchase) => (
        <div className="card-cart" key={purchase.id}>
          <div className="image">
            <img src={purchase.pictures[0].url} alt={purchase.title} />
          </div>

          <div className="info">
            <Link to={`/product/${purchase.id}`}>
              <span>{purchase.title}</span>
            </Link>
            <span>
              Valor Unitário:{' '}
              {purchase.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
          </div>
          <div className="price">
            <span>
              <strong>Valor Total</strong>
            </span>
            <span>
              {(purchase.amount * purchase.price).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
          </div>
          <div className="buttons">
            <span>
              <button onClick={() => decrementAmount(purchase)}>
                <ion-icon name="remove-circle-outline"></ion-icon>
              </button>
              <input type="text" readOnly value={purchase.amount} />
              <button onClick={() => incrementAmount(purchase)}>
                <ion-icon name="add-circle-outline"></ion-icon>
              </button>
              <button
                onClick={() => removeFromCart(purchase.id)}
                className="remove"
              >
                <ion-icon name="trash-bin-outline"></ion-icon>
              </button>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
