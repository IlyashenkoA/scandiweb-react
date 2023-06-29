import { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';

import { IProduct } from '../pages/ProductList';

import {
  addProduct,
  removeProduct,
} from '../store/action-creators/action-creators';

export const Card: React.FC<{ product: IProduct }> = ({ product }) => {
  const { sku, name, price, type, weight, size, length, height, width } =
    product;

  const dispatch = useDispatch();

  const renderDetails = () => {
    if (type === 'Book') {
      return <p>Weight: {weight} KG</p>;
    }

    if (type === 'DVD') {
      return <p>Size: {size} MB</p>;
    }

    return (
      <p>
        Dimension: {height}x{width}x{length}
      </p>
    );
  };

  const handleListOfDeleteChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      dispatch(addProduct(sku));
    } else {
      dispatch(removeProduct(sku));
    }
  };

  return (
    <article className='card'>
      <input
        type='checkbox'
        className='delete-checkbox'
        onChange={handleListOfDeleteChange}
      />
      <div className='card__content'>
        <div className='card__content-main'>
          <h1>{sku}</h1>
          <h2>{name}</h2>
          <p>{price} $</p>
        </div>
        <div className='card__content-details'>{renderDetails()}</div>
      </div>
    </article>
  );
};
