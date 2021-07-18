import { Fragment } from 'react';
import Head from 'next/head';
import styled from 'styled-components';

const Main = styled.main`
  background-color: ${props => props.theme.colours.primary};
  color: ${props => props.theme.colours.white};
  text-align: center;
  min-height: 100vh;
`;

const Layout = ({ children }) => (
  <Fragment>
    <Head>
      <title>shoecycle</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Main>{children}</Main>
  </Fragment>
);

export default Layout;
