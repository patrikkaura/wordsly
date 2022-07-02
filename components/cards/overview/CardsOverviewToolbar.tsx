import { memo } from 'react';
import { Button, VStack } from '@chakra-ui/react';
import { AddIcon, DeleteIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';

function CardsOverviewToolbar() {
  const router = useRouter();

  return (
    <VStack>
      <Button
        w="270px"
        leftIcon={<AddIcon />}
        color="white"
        colorScheme="green"
        onClick={() => router.push('/cards/new')}
      >
        Pridat kartu
      </Button>
      <Button
        w="270px"
        leftIcon={<DeleteIcon />}
        color="white"
        colorScheme="red"
      >
        Odebrat kartu
      </Button>
    </VStack>
  );
}

export default memo(CardsOverviewToolbar);
