import { ArrowRightIcon, EditIcon,StarIcon } from '@chakra-ui/icons';
import { Box, Flex, IconButton,Spacer } from '@chakra-ui/react';
import range from 'lodash/range';
import { useRouter } from 'next/router';
import { memo, useMemo } from 'react';

type Props = {
  id: string;
  rating: number;
};

function CardStatBar(props: Props) {
  const { id, rating } = props;
  const router = useRouter();

  const ratingStars = useMemo(() => {
    return range(5).map((index) => {
      const color = index < rating ? 'gray.600' : 'gray.200';

      return <StarIcon key={`card-stars-${id}-${index}`} color={color} />;
    });
  }, [id, rating]);

  return (
    <Flex>
      <Box>{ratingStars}</Box>
      <Spacer />
      <Box pt={4} pl={4}>
        <IconButton
          colorScheme="blue"
          size="xs"
          variant="ghost"
          aria-label="edit-btn"
          icon={<EditIcon />}
          onClick={() => router.push(`/cards/${id}`)}
        />
        <IconButton
          colorScheme="green"
          size="xs"
          variant="ghost"
          aria-label="play-btn"
          icon={<ArrowRightIcon />}
          onClick={() => router.push(`/exercise/${id}`)}
        />
      </Box>
    </Flex>
  );
}

export default memo(CardStatBar);
