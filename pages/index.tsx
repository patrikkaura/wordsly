import type { NextPage } from "next";

import CardsOverviewContainer from "@components/cards/overview/CardsOverviewContainer";
import { useAllWordListsQuery } from "@generated/graphql";
import Loading from "@components/common/Loading";

const Home: NextPage = () => {
  const { data, loading } = useAllWordListsQuery({
    fetchPolicy: "no-cache",
  });

  if (loading || !data) {
    return <Loading />;
  }

  const items = data.wordList.items;

  return <CardsOverviewContainer items={items} />;
};

export default Home;
