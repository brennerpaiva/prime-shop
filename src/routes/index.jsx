import { Routes, Route } from 'react-router-dom';
import Store from '../pages/Home';
import Product from '../pages/Product';
import Cart from '../pages/Cart';
import Wishlist from '../pages/Wishlist';

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Store />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/wishlist" element={<Wishlist />} />
    </Routes>
  );
}
