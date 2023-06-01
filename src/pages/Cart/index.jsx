import './cart.css';
import { useSelector, useDispatch } from 'react-redux';

export default function Cart() {
  const purchases = useSelector((state) => state.purchase);
  const dispatch = useDispatch();

  function removeFromCart(id) {
    dispatch({
      type: 'REMOVE_CART',
      id,
    });
  }

  return (
    <div className="container">
      <h3>Seu Carrinho</h3>
      {purchases.map((purchase) => (
        <div className="card-cart" key={purchase.id}>
          <img src={purchase.pictures[0].url} alt={purchase.title} />

          <div className="info">
            <span>{purchase.title}</span>
            <span>Quantidade: {purchase.amount}</span>
          </div>
          {console.log(purchase)}
          <button onClick={() => removeFromCart(purchase.id)}>Remover</button>
        </div>
      ))}
    </div>
  );
}
