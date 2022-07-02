import { Box, Heading } from '@chakra-ui/react';

import type { Word } from 'types';

import CardFormInput from './CardFormInput';
import CardFormTable from './CardFormTable';

type Props = {
  id?: string;
  name?: string;
  words?: Word[];
};

const CardForm = ({ id, name, words = [] }: Props) => {
  const formTitle = id ? `Editace karty: ${name}` : 'Nove karty';

  return (
    <Box p={10}>
      <Heading color="gray.600">{formTitle}</Heading>
      <CardFormInput />
      <CardFormTable words={words} />
    </Box>
  );
};

export default CardForm;
