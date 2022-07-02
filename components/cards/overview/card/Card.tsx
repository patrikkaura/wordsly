import { memo, useMemo } from 'react';
import {
  Box,
  Center,
  StatGroup,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
} from '@chakra-ui/react';
import Avatar from 'boring-avatars';
import Link from 'next/link';

import { AVATAR_COLORS } from '@config';

import CardStatBar from './CardStatBar';

type Props = {
  id: string;
  name: string;
  rating: number;
  numberOfWords: number;
};

function Card(props: Props) {
  const { id, name, rating, numberOfWords } = props;

  const numberOfWordsLabel = useMemo(() => {
    if (numberOfWords === 1) {
      return '1 slovo';
    } else if (numberOfWords < 4) {
      return `${numberOfWords} slova`;
    }
    return `${numberOfWords} slov`;
  }, [numberOfWords]);

  return (
    <Center data-testid="word-card-container" borderWidth={1} w="270px">
      <Box>
        <Avatar
          square
          size={120}
          name={name}
          variant="beam"
          colors={AVATAR_COLORS}
        />
      </Box>
      <Box pl={2} display="flex" justifyContent="center" w="100%">
        <StatGroup>
          <Stat>
            <StatLabel>
              <Link href={`/cards/${id}`}>{name}</Link>
            </StatLabel>
            <StatNumber fontSize={20}>{numberOfWordsLabel}</StatNumber>
            <StatHelpText data-testid="word-card-stars-container">
              <CardStatBar id={id} rating={rating} />
            </StatHelpText>
          </Stat>
        </StatGroup>
      </Box>
    </Center>
  );
}

export default memo(Card);
