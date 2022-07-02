import { memo } from 'react';
import { Wrap, WrapItem } from '@chakra-ui/react';

import { useAllWordListsQuery } from '@generated/graphql';
import Loading from '@components/common/Loading';

import Card from './card/Card';
import CardsOverviewToolbar from './CardsOverviewToolbar';

function CardsOverviewContainer() {
  const { data, loading } = useAllWordListsQuery({
    fetchPolicy: 'cache-first',
  });

  if (loading || !data) {
    return <Loading />;
  }

  const items = data.wordList.items;

  return (
    <Wrap p={6} spacing={6}>
      <WrapItem alignItems="center">
        <CardsOverviewToolbar />
      </WrapItem>
      {items.map(({ id, name, words, rating }) => (
        <WrapItem key={id}>
          <Card
            id={id}
            name={name}
            rating={rating}
            numberOfWords={words.length}
          />
        </WrapItem>
      ))}
    </Wrap>
  );
}

export default memo(CardsOverviewContainer);
