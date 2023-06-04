import { useEffect, useState } from 'react';
import './home.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Store() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [valorParcela, setValorParcela] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https:/api.mercadolibre.com/sites/MLB/search?q=celulares'
        );
        setProducts(response.data.results);
        setLoading(false);
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

  if (loading) {
    return (
      <div class="loader">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
        <div class="bar4"></div>
        <div class="bar5"></div>
        <div class="bar6"></div>
        <div class="bar7"></div>
        <div class="bar8"></div>
        <div class="bar9"></div>
        <div class="bar10"></div>
        <div class="bar11"></div>
        <div class="bar12"></div>
      </div>
    );
  }

  return (
    <div className="container">
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
