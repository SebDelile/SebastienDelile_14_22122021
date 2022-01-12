import type { AppProps } from 'next/app';
import { GlobalContext } from '../utils/GlobalContext';
import '../styles/globals.css';

/**
 * App will wrap the whole app, allow to pass the BlobalContext provider to pass the context to any component
 */
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <GlobalContext>
      <Component {...pageProps} />
    </GlobalContext>
  );
};

export default App;
