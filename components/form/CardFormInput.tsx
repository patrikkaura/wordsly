import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import type { CreateForm, EditForm } from "@components/form/types";
import React, { memo, useCallback } from "react";
import { useFormContext } from "react-hook-form";
import { FiSave } from "react-icons/fi";

const CardFormInput = () => {
  const {
    register,
    formState: { errors },
    watch,
    resetField,
    setValue,
  } = useFormContext<CreateForm | EditForm>();
  const [words, { original, translation }] = watch(["words", "formState"]);

  const handleAddWord = useCallback(() => {
    setValue("words", [...words, { original, translation }]);
    resetField("formState");
  }, [words, original, translation, setValue, resetField]);

  return (
    <SimpleGrid minChildWidth="300px" columns={3} spacing={5} py={10}>
      <Box>
        <FormControl isInvalid={Boolean(errors.formState?.original?.type)}>
          <FormLabel>Původní slovo</FormLabel>
          <Input
            {...register("formState.original", {
              required: false,
              minLength: 2,
              maxLength: 15,
            })}
            placeholder="Napiš původní slovo ..."
          />
          <FormErrorMessage>
            Délka slova musí být v rozsahu 2 až 15 písmen.
          </FormErrorMessage>
        </FormControl>
      </Box>
      <Box>
        <FormControl isInvalid={Boolean(errors.formState?.translation?.type)}>
          <FormLabel>Překlad</FormLabel>
          <Input
            {...register("formState.translation", {
              required: false,
              minLength: 2,
              maxLength: 15,
            })}
            placeholder="Napiš překlad slova ..."
          />
          <FormErrorMessage>
            Délka slova musí být v rozsahu 3 až 15 písmen.
          </FormErrorMessage>
        </FormControl>
      </Box>
      <Box>
        <VStack>
          <Button
            w="100%"
            colorScheme="green"
            aria-label="add-word"
            leftIcon={<AddIcon />}
            disabled={
              !original ||
              !translation ||
              Boolean(errors.formState?.original?.type) ||
              Boolean(errors.formState?.translation?.type)
            }
            onClick={handleAddWord}
          >
            Přidat slovo
          </Button>
          <Button
            type="submit"
            w="100%"
            colorScheme="blue"
            aria-label="save-card"
            leftIcon={<FiSave />}
            disabled={words.length < 2}
          >
            Uložit kartu
          </Button>
        </VStack>
      </Box>
    </SimpleGrid>
  );
};

export default memo(CardFormInput);
