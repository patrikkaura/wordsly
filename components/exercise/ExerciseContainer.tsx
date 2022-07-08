import { isApolloError } from "@apollo/client";
import { Box, Center, Grid, GridItem, Heading } from "@chakra-ui/react";
import { useUpdateWordListRatingMutation } from "@generated/graphql";
import useExercise from "@hooks/useExercise";
import useScore from "@hooks/useScore";
import React, { memo, useCallback, useMemo, useState } from "react";
import { useUpdateEffect } from "react-use";
import type { Word } from "types";
import { END_STATUS } from "types";

import FooterSlider from "./FooterSlider";
import GuessInput from "./GuessInput";
import ProgressBar from "./ProgressBar";
import ResultDialog from "./ResultDialog";
import WordCardList from "./WordCardList";

type Props = {
  id: string;
  items: Word[];
};

const MAXIMUM_NUMBER_OF_TRIES = 3;

function ExerciseContainer({ id, items }: Props) {
  const [{ word, progress, isLastStepIndex }, setNextStep] = useExercise({
    words: items,
  });
  const [rating, updateScore] = useScore({
    numberOfWords: items.length,
  });

  const { original, translation } = word;

  const [currentGuess, setCurrentGuess] = useState("");
  const [guessedWords, setGuessedWords] = useState<string[]>([]);

  const [updateWordListRating] = useUpdateWordListRatingMutation();

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

  const handleUpdateRating = useCallback(async () => {
    try {
      await updateWordListRating({
        variables: {
          request: {
            id,
            rating,
          },
        },
      });
    } catch (error) {
      if (isApolloError(error as Error)) {
        console.error(error);

        return;
      }
      throw error;
    }
  }, [id, rating, updateWordListRating]);

  const endState = useMemo(() => {
    if (currentGuess === translation) {
      if (!guessedWords.length) {
        return END_STATUS.SUCCESS;
      }
      return END_STATUS.PARTIAL_SUCCESS;
    } else if (guessedWords.length === MAXIMUM_NUMBER_OF_TRIES) {
      return END_STATUS.FAILED;
    }

    return null;
  }, [guessedWords, currentGuess, translation]);

  useUpdateEffect(() => {
    if (currentGuess.length === translation.length) {
      if (
        guessedWords.length < MAXIMUM_NUMBER_OF_TRIES &&
        currentGuess !== translation
      ) {
        setGuessedWords([...guessedWords, currentGuess]);
        setCurrentGuess("");
      }
    }
  }, [currentGuess, translation, guessedWords]);

  useUpdateEffect(() => {
    if (endState) {
      updateScore(endState);

      if (!isLastStepIndex) {
        setTimeout(() => {
          setGuessedWords([]);
          setCurrentGuess("");
          setNextStep();
        }, 1000);
      } else {
        handleUpdateRating();
      }
    }
  }, [endState]);

  return (
    <>
      <Box h={600} pt="10">
        <Grid templateRows="repeat(5, 1fr)" gap={10} h="80%">
          <GridItem>
            <ProgressBar progress={progress} />
          </GridItem>
          <GridItem>
            <Center>
              <Heading size="lg">Napište v angličtině „{original}“</Heading>
            </Center>
          </GridItem>
          <GridItem>
            <GuessInput
              disabled={Boolean(endState)}
              currentGuess={currentGuess}
              onGuessChange={handleCurrentGuess}
            />
          </GridItem>
          <GridItem h="300">
            <WordCardList
              word={word}
              guessedWords={guessedWords}
              currentGuess={currentGuess}
            />
          </GridItem>
        </Grid>
      </Box>
      {endState && (
        <FooterSlider isVisible={Boolean(endState)} status={endState} />
      )}
      <ResultDialog
        rating={rating}
        isVisible={Boolean(endState) && isLastStepIndex}
      />
    </>
  );
}

export default memo(ExerciseContainer);
