import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

import App from './App.jsx';
import { CartProvider } from './context/cartContext.jsx';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <App />
      <ToastContainer position="top-center" autoClose={2000} />
    </CartProvider>
  </StrictMode>
);
