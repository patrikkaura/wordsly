import React, { useCallback, useState } from "react";

type UseGuessInput = {
  translation: string;
};

type UseGuessOutput = [
  { currentGuess: string; guessedWords: string[] },
  (event: React.ChangeEvent<HTMLInputElement>) => void,
  () => void,
  () => void
];

export default function useGuess({
  translation,
}: UseGuessInput): UseGuessOutput {
  const [currentGuess, setCurrentGuess] = useState("");
  const [guessedWords, setGuessedWords] = useState<string[]>([]);

  const handleSetCurrentGuess = useCallback(
    ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
      if (
        value.length > currentGuess.length &&
        value.length <= translation.length
      ) {
        setCurrentGuess(value);
      }
    },
    [currentGuess.length, translation.length]
  );

  const handleResetGuesses = useCallback(() => {
    setCurrentGuess("");
    setGuessedWords([]);
  }, []);

  const handleSetGuesses = useCallback(() => {
    setGuessedWords([...guessedWords, currentGuess]);
    setCurrentGuess("");
  }, [currentGuess, guessedWords]);

  return [
    { currentGuess, guessedWords },
    handleSetCurrentGuess,
    handleSetGuesses,
    handleResetGuesses,
  ];
}
