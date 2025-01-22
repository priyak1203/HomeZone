import { useLoaderData } from 'react-router-dom';
import { customFetch, formatPrice } from '../utils/helpers';
import styled from 'styled-components';
import { AddToCart } from '../components';

const singleProductQuery = (id) => {
  return {
    queryKey: ['singleProduct', id],
    queryFn: () => customFetch.get(`/products/${id}`),
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    try {
      const response = await queryClient.ensureQueryData(
        singleProductQuery(params.id)
      );
      return { product: response.data.data };
    } catch (error) {
      console.log(error);
      return error;
    }
  };

function SingleProduct() {
  const { product } = useLoaderData();
  const { image, title, company, price, description } = product.attributes;
  const dollarsAmount = formatPrice(price);

  return (
    <Wrapper className="section section-center page">
      <div className="product-center">
        {/* PRODUCT IMAGE */}
        <section>
          <img src={image} alt={title} className="main" />
        </section>

        {/* PRODUCT INFO */}
        <section className="content">
          <h2>{title}</h2>
          <h4>{company}</h4>
          <h5 className="price">{dollarsAmount}</h5>
          <p className="desc">{description}</p>
          <AddToCart product={product} />
        </section>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  .main {
    height: 600px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }

  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .main {
      height: 500px;
    }

    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleProduct;
