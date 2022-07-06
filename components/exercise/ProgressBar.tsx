import { CloseIcon } from "@chakra-ui/icons";
import { Center, IconButton,Progress } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { memo } from "react";

type Props = {
  progress: number;
};

function ProgressBar({ progress }: Props) {
  const router = useRouter();

  return (
    <Center>
      <Progress
        w="80%"
        hasStripe
        isAnimated
        rounded={10}
        value={progress}
        colorScheme="teal"
      />
      <IconButton
        ml={5}
        rounded="full"
        aria-label="close"
        variant="ghost"
        icon={<CloseIcon />}
        onClick={() => router.push("/")}
      />
    </Center>
  );
}

export default memo(ProgressBar);
