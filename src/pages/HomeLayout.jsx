import { Outlet, useNavigation } from 'react-router-dom';
import { Loading, Navbar, Footer, Sidebar } from '../components';
import styled from 'styled-components';

function HomeLayout() {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';

  return (
    <>
      <Navbar />
      <Sidebar />
      {isPageLoading ? (
        <Loading />
      ) : (
        <Wrapper>
          <Outlet />
        </Wrapper>
      )}
      <Footer />
    </>
  );
}

const Wrapper = styled.section`
  padding-top: 0.5rem;
`;

export default HomeLayout;
