import { Box, Button, Center, SimpleGrid, VStack } from "@chakra-ui/react";
import { AVATAR_COLORS } from "@config";
import randomString from "@utils/randomString";
import Avatar from "boring-avatars";
import { memo, useMemo } from "react";
import { BsGithub, BsGoogle } from "react-icons/bs";

const OAUTH_PROVIDERS = [
  { name: "google", icon: <BsGoogle />, disabled: false },
  { name: "github", icon: <BsGithub />, disabled: true },
];

type Props = {
  onOAuthSignIn(providerName: string): void;
};

const LoginButtons = ({ onOAuthSignIn }: Props) => {
  const randomName = useMemo(() => randomString(), []);

  return (
    <Box mb={6} borderWidth={0}>
      <Center pb={2}>
        <Avatar
          size={100}
          variant="beam"
          name={randomName}
          colors={AVATAR_COLORS}
        />
      </Center>
      <SimpleGrid columns={1} px={6} py={4} spacing={4}>
        <VStack spacing={2}>
          {OAUTH_PROVIDERS.map(({ name, icon, disabled }) => (
            <Button
              key={name}
              leftIcon={icon}
              disabled={disabled}
              minWidth="250px"
              colorScheme="blue"
              textTransform="uppercase"
              onClick={() => onOAuthSignIn(name)}
            >
              Sign in with {name}
            </Button>
          ))}
        </VStack>
      </SimpleGrid>
    </Box>
  );
};

export default memo(LoginButtons);
