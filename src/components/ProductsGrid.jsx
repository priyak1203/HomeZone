import { useLoaderData } from 'react-router-dom';
import styled from 'styled-components';
import Product from './Product';

function ProductsGrid() {
  const { products } = useLoaderData();

  return (
    <Wrapper>
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  img {
    height: 175px;
  }
  display: grid;
  gap: 2rem 1.5rem;

  @media (min-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1170px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default ProductsGrid;
