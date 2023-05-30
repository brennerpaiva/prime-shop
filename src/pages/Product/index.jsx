import { useEffect } from 'react';
import './product.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://api.mercadolibre.com/items/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, []);

  return (
    <div className="product-details">
      <h1>{product.title}</h1>
      {product.pictures && product.pictures.length > 0 && (
        <>
          <img src={product.pictures[0].url} alt="Product Image 1" />
          <img src={product.pictures[1].url} alt="Product Image 2" />
          <img src={product.pictures[2].url} alt="Product Image 3" />
          <img src={product.pictures[3].url} alt="Product Image 4" />
        </>
      )}
    </div>
  );
}
