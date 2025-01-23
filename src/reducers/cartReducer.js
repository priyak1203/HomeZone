import { ADD_TO_CART } from '../actions';

const cartReducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART: {
      const { cartID, productID, amount, color, image, price, title } = payload;

      const tempItem = state.cart.find((i) => i.cartID === cartID);

      if (tempItem) {
        const tempCart = state.cart.map((cartItem) => {
          if (cartItem.cartID === cartID) {
            let newAmount = cartItem.amount + amount;
            return { ...cartItem, amount: newAmount };
          }
          return cartItem;
        });
        return { ...state, cart: tempCart };
      } else {
        const newItem = {
          cartID,
          productID,
          color,
          amount,
          image,
          price,
          title,
        };
        return { ...state, cart: [...state.cart, newItem] };
      }
    }
  }

  return state;
};

export default cartReducer;
