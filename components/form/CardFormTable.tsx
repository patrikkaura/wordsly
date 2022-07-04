import { memo, useCallback } from "react";
import {
  IconButton,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
} from "@chakra-ui/react";
import { MinusIcon } from "@chakra-ui/icons";
import { useFormContext } from "react-hook-form";

import type { CreateForm, EditForm } from "@components/form/types";
import type { Word } from "types";

const CardFormTable = () => {
  const { watch, setValue } = useFormContext<CreateForm | EditForm>();
  const words = watch("words");

  const handleRemoveWord = useCallback(
    (index: number) => {
      const updatedWords = words.filter(
        (_: Word, wordIndex: number) => wordIndex !== index
      );

      setValue("words", updatedWords);
    },
    [words]
  );

  return (
    <TableContainer p={6} borderWidth={1} borderRadius={20}>
      <Table size="sm">
        {Boolean(words.length) && (
          <TableCaption>{`Počet slov ${words.length}`}</TableCaption>
        )}
        <Thead>
          <Tr>
            <Th>Původní slovo</Th>
            <Th>Překlad slova</Th>
            <Th textAlign="center">Odebrat</Th>
          </Tr>
        </Thead>
        <Tbody>
          {words.map(({ original, translation }: Word, index: number) => (
            <Tr key={index}>
              <Td>{original}</Td>
              <Td>{translation}</Td>
              <Td textAlign="center">
                <IconButton
                  variant="ghost"
                  rounded="full"
                  colorScheme="red"
                  aria-label="remove-word"
                  icon={<MinusIcon />}
                  onClick={() => handleRemoveWord(index)}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default memo(CardFormTable);
