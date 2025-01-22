import styled from 'styled-components';
import { Location } from '../components';

function About() {
  return (
    <Wrapper className="page section section-center">
      <article>
        <div className="title">
          <h2>our story</h2>
          <div className="underline"></div>
        </div>
        <p>
          Home Zone was founded in Milan 60 years ago by Giovanni Rossi, a
          skilled artisan with a passion for timeless furniture design. Starting
          as a small workshop, the brand quickly gained recognition for its
          craftsmanship and innovative approach. By the 1980s, two flagship
          stores were established: one near San Siro, catering to Milan’s elite
          with luxurious, bespoke pieces, and another near Corvetto, offering
          affordable, stylish options for young families. Renowned for blending
          Italian tradition with modern trends, Mobili Eleganti continues to
          thrive, championing sustainability and inspiring homes across Milan
          with its elegant, high-quality furniture.
        </p>
      </article>
      <div>
        <Location />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default About;
