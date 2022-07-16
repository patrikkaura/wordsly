import { Center, SimpleGrid } from "@chakra-ui/react";
import React, { memo } from "react";
import type { Word } from "types/index";

import Letter from "./Letter";

type Props = {
  word: Word;
  currentGuess: string;
  guessedWords: string[];
};

function LetterList({ currentGuess, guessedWords, word }: Props) {
  const { translation } = word;

  return (
    <SimpleGrid gap={8} p={8}>
      {[...guessedWords, currentGuess].map((guessedWord, index) => (
        <Center key={`${index}-${word}`}>
          <Letter translation={translation} guessedWord={guessedWord} />
        </Center>
      ))}
    </SimpleGrid>
  );
}

export default memo(LetterList);
