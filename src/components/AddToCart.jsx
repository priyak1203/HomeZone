import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AmountButtons from './AmountButtons';
import { useCartContext } from '../context/cartContext';

function AddToCart({ product }) {
  const { colors, title, image, price } = product.attributes;
  const { id } = product;

  const { addToCart } = useCartContext();

  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const increaseAmount = () => {
    setAmount((currentAmt) => {
      let newAmt = currentAmt + 1;
      if (newAmt > 10) {
        newAmt = 10;
      }
      return newAmt;
    });
  };

  const decreaseAmount = () => {
    setAmount((currentAmt) => {
      let newAmt = currentAmt - 1;
      if (newAmt < 1) {
        newAmt = 1;
      }
      return newAmt;
    });
  };

  const cartProduct = {
    cartID: product.id + mainColor,
    productID: product.id,
    amount,
    color: mainColor,
    title,
    image,
    price,
  };

  return (
    <Wrapper>
      <div className="colors">
        <h5>colors : </h5>
        <div>
          {colors.map((color, index) => {
            return (
              <button
                key={index}
                style={{ backgroundColor: color }}
                className={
                  color === mainColor ? 'color-btn active' : 'color-btn'
                }
                onClick={() => setMainColor(color)}
              >
                {color === mainColor ? <FaCheck /> : null}
              </button>
            );
          })}
        </div>
      </div>
      <div className="btn-container">
        <AmountButtons
          amount={amount}
          increase={increaseAmount}
          decrease={decreaseAmount}
        />
        <Link to="/cart" className="btn" onClick={() => addToCart(cartProduct)}>
          add to cart
        </Link>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 80px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
    h5 {
      margin-bottom: 0;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }

  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
    text-align: center;
  }
`;

export default AddToCart;
