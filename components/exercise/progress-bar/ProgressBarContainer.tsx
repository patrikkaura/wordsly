import { memo, useMemo } from 'react';
import {
  Box,
  Center,
  Badge,
  CircularProgress,
  CircularProgressLabel,
} from '@chakra-ui/react';
import Avatar from 'boring-avatars';

import type { WordList } from 'types';

const AVATAR_COLORS = ['#332E1D', '#5AC7AA', '#9ADCB9', '#FAFCD3', '#FAFCD3'];

type Props = {
  wordList: WordList;
  stepIndex: number;
};

function ProgressBarContainer({ wordList, stepIndex }: Props) {
  const getProgress = useMemo(() => {
    return Math.round((stepIndex / wordList.words.length) * 100);
  }, [wordList, stepIndex]);

  return (
    <>
      <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        style={{ borderLeftColor: 'teal', borderLeftWidth: 7 }}
      >
        <Box mt={10}>
          <Center>
            <CircularProgress value={getProgress} size={120} color="teal.200">
              <CircularProgressLabel color="gray.500">
                <Center>
                  <Avatar
                    size={80}
                    name="testovaci"
                    variant="beam"
                    colors={AVATAR_COLORS}
                  />
                </Center>
              </CircularProgressLabel>
            </CircularProgress>
          </Center>
        </Box>

        <Box p={4} mt={4} bgColor="teal.50">
          <Box display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              Card: {wordList.name}
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              ({wordList.words.length} words)
            </Box>
          </Box>
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}
          >
            {wordList.description}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default memo(ProgressBarContainer);
