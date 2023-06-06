import { useEffect } from 'react';
import './product.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProductCart } from '../../store/modules/purchase/actions';
import { addProductWish } from '../../store/modules/wishlist/actions';

const currentDate = new Date();
const futureDate = new Date(currentDate.getTime() + 4 * 24 * 60 * 60 * 1000);
const futureDate2 = new Date(currentDate.getTime() + 6 * 24 * 60 * 60 * 1000);
const options = { day: 'numeric', month: 'long' };
const formattedDate = futureDate.toLocaleDateString('pt-BR', options);
const formattedDate2 = futureDate2.toLocaleDateString('pt-BR', options);

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

  function handleAddCart(product) {
    dispatch(addProductCart(product));
  }

  function handleAddWish(product) {
    dispatch(addProductWish(product));
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
      <div className="product-details">
        <div className="product-images">
          {product.pictures && product.pictures.length >= 4 && (
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
          </div>
          <span>Unidades disponíveis: {product.available_quantity}</span>
          <div className="card-buttons">
            <button onClick={() => handleAddCart(product)}>COMPRAR</button>
            <button id="wishlist" onClick={() => handleAddWish(product)}>
              WISHLIST <ion-icon name="heart"></ion-icon>
            </button>
          </div>
          <span>Frete Grátis</span>
          <span>
            Previsão de entrega: Entre <strong>{formattedDate}</strong> e{' '}
            <strong>{formattedDate2}</strong>
          </span>
          <br />

          <div className="product-details-bottom">
            <h3>Descrição:</h3>
            {product.attributes && product.attributes.length > 0 && (
              <ul>
                <li>
                  <strong>{product.attributes[0].name}:</strong> {''}
                  {product.attributes[0].value_name}
                </li>
                <li>
                  <strong>{product.attributes[2].name}:</strong> {''}
                  {product.attributes[2].value_name}
                </li>
                <li>
                  <strong>
                    <strong>{product.attributes[3].name}:</strong> {''}
                  </strong>
                  {product.attributes[3].value_name}
                </li>
                <li>
                  <strong>{product.attributes[4].name}:</strong> {''}
                  {product.attributes[4].value_name}
                </li>
                <li>
                  <strong>{product.attributes[5].name}:</strong> {''}
                  {product.attributes[5].value_name}
                </li>
                <li>
                  <strong>{product.attributes[6].name}:</strong> {''}
                  {product.attributes[6].value_name}
                </li>
                <li>
                  <strong>{product.attributes[7].name}:</strong> {''}
                  {product.attributes[7].value_name}
                </li>
                <li>
                  <strong>{product.attributes[8].name}:</strong> {''}
                  {product.attributes[8].value_name}
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
