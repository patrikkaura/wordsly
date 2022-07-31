import "@styles/globals.css";

import { ApolloProvider } from "@apollo/client";
import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import client from "@client/apollo";
import FooterContainer from "@components/layout/footer/FooterContainer";
import TopBarContainer from "@components/layout/top-bar/TopBarContainer";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <SessionProvider session={session} refetchInterval={5 * 60}>
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
      </SessionProvider>
    </ApolloProvider>
  );
}

export default MyApp;
