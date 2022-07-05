import { Box, Heading } from "@chakra-ui/react";
import { FormTypeEnum } from "@components/form/types";
import React from "react";

import CardFormBaseInput from "./CardFormBaseInput";
import CardFormInput from "./CardFormInput";
import CardFormTable from "./CardFormTable";

type Props = {
  type: FormTypeEnum;
};

const CardForm = ({ type }: Props) => {
  const formTitle =
    type === FormTypeEnum.UPDATE ? `Editace karty` : "Nová karta";

  return (
    <Box p={10}>
      <Heading color="gray.600">{formTitle}</Heading>
      <CardFormBaseInput />
      <CardFormInput />
      <CardFormTable />
    </Box>
  );
};

export default CardForm;
