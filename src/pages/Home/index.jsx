import { useEffect, useState } from 'react';
import './home.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Store() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [valorParcela, setValorParcela] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https:/api.mercadolibre.com/sites/MLB/search?q=notebooks'
        );
        setProducts(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  function calculatePrice(price) {
    const valorParcela = price / 12;
    return valorParcela.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }

  return (
    <div className="container">
      <h1>Store</h1>
      <div className="products-list">
        {products.map((item) => (
          <Link to={`/product/${item.id}`} key={item.id} className="card">
            <img src={item.thumbnail} alt="" />
            <h5>{item.title}</h5>
            <span>
              {item.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
            <br />
            <span>12x de {calculatePrice(item.price)}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
