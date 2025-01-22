import styled from 'styled-components';
import { FaMinus, FaPlus } from 'react-icons/fa';

function AmountButtons({ amount, increase, decrease }) {
  return (
    <Wrapper>
      <button type="button" onClick={decrease}>
        <FaMinus />
      </button>
      <h4>{amount}</h4>
      <button type="button" onClick={increase}>
        <FaPlus />
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 140px;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  h4 {
    margin-bottom: 0;
  }
  button {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    padding: 1rem 0;
    width: 2rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default AmountButtons;
