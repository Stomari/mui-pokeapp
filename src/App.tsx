import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { store } from './redux';
import { router } from './routes/router';
import { theme } from './utils/theme';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default App;
