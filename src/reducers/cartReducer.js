import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions';

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

    case REMOVE_CART_ITEM: {
      const tempCart = state.cart.filter((item) => item.cartID !== payload);
      return { ...state, cart: tempCart };
    }

    case CLEAR_CART: {
      return { ...state, cart: [] };
    }

    case TOGGLE_CART_ITEM_AMOUNT: {
      const { id, value } = payload;
      const tempCart = state.cart.map((item) => {
        if (item.cartID === id) {
          if (value === 'inc') {
            let newAmount = item.amount + 1;
            if (newAmount > 10) {
              newAmount = 10;
            }
            return { ...item, amount: newAmount };
          }
          if (value === 'dec') {
            let newAmount = item.amount - 1;
            if (newAmount < 1) {
              newAmount = 1;
            }
            return { ...item, amount: newAmount };
          }
        }
        return item;
      });
      return { ...state, cart: tempCart };
    }

    case COUNT_CART_TOTALS: {
      const { numItemsInCart, cartTotal } = state.cart.reduce(
        (total, item) => {
          total.numItemsInCart += item.amount;
          total.cartTotal += item.amount * item.price;
          return total;
        },
        { numItemsInCart: 0, cartTotal: 0 }
      );
      return { ...state, numItemsInCart, cartTotal };
    }

    default: {
      throw new Error(`No matching "${type}" - action type`);
    }
  }
};

export default cartReducer;
