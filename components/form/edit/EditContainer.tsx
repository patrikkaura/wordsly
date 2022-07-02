import { memo } from 'react';

import type { Word } from 'types';

import CardForm from '../CardForm';

type Props = {
  id: string;
  name: string;
  words: Word[];
};

function EditContainer({ id, name, words }: Props) {
  return <CardForm id={id} name={name} words={words} />;
}

export default memo(EditContainer);
