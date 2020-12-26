import App from 'next/app';
import Router from 'next/router';
import { ThemeProvider } from 'styled-components';

import * as gtag from '../lib/gtag';

import '../styles/normalize.css';
import '../styles/reset.local.css';

const theme = {
  colours: {
    primary: '#1E46DC',
    secondary: '#00FA32',
    white: '#FFFFFF',
    disabled: '#B8B8B8',
  },
};

Router.events.on('routeChangeComplete', (url) => gtag.pageview(url));

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
