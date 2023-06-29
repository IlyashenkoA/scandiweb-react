import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { RootState } from '../../store/reducers';

export const DeleteButton = () => {
  const { listOfDelete } = useSelector(
    (state: RootState) => state.ProductReducer
  );

  const navigate = useNavigate();

  return (
    <button
      className='button__delete'
      id='delete-product-btn'
      onClick={() => {
        axios
          .delete(`${process.env.REACT_APP_PUBLIC_URL}`, { data: listOfDelete })
          .then(() => {
            navigate(0);
          });
      }}
    >
      Mass Delete
    </button>
  );
};
