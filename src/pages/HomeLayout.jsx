import { Outlet, useNavigation } from 'react-router-dom';
import { Header, Loading, Navbar } from '../components';
import styled from 'styled-components';

function HomeLayout() {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';

  return (
    <>
      {/* <Header /> */}
      <Navbar />
      {isPageLoading ? (
        <Loading />
      ) : (
        <Wrapper>
          <Outlet />
        </Wrapper>
      )}
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
