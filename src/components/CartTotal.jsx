import styled from 'styled-components';
import { useCartContext } from '../context/cartContext';
import { formatPrice } from '../utils/helpers';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useUserContext } from '../context/userContext';

function CartTotal() {
  const { shipping, cartTotal, clearCart } = useCartContext();
  const { user } = useUserContext();

  const placeOrder = () => {
    toast.success('Order placed successfully');
    clearCart();
  };

  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            subtotal : <span>{formatPrice(cartTotal)}</span>
          </h5>
          <p>
            shipping fee : <span>{formatPrice(shipping)}</span>
          </p>
          <hr />
          <h4>
            order total :<span>{formatPrice(cartTotal + shipping)}</span>
          </h4>
        </article>
        {user ? (
          <button type="button" className="btn" onClick={placeOrder}>
            place order
          </button>
        ) : (
          <Link to="/login" className="btn">
            login
          </Link>
        )}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;

  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }

  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }

  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }

  @media (min-width: 778px) {
    justify-content: flex-end;
  }
`;

export default CartTotal;
