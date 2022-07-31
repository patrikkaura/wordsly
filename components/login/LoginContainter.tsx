import {
  Box,
  Center,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";

import LoginButtons from "./LoginButtons";
import LoginHeading from "./LoginHeading";

type Props = {
  onOAuthSignIn(providerName: string): void;
};

const LoginContainer = ({ onOAuthSignIn }: Props) => {
  return (
    <Center h="100%">
      <Box px={8} py={24} mx="auto">
        <SimpleGrid
          alignItems="center"
          w={{
            base: "full",
            xl: 11 / 12,
          }}
          columns={{
            base: 1,
            lg: 11,
          }}
          gap={{
            base: 2,
            lg: 24,
          }}
          mx="auto"
        >
          <GridItem
            colSpan={{
              base: "auto",
              lg: 5,
            }}
            textAlign={{
              base: "center",
              lg: "left",
            }}
          >
            <LoginHeading />
          </GridItem>
          <GridItem
            colSpan={{
              base: "auto",
              md: 5,
            }}
          >
            <Box mb={6} borderWidth={0}>
              <LoginButtons onOAuthSignIn={onOAuthSignIn} />
            </Box>
          </GridItem>
        </SimpleGrid>
      </Box>
    </Center>
  );
};

export default LoginContainer;
