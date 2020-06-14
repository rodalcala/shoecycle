import Head from 'next/head';
import styled from 'styled-components';

import Nav from './nav';

const Container = styled.div`
  width: 80%;
  max-width: 900px;
  margin: 0 auto;
`;

const Main = styled.main`
  background-color: ${({ theme }) => theme.colours.primary};
  color: ${({ theme }) => theme.colours.white};
`;

const Layout = ({ children }) => (
  <div>
    <Head>
      <title>shoecycle</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Nav />
    <Main>
      <Container>{children}</Container>
    </Main>
  </div>
);

export default Layout;
