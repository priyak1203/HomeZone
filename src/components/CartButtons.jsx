import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useCartContext } from '../context/cartContext';
import { useUserContext } from '../context/userContext';
import { useQueryClient } from '@tanstack/react-query';

function CartButtons() {
  const { numItemsInCart, clearCart } = useCartContext();
  const { user, logoutUser, closeSidebar } = useUserContext();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleLogout = () => {
    logoutUser();
    clearCart();
    navigate('/');
    queryClient.removeQueries();
  };

  return (
    <Wrapper className="cart-btn-wrapper">
      <Link to="/cart" className="cart-btn" onClick={closeSidebar}>
        cart
        <span className="cart-container">
          <FaShoppingCart />
          <span className="cart-value">{numItemsInCart}</span>
        </span>
      </Link>
      {user ? (
        <button type="button" className="auth-btn" onClick={handleLogout}>
          logout <FaUserMinus />
        </button>
      ) : (
        <Link to="/login" className="auth-btn">
          login <FaUserPlus />
        </Link>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;

  .cart-btn {
    color: var(--clr-grey-1);
    font-size: 1.2rem;
    letter-spacing: var(--spacing);
    display: flex;
    align-items: center;
    text-transform: capitalize;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--clr-primary-5);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.2rem;
    cursor: pointer;
    text-transform: capitalize;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
`;

export default CartButtons;
