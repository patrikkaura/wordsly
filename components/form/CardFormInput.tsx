import React, { memo, useState, useCallback } from 'react';
import {
  Button,
  VStack,
  HStack,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { FiSave } from 'react-icons/fi';

enum WORD_INPUT {
  CZECH = 'czech',
  ENGLISH = 'english',
}

const CardFormInput = () => {
  const [czechWord, setCzechWord] = useState('');
  const [englishWord, setEnglishWord] = useState('');

  const handleChangeWord = useCallback(
    ({ target: { value, name } }: React.ChangeEvent<HTMLInputElement>) => {
      if (name === WORD_INPUT.CZECH) {
        setCzechWord(value);
      } else {
        setEnglishWord(value);
      }
    },
    [],
  );

  return (
    <HStack gap={2} py={10} alignItems="flex-end">
      <FormControl isRequired>
        <FormLabel>Česky</FormLabel>
        <Input
          value={czechWord}
          name={WORD_INPUT.CZECH}
          placeholder="Napiš české slovo ..."
          onChange={handleChangeWord}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Anglicky</FormLabel>
        <Input
          value={englishWord}
          name={WORD_INPUT.ENGLISH}
          placeholder="Napiš anglické slovo ..."
          onChange={handleChangeWord}
        />
      </FormControl>
      <VStack>
        <Button
          w="140px"
          colorScheme="green"
          aria-label="add-word"
          leftIcon={<AddIcon />}
        >
          Přidat slovo
        </Button>
        <Button
          w="140px"
          colorScheme="blue"
          aria-label="save-card"
          leftIcon={<FiSave />}
        >
          Uložit
        </Button>
      </VStack>
    </HStack>
  );
};

export default memo(CardFormInput);
