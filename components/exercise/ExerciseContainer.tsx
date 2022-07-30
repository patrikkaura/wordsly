import { isApolloError } from "@apollo/client";
import { Box, Center, Grid, GridItem, Heading } from "@chakra-ui/react";
import { MAXIMUM_NUMBER_OF_TRIES } from "@config";
import { useUpdateWordListRatingMutation } from "@generated/graphql";
import { useExercise, useGuess, useScore } from "@hooks/index";
import { useSession } from "next-auth/react";
import React, { memo, useCallback, useMemo } from "react";
import { useUpdateEffect } from "react-use";
import type { Word } from "types";
import { END_STATUS } from "types";

import GuessInput from "./GuessInput";
import WordCardList from "./letters/LetterList";
import ResultDialog from "./modal/ResultDialog";
import FooterSlider from "./progress/FooterSlider";
import ProgressBar from "./progress/ProgressBar";

type Props = {
  id: string;
  items: Word[];
};

function ExerciseContainer({ id, items }: Props) {
  const { data: session } = useSession();

  const [updateWordListRating] = useUpdateWordListRatingMutation();

  const [{ word, progress }, setNextStep] = useExercise({
    words: items,
  });
  const [rating, updateScore] = useScore({
    numberOfWords: items.length,
  });
  const [
    { currentGuess, guessedWords },
    handleSetCurrentGuess,
    handleSetGuess,
    handleResetGuess,
  ] = useGuess({ translation: word.translation });

  const { original, translation } = word;
  const isLastWord = progress === 100;

  const handleUpdateRating = useCallback(async () => {
    try {
      await updateWordListRating({
        variables: {
          request: {
            // @ts-expect-error: session object has custom uid parameter
            userId: session?.user?.id,
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
  }, [id, rating, session, updateWordListRating]);

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
        handleSetGuess();
      }
    }
  }, [currentGuess, translation, guessedWords]);

  useUpdateEffect(() => {
    if (endState) {
      updateScore(endState);

      if (!isLastWord) {
        setTimeout(() => {
          handleResetGuess();
          setNextStep();
        }, 1000);
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
              onGuessChange={handleSetCurrentGuess}
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
        isVisible={Boolean(endState) && isLastWord}
        onUpdateRating={handleUpdateRating}
      />
    </>
  );
}

export default memo(ExerciseContainer);
