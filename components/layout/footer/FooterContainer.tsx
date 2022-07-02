import { memo } from 'react';
import {
  HStack,
  VStack,
  Link,
  Icon,
  Box,
  Divider,
  Text,
} from '@chakra-ui/react';

import { FiTwitter, FiGithub, FiLinkedin } from 'react-icons/fi';

const LINKS = [
  { url: 'https://twitter.com/patrikkaura', icon: FiTwitter },
  {
    url: 'https://www.linkedin.com/in/patrik-kaura-a8a8b817b/',
    icon: FiLinkedin,
  },
  { url: 'https://github.com/patrikkaura', icon: FiGithub },
];

function FooterContainer() {
  return (
    <Box>
      <Divider />
      <VStack py={3} w="100%">
        <HStack justify="center">
          {LINKS.map(({ url, icon }, index) => (
            <Link key={index} href={url}>
              <Icon h={5} w={5} as={icon} />
            </Link>
          ))}
        </HStack>
        <Text textAlign="center" fontSize="smaller">
          Copyright &copy; {new Date().getFullYear()} Patrik Kaura. All rights
          reserved.
        </Text>
      </VStack>
    </Box>
  );
}

export default memo(FooterContainer);
