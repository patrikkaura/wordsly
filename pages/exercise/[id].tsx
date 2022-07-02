import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import ExerciseContainer from '@components/exercise/ExerciseContainer';

const Exercise: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <ExerciseContainer id={id as string} />;
};

export default Exercise;
