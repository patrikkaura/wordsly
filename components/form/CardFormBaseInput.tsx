import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  SimpleGrid,
} from "@chakra-ui/react";
import type { CreateForm, EditForm } from "@components/form/types";
import React, { memo } from "react";
import { useFormContext } from "react-hook-form";

const CardFormBaseInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<CreateForm | EditForm>();

  return (
    <SimpleGrid minChildWidth="300px" columns={2} spacing={5} pt={10}>
      <Box>
        <FormControl isRequired isInvalid={Boolean(errors.name?.type)}>
          <FormLabel>Jméno karty</FormLabel>
          <Input
            {...register("name", {
              required: true,
              minLength: 3,
              maxLength: 15,
            })}
            placeholder="Napiš jméno karty ..."
          />
          <FormErrorMessage>
            Délka jména musí být v rozsahu 3 až 15 písmen.
          </FormErrorMessage>
        </FormControl>
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Popis karty</FormLabel>
          <Input
            {...register("description", { required: false })}
            placeholder="Napiš popis karty ..."
          />
        </FormControl>
      </Box>
    </SimpleGrid>
  );
};

export default memo(CardFormBaseInput);
