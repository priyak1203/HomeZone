import styled from 'styled-components';
import { Filters, ProductsContainer } from '../components';
import { customFetch } from '../utils/helpers';

const url = '/products';

const allProductsQuery = () => {
  return {
    queryKey: ['products'],
    queryFn: () => customFetch.get(url),
  };
};

export const loader = (queryClient) => async () => {
  try {
    const response = await queryClient.ensureQueryData(allProductsQuery());
    const products = response.data.data;
    const meta = response.data.meta;
    return { products, meta };
  } catch (error) {
    console.log(error);
    return error;
  }
};

function Products() {
  return (
    <Wrapper className="page">
      <div className="section-center products">
        <Filters />
        <ProductsContainer />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    /* .products {
      grid-template-columns: 200px 1fr;
    } */
  }
`;

export default Products;
