import { Link } from 'react-router-dom';
import styled from 'styled-components';

import heroBcg from '../assets/hero-bcg.jpeg';
import heroBcg2 from '../assets/hero-bcg-2.jpeg';

function Hero() {
  return (
    <Wrapper className="section-center">
      <article>
        <h1>We are changing the way people shop</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
          repellat explicabo enim soluta temporibus asperiores aut obcaecati
          perferendis porro nobis.
        </p>
        <Link to="/products" className="btn hero-btn">
          our products
        </Link>
      </article>
      <article className="img-container">
        <img src={heroBcg} alt="nice table" className="main-img" />
        <img src={heroBcg2} alt="person working" className="accent-img" />
      </article>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  /* background-color: burlywood; */
  /* display: grid;
  gap: 6rem;
  align-items: center;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  } */

  // Old Styles
  min-height: 60vh;
  display: grid;
  place-items: center;
  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  .img-container {
    display: none;
  }

  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }

    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: '';
      position: absolute;
      width: 10%;
      height: 80%;
      bottom: 0%;
      left: -8%;
      background: var(--clr-primary-9);
      border-radius: var(--radius);
    }
  }
`;

export default Hero;
