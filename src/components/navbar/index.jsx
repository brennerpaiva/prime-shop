import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './navbar.css';
export default function Navbar() {
  const cartNumber = useSelector((state) => state.purchase.length);

  return (
    <header>
      <div className="max-width">
        <Link className="logo" to="/">
          <strong>Prime</strong>
          Shop
        </Link>
        <div className="nav">
          <Link className="wishlist" to="/wishlist">
            Wishlist<ion-icon name="heart-outline"></ion-icon>
          </Link>
          <Link className="favorites" to="/cart">
            <ion-icon className="icone" name="cart-outline"></ion-icon>{' '}
            {cartNumber}
          </Link>
        </div>
      </div>
    </header>
  );
}
