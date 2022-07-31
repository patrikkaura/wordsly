import CardsOverviewContainer from "@components/cards/overview/CardsOverviewContainer";
import Loading from "@components/common/Loading";
import { useAllWordListsQuery } from "@generated/graphql";
import requireAuthentication from "@utils/requireAuthentication";
import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import { useSession } from "next-auth/react";
import { Session } from "types/index";

const Home: NextPage = () => {
  const { data: session } = useSession();

  const { data, loading } = useAllWordListsQuery({
    fetchPolicy: "no-cache",
    variables: {
      request: {
        // @ts-expect-error: session object has custom uid parameter
        userId: session?.user?.uid,
      },
    },
  });

  if (loading || !data) {
    return <Loading />;
  }

  const items = data.wordList.items;

  return <CardsOverviewContainer items={items} />;
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

export default Home;
