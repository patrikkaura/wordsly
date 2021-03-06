import { Box, Center, Heading, SimpleGrid } from "@chakra-ui/react";
import { memo, useCallback } from "react";

type Props = {
  guessedWord: string;
  translation: string;
};

function Letter({ guessedWord, translation }: Props) {
  const getColor = useCallback(
    (letter: string, index: number) => {
      if (translation.indexOf(letter, index) == index) {
        return "teal.200";
      }
      return "white";
    },
    [translation]
  );

  return (
    <SimpleGrid columns={guessedWord.length} spacing={2}>
      {guessedWord.split("").map((letter, index) => (
        <Box
          key={index}
          borderWidth={1}
          w={10}
          h={10}
          borderRadius="lg"
          bgColor={getColor(letter, index)}
        >
          <Center>
            <Heading size="lg">{letter.toUpperCase()}</Heading>
          </Center>
        </Box>
      ))}
    </SimpleGrid>
  );
}

export default memo(Letter);
