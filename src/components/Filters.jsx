import { Form, Link, useLoaderData } from 'react-router-dom';
import FormInput from './FormInput';
import styled from 'styled-components';

function Filters() {
  const { meta, params } = useLoaderData();
  const { search } = params;

  return (
    <Wrapper>
      <Form className="form">
        <div className="form-center">
          {/* SEARCH */}
          <FormInput
            type="search"
            label="search product"
            name="search"
            defaultValue={search}
          />
          {/* BUTTONS */}
          <button type="submit" className="btn form-btn">
            search
          </button>
          <Link to="/products" className="btn form-btn reset-btn">
            reset
          </Link>
        </div>
      </Form>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  border-radius: var(--border-radius);
  width: 100%;
  background: var(--background-secondary-color);
  padding: 3rem 2rem 4rem;
  .form-title {
    margin-bottom: 2rem;
  }
  .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: grid;
    row-gap: 1rem;
  }
  .form-btn {
    align-self: end;
    margin-top: 1rem;
    display: grid;
    place-items: center;
    font-weight: 400;
  }
  .reset-btn {
    background: var(--clr-grey-1);
    color: var(--clr-white);
  }
  .reset-btn:hover {
    background: var(--clr-grey-5);
    color: var(--clr-grey-10);
  }
  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

export default Filters;
