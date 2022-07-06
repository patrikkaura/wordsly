import { Center, SimpleGrid } from "@chakra-ui/react";
import React, { memo } from "react";
import type { Word } from "types";

import WordCard from "./WordCard";

type Props = {
  word: Word;
  currentGuess: string;
  guessedWords: string[];
};

function WordCardList({ currentGuess, guessedWords, word }: Props) {
  const { translation } = word;

  return (
    <SimpleGrid gap={8} p={8}>
      {[...guessedWords, currentGuess].map((guessedWord, index) => (
        <Center key={`${index}-${word}`}>
          <WordCard translation={translation} guessedWord={guessedWord} />
        </Center>
      ))}
    </SimpleGrid>
  );
}

export default memo(WordCardList);
