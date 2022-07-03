import { memo } from "react";
import { Wrap, WrapItem } from "@chakra-ui/react";

import Card from "@components/cards/overview/card/Card";
import CardsOverviewToolbar from "@components//cards/overview/CardsOverviewToolbar";

import type { Word } from "types";

type WordList = {
  id: string;
  name: string;
  rating: number;
  words: Pick<Word, "id">[];
};

type Props = {
  items: WordList[];
};

function CardsOverviewContainer({ items }: Props) {
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
