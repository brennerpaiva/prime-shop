import { Routes, Route } from 'react-router-dom';
import Store from '../pages/Home';
import Product from '../pages/Product';

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Store />} />
      <Route path="/product/:id" element={<Product />} />
    </Routes>
  );
}
