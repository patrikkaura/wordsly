import { useCallback, useMemo, useState } from "react";
import type { Word } from "types";

type UseExerciseInput = {
  words: Word[];
};

type UseExerciseReturn = [
  {
    progress: number;
    word: Word;
  },
  () => void
];

const NUMBER_OF_TRIES = 3;

export default function useExercise({
  words,
}: UseExerciseInput): UseExerciseReturn {
  const [stepIndex, setStepIndex] = useState(0);
  const [exercisedWords, _] = useState(() =>
    Array(NUMBER_OF_TRIES).fill(words).flat(1)
  );

  const progress = useMemo(() => {
    return Math.round(((stepIndex + 1) / exercisedWords.length) * 100);
  }, [stepIndex, exercisedWords.length]);

  const setNextStep = useCallback(() => {
    if (stepIndex < NUMBER_OF_TRIES * words.length - 1) {
      setStepIndex(stepIndex + 1);
    }
  }, [stepIndex, words.length]);

  return [
    {
      progress,
      word: exercisedWords[stepIndex],
    },
    setNextStep,
  ];
}
