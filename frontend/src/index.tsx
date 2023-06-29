import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { ProductList } from './pages/ProductList';
import { Layout } from './pages/Layout';
import { ProductsAdd } from './pages/ProductAdd';

import { store } from './store';

import './sass/index.scss';

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<ProductList />} />
            <Route path='add-product' element={<ProductsAdd />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<App />);
