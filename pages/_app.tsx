import type { AppProps } from 'next/app';
import { GlobalContext } from '../utils/GlobalContext';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <GlobalContext>
      <Component {...pageProps} />
    </GlobalContext>
  );
};

export default App;
