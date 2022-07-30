import Loading from "@components/common/Loading";
import EditContainer from "@components/form/edit/EditContainer";
import { useWordListByIdQuery } from "@generated/graphql";
import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { getSession, useSession } from "next-auth/react";

const CardEdit: NextPage = () => {
  const { data: session } = useSession();

  const router = useRouter();
  const { id } = router.query;

  const { data, loading } = useWordListByIdQuery({
    variables: {
      request: {
        // @ts-expect-error: session object has custom uid parameter
        userId: session?.user?.uid,
        id: id as string,
      },
    },
  });

  if (loading || !data) {
    return <Loading />;
  }

  const wordList = data.wordListById.items[0];

  return <EditContainer wordList={wordList} />;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {
      session: await getSession(ctx),
    },
  };
};

export default CardEdit;
