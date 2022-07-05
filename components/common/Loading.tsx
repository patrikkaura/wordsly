import { Center, Spinner } from '@chakra-ui/react';
import { memo } from 'react';

function Loading() {
  return (
    <Center p={6} h="100%">
      <Spinner size="md" color="teal" />
    </Center>
  );
}

export default memo(Loading);
