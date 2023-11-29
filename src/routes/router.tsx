import { createBrowserRouter } from 'react-router-dom';

// components
import { Root } from './root';
import { About } from './about';
import { NavBar } from '../components/NavBar';

export const router = createBrowserRouter([
  {
    element: <NavBar />,
    children: [
      {
        path: '/',
        element: <Root />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);
