import { Outlet } from 'react-router-dom';
import { Header, Navbar } from '../components';
import styled from 'styled-components';

function HomeLayout() {
  return (
    <>
      <Header />
      <Navbar />
      <Wrapper>
        <Outlet />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.section`
  /* border: 2px solid red; */
  /* max-width: 72rem;
  margin: 0 auto; */
  /* padding: 5rem 2rem; */
  /* padding: 0 2rem; */
`;

export default HomeLayout;
