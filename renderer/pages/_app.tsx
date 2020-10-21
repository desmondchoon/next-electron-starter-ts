import App from 'next/app'
import React from 'react'
import Head from 'next/head';

/**
 * Everything related to Material UI
 */
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../lib/theme';

/**
 * Everything related to Redux
 */
import {Provider} from 'react-redux';
import {createStore} from 'redux'
import reducer from '../stores';

const store = createStore(
  reducer
)

export interface MyAppProps {
  initialMobxState: any,
  pageProps: any,
  Component: any,
  router: any
}

export interface MyAppState {

}

class MyApp extends App<MyAppProps, MyAppState> {
  pageContext: any

  constructor(props: MyAppProps) {
    super(props);
  }
  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>Next.js TypeScript Example</title>
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Provider store={store}>
            <Component pageContext={this.pageContext} {...pageProps} />
          </Provider>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default MyApp;