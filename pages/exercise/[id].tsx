import Loading from "@components/common/Loading";
import ExerciseContainer from "@components/exercise/ExerciseContainer";
import { useWordsQuery } from "@generated/graphql";
import requireAuthentication from "@utils/requireAuthentication";
import type { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { Session } from "types/index";

const Exercise: NextPage = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const { id } = router.query;

  const { data, loading } = useWordsQuery({
    variables: {
      request: {
        id: id as string,
        // @ts-expect-error: session object has custom uid parameter
        userId: session?.user?.uid,
      },
    },
  });

  if (loading || !data) {
    return <Loading />;
  }

  const items = data?.words.items || [];

  return <ExerciseContainer id={id as string} items={items} />;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return requireAuthentication(ctx, ({ session }: { session: Session }) => {
    return {
      props: {
        session,
      },
    };
  });
};

export default Exercise;
