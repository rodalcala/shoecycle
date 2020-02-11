import Head from 'next/head';
import Nav from './nav';

const Layout = ({ children }) => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Nav />
    <main>{children}</main>
  </div>
);

export default Layout;
