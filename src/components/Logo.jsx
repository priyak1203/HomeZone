import styled from 'styled-components';

function Logo() {
  return (
    <Wrapper className="logo">
      <span>Home</span>Zone
    </Wrapper>
  );
}

const Wrapper = styled.h3`
  margin-bottom: 0;
  color: var(--clr-grey-3);
  span {
    color: var(--clr-primary-5);
  }
`;

export default Logo;
