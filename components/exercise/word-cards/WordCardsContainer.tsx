import {
  Grid,
  GridItem,
  Box,
  Input,
  Center,
  Progress,
  Heading,
  SimpleGrid,
  IconButton,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import React, { useState, memo, useEffect, useRef } from 'react';

import WordCard from './WordCard';
import type { Word } from 'types';

const MAXIMUM_NUMBER_OF_TRIES = 5;

type Props = {
  progress: number;
  word: Word;
  onSetStepIndex(): void;
};

function WordCardsContainer({ progress, word, onSetStepIndex }: Props) {
  const { original, translation } = word;
  const inputRef = useRef<HTMLInputElement>(null);
  const [currentGuess, setCurrentGuess] = useState('');
  const [guessedWords, setGuessedWords] = useState<string[]>([]);

  const handleCurrentGuess = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (
      value.length > currentGuess.length &&
      value.length <= translation.length
    ) {
      setCurrentGuess(value);
    }
  };

  useEffect(() => {
    if (currentGuess.length === translation.length) {
      if (
        guessedWords.length < MAXIMUM_NUMBER_OF_TRIES - 1 &&
        currentGuess !== translation
      ) {
        setGuessedWords([...guessedWords, currentGuess]);
      } else {
        setGuessedWords([]);
        onSetStepIndex();
      }
      setCurrentGuess('');
    }
  }, [currentGuess, guessedWords, onSetStepIndex, translation]);

  useEffect(() => {
    if (currentGuess.length === 0 && inputRef.current) {
      inputRef.current?.focus();
    }
  }, [currentGuess]);

  return (
    <Box h={600} pt="10">
      <Grid templateRows="repeat(5, 1fr)" gap={10} h="80%">
        <GridItem>
          <Center>
            <Progress
              w="80%"
              hasStripe
              isAnimated
              rounded={10}
              value={progress}
              colorScheme="teal"
            />
            <IconButton
              ml={5}
              rounded="full"
              aria-label="close"
              variant="ghost"
              icon={<CloseIcon />}
            />
          </Center>
        </GridItem>
        <GridItem>
          <Center>
            <Heading size="lg">Napište v angličtině „{original}“</Heading>
          </Center>
        </GridItem>
        <GridItem>
          <Center>
            <Input
              ref={inputRef}
              value={currentGuess}
              w={300}
              placeholder="Napiš překlad ..."
              onChange={handleCurrentGuess}
            />
          </Center>
        </GridItem>
        <GridItem h="300">
          <SimpleGrid gap={8} p={8}>
            {[...guessedWords, currentGuess].map((guessedWord, index) => (
              <Center key={`${index}-${word}`}>
                <WordCard translation={translation} guessedWord={guessedWord} />
              </Center>
            ))}
          </SimpleGrid>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default memo(WordCardsContainer);
