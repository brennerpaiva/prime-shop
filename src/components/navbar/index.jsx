import { Link } from 'react-router-dom';
import './navbar.css';
export default function Navbar() {
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
          <Link className="favorites" to="/favorites">
            Meus Produtos
          </Link>
        </div>
      </div>
    </header>
  );
}
