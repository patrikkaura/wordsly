import { useState, useCallback, memo, useMemo } from 'react';

import { useWordsQuery } from '@generated/graphql';
import Loading from '@components/common/Loading';

import WordCardsContainer from './word-cards/WordCardsContainer';

type Props = {
  id: string;
};

function ExerciseContainer({ id }: Props) {
  const [stepIndex, setStepIndex] = useState(0);

  const { data, loading } = useWordsQuery({
    variables: {
      request: {
        id,
      },
    },
  });

  const items = data?.words.items || [];

  const progress = useMemo(() => {
    return Math.round(((stepIndex + 1) / items.length) * 100);
  }, [items.length, stepIndex]);

  const handleSetStepIndex = useCallback(() => {
    if (stepIndex === items.length - 1) {
      setStepIndex(0);
    } else {
      setStepIndex(stepIndex + 1);
    }
  }, [items.length, stepIndex]);

  if (loading || !data) {
    return <Loading />;
  }

  return (
    <WordCardsContainer
      progress={progress}
      word={items[stepIndex]}
      onSetStepIndex={handleSetStepIndex}
    />
  );
}

export default memo(ExerciseContainer);
