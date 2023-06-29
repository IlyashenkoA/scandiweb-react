import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card } from '../components/Card';

export interface IProduct {
  id: string;
  sku: string;
  name: string;
  type: string;
  price: string;
  weight: string | null;
  size: string | null;
  height: string | null;
  length: string | null;
  width: string | null;
}

export const ProductList = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    axios
      .get<IProduct[]>(`${process.env.REACT_APP_PUBLIC_URL}`)
      .then(res => setProducts(res.data));
  }, []);

  return (
    <>
      {products ? (
        <ul className='product-list'>
          {products.map(product => (
            <li key={product.sku}>
              <Card product={product} />
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
};
