import { CloseIcon, RepeatIcon, StarIcon } from "@chakra-ui/icons";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Center,
  Heading,
  HStack,
  VStack,
} from "@chakra-ui/react";
import range from "lodash/range";
import { useRouter } from "next/router";
import React, { memo, useCallback, useMemo, useRef } from "react";

type Props = {
  isVisible: boolean;
  rating: number;
};

function ResultDialog({ isVisible, rating }: Props) {
  const router = useRouter();
  const alertDialogRef = useRef<HTMLDivElement>(null);

  const resultMessage = useMemo(() => {
    if (rating === 5) {
      return "Skvěle!";
    } else if (rating === 0) {
      return "Takhle by to nešlo!";
    }

    return "Dobrá práce!";
  }, [rating]);

  const ratingStars = useMemo(() => {
    return range(5).map((index) => {
      const color = index < rating ? "yellow.400" : "gray.200";

      return <StarIcon key={index} boxSize={10} color={color} />;
    });
  }, [rating]);

  const handleClose = useCallback(async () => {
    await router.push("/");
  }, [router]);

  return (
    <AlertDialog
      isCentered
      isOpen={isVisible}
      motionPreset="scale"
      leastDestructiveRef={alertDialogRef}
      onClose={handleClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader textAlign="center" pt={10}>
            <Heading as="h1" size="2xl" color="gray.600">
              {resultMessage}
            </Heading>
          </AlertDialogHeader>
          <AlertDialogBody p={8}>
            <Center>
              <HStack spacing={3} alignItems="center">
                {ratingStars}
              </HStack>
            </Center>
          </AlertDialogBody>
          <AlertDialogFooter>
            <VStack w="100%">
              <Button
                disabled
                w="100%"
                leftIcon={<RepeatIcon />}
                onClick={() => {}}
                colorScheme="blue"
              >
                Opakovat
              </Button>
              <Button
                w="100%"
                colorScheme="red"
                leftIcon={<CloseIcon boxSize={3} />}
                onClick={handleClose}
              >
                Odejít
              </Button>
            </VStack>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

export default memo(ResultDialog);
