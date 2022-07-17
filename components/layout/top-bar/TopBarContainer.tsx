import { Box, Divider, Flex, Heading, Spacer } from "@chakra-ui/react";
import Link from "next/link";
import { memo } from "react";

import TopBarMenu from "./TopBarMenu";

function TopBarContainer() {
  return (
    <header className="top-bar">
      <Box w="100%" p={2}>
        <Flex alignItems="center">
          <Heading size="lg">
            <Link href="/">WORDSLY</Link>
          </Heading>
          <Spacer />
          <TopBarMenu />
        </Flex>
      </Box>
      <Divider />
    </header>
  );
}

export default memo(TopBarContainer);
