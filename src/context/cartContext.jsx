import { useContext, useEffect, useReducer } from 'react';
import { createContext } from 'react';
import cartReducer from '../reducers/cartReducer';
import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions';

const getLocalStorage = () => {
  return JSON.parse(localStorage.getItem('cart')) || [];
};

const initialState = {
  cart: getLocalStorage(),
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
};

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    dispatch({ type: COUNT_CART_TOTALS });
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);

  // add to cart
  const addToCart = (product) => {
    dispatch({ type: ADD_TO_CART, payload: product });
  };

  // remove item
  const removeItem = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id });
  };

  // clear cart
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  // toggle amount
  const toggleAmount = (value, id) => {
    dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { value, id } });
  };

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, clearCart, toggleAmount }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook
const useCartContext = () => {
  return useContext(CartContext);
};

export { useCartContext, CartProvider };
