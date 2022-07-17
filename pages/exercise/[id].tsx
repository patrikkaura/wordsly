import Loading from "@components/common/Loading";
import ExerciseContainer from "@components/exercise/ExerciseContainer";
import { useWordsQuery } from "@generated/graphql";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const Exercise: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, loading } = useWordsQuery({
    variables: {
      request: {
        id: id as string,
      },
    },
  });

  if (loading || !data) {
    return <Loading />;
  }

  const items = data?.words.items || [];

  return <ExerciseContainer id={id as string} items={items} />;
};

export default Exercise;
