import { Button, Center, Heading, VStack } from "@chakra-ui/react";
import Loading from "@components/common/Loading";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";
import React from "react";
import { BsGithub, BsGoogle } from "react-icons/bs";

const providers = [
  { name: "google", icon: <BsGoogle />, disabled: false },
  { name: "github", icon: <BsGithub />, disabled: true },
];

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
      <VStack spacing={2}>
        {providers.map(({ name, icon, disabled }) => (
          <Button
            disabled={disabled}
            key={name}
            colorScheme="teal"
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
  );
};

export default SignInPage;
