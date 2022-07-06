import Loading from "@components/common/Loading";
import EditContainer from "@components/form/edit/EditContainer";
import { useWordListByIdQuery } from "@generated/graphql";
import type { NextPage } from "next";
import { useRouter } from "next/router";

const CardEdit: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, loading } = useWordListByIdQuery({
    variables: {
      request: {
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

export default CardEdit;
