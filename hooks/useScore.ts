import { useCallback, useMemo, useState } from "react";
import { END_STATUS } from "types";

type ScoreEndStatusMapping = Record<END_STATUS, number>;

type UseScoreInput = {
  numberOfWords: number;
};

type UseScoreReturn = [number, (value: number) => void];

const scoreEndStatusMapping: ScoreEndStatusMapping = {
  [END_STATUS.SUCCESS]: 1,
  [END_STATUS.PARTIAL_SUCCESS]: 0.5,
  [END_STATUS.FAILED]: 0,
};

export default function useScore({
  numberOfWords,
}: UseScoreInput): UseScoreReturn {
  const perfectScore = numberOfWords * 3;
  const [score, setScore] = useState(0);

  const rating = useMemo(() => {
    const newRating = Math.floor((score * 5) / perfectScore);

    if (newRating < 0) {
      return 0;
    }
    return newRating;
  }, [perfectScore, score]);

  const updateScore = useCallback(
    (endStatus: END_STATUS) => {
      setScore(score + scoreEndStatusMapping[endStatus]);
    },
    [score]
  );

  return [rating, updateScore];
}
