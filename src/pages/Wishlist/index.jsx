import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeProductWish } from '../../store/modules/wishlist/actions';
import './wishlist.css';

export default function Wishlist() {
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  function removeFromWish(id) {
    dispatch(removeProductWish(id));
  }
  return (
    <div className="container">
      <h1>Wishlist 💙 </h1>
      {wishlist.map((product) => (
        <div className="card-wish" key={product.id}>
          <div className="image">
            <img src={product.pictures[0].url} alt={product.title} />
          </div>

          <div className="name">
            <Link to={`/product/${product.id}`}>
              <span>{product.title}</span>
            </Link>
          </div>
          <div className="info">
            <div className="price">
              <span>
                <strong>Valor</strong>
              </span>
              <span>
                {product.price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </span>
            </div>
            <div className="status">
              <span>
                <strong>Status</strong>
              </span>
              <span>Disponível</span>
            </div>
          </div>
          <div className="buttons">
            <span>
              <Link to={`/product/${product.id}`}>
                <ion-icon name="eye"></ion-icon>
              </Link>
              <button onClick={() => removeFromWish(product.id)}>
                <ion-icon name="trash"></ion-icon>
              </button>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
