import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  About,
  Cart,
  Error,
  HomeLayout,
  Landing,
  Login,
  Products,
  SingleProduct,
} from './pages';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools/production';

// loaders
import { loader as landingLoader } from './pages/Landing';
import { loader as productsLoader } from './pages/Products';
import { loader as singleProductLoader } from './pages/SingleProduct';

// react query setup
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

// router setup
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader(queryClient),
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'products',
        element: <Products />,
        loader: productsLoader(queryClient),
      },
      {
        path: 'products/:id',
        element: <SingleProduct />,
        loader: singleProductLoader(queryClient),
      },
      {
        path: 'cart',
        element: <Cart />,
      },
    ],
  },
  {
    path: 'login',
    element: <Login />,
    errorElement: <Error />,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
