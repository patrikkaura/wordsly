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
} from '@chakra-ui/react';
import { MinusIcon } from '@chakra-ui/icons';

import type { Word } from 'types';

type Props = {
  words?: Word[];
};

const CardFormTable = ({ words = [] }: Props) => {
  return (
    <TableContainer p={6} borderWidth={1} borderRadius={20}>
      <Table>
        <TableCaption>Pocet slov: {words.length}</TableCaption>
        <Thead>
          <Tr>
            <Th>České slovo</Th>
            <Th>Anglické slovo</Th>
            <Th textAlign="center">Odebrat</Th>
          </Tr>
        </Thead>
        <Tbody>
          {
            // @ts-ignore
            words.map(({ original, translation }, index) => (
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
                  />
                </Td>
              </Tr>
            ))
          }
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default CardFormTable;
