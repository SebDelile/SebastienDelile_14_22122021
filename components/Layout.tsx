import Head from 'next/head';
import { Footer } from './Footer';
import { Header } from './Header';

const SITE_TITLE = 'HRnet';
const DESCRIPTION = 'Wealth Health internal app';
const KEYWORDS = 'Wealth Health, employees, list, internal';
const URL = 'http://sebdelile.stuff'; // TO DO : CHANGE URL AFTER DEPLOYMENT
const IMAGE = '/images/logo.jpg';

type Props = {
  children: React.ReactElement | React.ReactElement[];
  pageTitle: string;
};

const Layout = ({ children, pageTitle }: Props): React.ReactElement => {
  const title = pageTitle + ' - ' + SITE_TITLE;
  return (
    <>
      <Head>
        <link rel="icon" sizes="64x64" href="/favicon64.ico" />
        <link rel="icon" sizes="32x32" href="/favicon32.ico" />
        <link rel="icon" sizes="24x24" href="/favicon24.ico" />
        <link rel="icon" sizes="16x16" href="/favicon16.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content={DESCRIPTION} />
        <meta name="keywords" content={KEYWORDS} />
        <title>{title}</title>
        <meta name="og:title" content={title} />
        <meta name="og:description" content={DESCRIPTION} />
        <meta name="og:type" content="website" />
        <meta property="og:url" content={URL} />
        <meta property="og:locale" content="en_en" />
        {KEYWORDS.split(', ').map((keyword) => (
          <meta key={keyword} property="og:tag" content={keyword} />
        ))}
        <meta property="og:image" content={IMAGE} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta property="twitter:url" content={URL} />
        <meta property="twitter:image" content={IMAGE} />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
