import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import EditContainer from '@components/form/edit/EditContainer';
import Loading from '@components/common/Loading';
import { useWordListByIdQuery } from '@generated/graphql';

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

  const { id: wordListId, name, words } = data.wordListById.items[0];

  return <EditContainer id={wordListId} name={name} words={words} />;
};

export default CardEdit;
