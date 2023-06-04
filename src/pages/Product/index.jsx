import { useEffect } from 'react';
import './product.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../store/modules/purchase/actions';

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://api.mercadolibre.com/items/${id}`
        );
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, []);

  function handleAdd(product) {
    dispatch(addProduct(product));
  }

  function calculatePrice(price) {
    const valorParcela = price / 12;
    return valorParcela.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }

  if (loading) {
    return (
      <div className="loading">
        <h1>Carregando detalhes...</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="product-details">
        <div className="product-images">
          {product.pictures && product.pictures.length > 0 && (
            <>
              <img src={product.pictures[0].url} alt="Product Image 1" />
              <img src={product.pictures[1].url} alt="Product Image 2" />
              <img src={product.pictures[2].url} alt="Product Image 3" />
              <img src={product.pictures[3].url} alt="Product Image 4" />
            </>
          )}
        </div>
        <div className="product-info">
          <dvi className="card-header">
            <h3>{product.title}</h3>
          </dvi>
          <div className="card-price">
            <span className="strong">
              {product.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
            <br />
            <span>12x de {calculatePrice(product.price)}</span>
            <br />
            <span> {product.warranty}</span>
          </div>

          <div className="card-buttons">
            <span>Quantidade Disponível: {product.available_quantity}</span>
            <button onClick={() => handleAdd(product)}>COMPRAR</button>
            <button>Wishlist </button>
          </div>
          {/* <div className="seller">
            <h5></h5>
            <span>
              {product.seller_address.city && product.seller_address.city.name}
              {', '}
              {product.seller_address.state && product.seller_address.state.name}
            </span>
          </div> */}
        </div>
      </div>
      <div className="product-details-bottom">
        <h3>Informações Sobre o Produto</h3>
        {product.attributes && product.attributes.length > 0 && (
          <ul>
            <li>
              {product.attributes[0].name}: {product.attributes[0].value_name}
            </li>
            <li>
              {product.attributes[2].name}: {product.attributes[2].value_name}
            </li>
            <li>
              {product.attributes[3].name}: {product.attributes[3].value_name}
            </li>
            <li>
              {product.attributes[4].name}: {product.attributes[4].value_name}
            </li>
            <li>
              {product.attributes[5].name}: {product.attributes[5].value_name}
            </li>
            <li>
              {product.attributes[6].name}: {product.attributes[6].value_name}
            </li>
            <li>
              {product.attributes[7].name}: {product.attributes[7].value_name}
            </li>
            <li>
              {product.attributes[8].name}: {product.attributes[8].value_name}
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
