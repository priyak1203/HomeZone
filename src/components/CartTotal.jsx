import styled from 'styled-components';
import { useCartContext } from '../context/cartContext';
import { formatPrice } from '../utils/helpers';
import { Link } from 'react-router-dom';

function CartTotal() {
  const { shipping, cartTotal } = useCartContext();
  const user = true;

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
          <button type="button" className="btn">
            place order
          </button>
        ) : (
          <button
            type="button"
            className="btn"
            onClick={() => console.log('login')}
          >
            login
          </button>
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
