import { Link, Outlet, useLocation } from 'react-router-dom';

import { SaveButton } from '../components/Buttons/SaveButton';
import { DeleteButton } from '../components/Buttons/DeleteButton';

import { Header } from '../layouts/Header';
import { Footer } from '../layouts/Footer';

export const Layout = () => {
  const location = useLocation();

  let title = '';

  if (location.pathname === '/') {
    title = 'Product List';
    document.title = title;
  } else {
    title = 'Product Add';
    document.title = title;
  }

  return (
    <>
      <Header
        title={title}
        render={() => {
          return location.pathname === '/' ? (
            <>
              <Link to='/add-product'>
                <button id='add-product-btn'>ADD</button>
              </Link>
              <DeleteButton />
            </>
          ) : (
            <>
              <SaveButton />
              <Link to='/'>
                <button id='cancel-product-btn'>Cancel</button>
              </Link>
            </>
          );
        }}
      />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
