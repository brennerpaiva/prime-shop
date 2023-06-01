import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './navbar.css';
import purchase from '../../store/modules/purchase/reducer';
export default function Navbar() {
  const cartNumber = useSelector((state) => state.purchase.length);
  console.log(cartNumber);

  return (
    <header>
      <div className="max-width">
        <Link className="logo" to="/">
          <strong>Prime</strong>
          Shop
        </Link>
        <div className="nav">
          {/* <div className="search">
            <input
              id="input-movie"
              type="text"
              placeholder="Pesquise por um filme"
            />
            <button>teste</button>
          </div> */}
          <Link className="favorites" to="/">
            Meu Carrinho {cartNumber}
          </Link>
          <span></span>
        </div>
      </div>
    </header>
  );
}
