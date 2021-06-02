import type { AppProps } from 'next/app';
import client from '../apollo/client'
import { ApolloProvider } from '@apollo/client';
import { StylesProvider } from '@material-ui/core/styles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client} >
      <StylesProvider injectFirst>
        <Component {...pageProps} />
      </StylesProvider>
    </ApolloProvider>
  );
}

export default MyApp;
