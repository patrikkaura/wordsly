import {
  Box,
  Button,
  Center,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import Loading from "@components/common/Loading";
import { AVATAR_COLORS } from "@config";
import Avatar from "boring-avatars";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";
import React from "react";
import { BsGithub, BsGoogle } from "react-icons/bs";

const providers = [
  { name: "google", icon: <BsGoogle />, disabled: false },
  { name: "github", icon: <BsGithub />, disabled: true },
];

function generateRandomString() {
  return (Math.random() + 1).toString(36).substring(7);
}

const SignInPage: NextPage = () => {
  const { data: session, status } = useSession();
  const { push } = useRouter();

  const handleOAuthSignIn = (provider: string) => () => signIn(provider);

  if (status === "loading") {
    return <Loading />;
  } else if (session) {
    push("/");
  }

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
            <Heading
              as="h1"
              mb={4}
              fontSize={{
                base: "3xl",
                md: "4xl",
              }}
              fontWeight="bold"
              lineHeight={{
                base: "shorter",
                md: "none",
              }}
              color="gray.900"
              _dark={{
                color: "gray.200",
              }}
              letterSpacing={{
                base: "normal",
                md: "tight",
              }}
            >
              Ready to start learning?
            </Heading>
            <Text
              mb={{
                base: 10,
                md: 4,
              }}
              fontSize={{
                base: "lg",
                md: "xl",
              }}
              fontWeight="thin"
              color="gray.500"
              letterSpacing="wider"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              sit amet elementum tortor, at lacinia felis. Maecenas tortor dui,
              pulvinar eget ligula vel, accumsan imperdiet neque.
            </Text>
          </GridItem>
          <GridItem
            colSpan={{
              base: "auto",
              md: 5,
            }}
          >
            <Box mb={6} borderWidth={0}>
              <Center pb={2}>
                <Avatar
                  size={100}
                  name={generateRandomString()}
                  variant="beam"
                  colors={AVATAR_COLORS}
                />
              </Center>
              <SimpleGrid columns={1} px={6} py={4} spacing={4}>
                <Center h="100%">
                  <VStack spacing={2}>
                    {providers.map(({ name, icon, disabled }) => (
                      <Button
                        disabled={disabled}
                        key={name}
                        colorScheme="blue"
                        leftIcon={icon}
                        onClick={handleOAuthSignIn(name)}
                        textTransform="uppercase"
                        minWidth="250px"
                      >
                        Sign in with {name}
                      </Button>
                    ))}
                  </VStack>
                </Center>
              </SimpleGrid>
            </Box>
          </GridItem>
        </SimpleGrid>
      </Box>
    </Center>
  );
};

export default SignInPage;
