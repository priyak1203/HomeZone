import { useContext, useReducer } from 'react';
import { createContext } from 'react';
import cartReducer from '../reducers/cartReducer';
import { ADD_TO_CART } from '../actions';

const CartContext = createContext();

const initialState = {
  cart: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) => {
    dispatch({ type: ADD_TO_CART, payload: product });
  };

  return (
    <CartContext.Provider value={{ ...state, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook
const useCartContext = () => {
  return useContext(CartContext);
};

export { useCartContext, CartProvider };
