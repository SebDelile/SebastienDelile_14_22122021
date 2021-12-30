import type { AppProps } from 'next/app';
import { GlobalContext } from '../utils/globalContext';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <GlobalContext>
      <Component {...pageProps} />
    </GlobalContext>
  );
};

export default App;
