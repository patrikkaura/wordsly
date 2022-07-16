import { CheckIcon, WarningTwoIcon } from "@chakra-ui/icons";
import { Box, Heading, HStack, Slide } from "@chakra-ui/react";
import React, { memo, useMemo } from "react";
import { END_STATUS } from "types/index";

type Props = {
  isVisible: boolean;
  status: END_STATUS;
};

function FooterSlider({ isVisible, status }: Props) {
  const sliderParams = useMemo(() => {
    if (status === END_STATUS.SUCCESS) {
      return {
        text: "SPRÁVNĚ",
        color: "teal.300",
        icon: <CheckIcon boxSize={7} color="gray.50" />,
      };
    } else if (status === END_STATUS.PARTIAL_SUCCESS) {
      return {
        text: "SPRÁVNĚ",
        color: "orange.300",
        icon: <CheckIcon boxSize={7} color="gray.50" />,
      };
    }
    return {
      text: "ŠPATNĚ",
      color: "red.300",
      icon: <WarningTwoIcon boxSize={7} color="gray.50" />,
    };
  }, [status]);

  return (
    <Slide direction="bottom" in={isVisible} style={{ zIndex: 10 }}>
      <Box p={10} bg={sliderParams.color}>
        <HStack>
          {sliderParams.icon}
          <Heading pl={2} as="h1" size="lg" color="gray.50">
            {sliderParams.text}
          </Heading>
        </HStack>
      </Box>
    </Slide>
  );
}

export default memo(FooterSlider);
