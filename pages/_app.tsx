import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import type { AppProps } from 'next/app';
import { ChakraProvider, Flex, Box } from '@chakra-ui/react';

import '@styles/globals.css';

import TopBarContainer from '@components/layout/top-bar/TopBarContainer';
import FooterContainer from '@components/layout/footer/FooterContainer';

const client = new ApolloClient({
  link: new HttpLink({ uri: '/api/graphql' }),
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <Flex direction="column" h="100vh">
          <Box h="64px">
            <TopBarContainer />
          </Box>
          <Box flex="1" px="5%">
            <Component {...pageProps} />
          </Box>
          <Box h="80px">
            <FooterContainer />
          </Box>
        </Flex>
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default MyApp;
