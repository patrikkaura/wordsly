import { Heading, Text } from "@chakra-ui/react";

const LoginHeading = () => {
  return (
    <>
      <Heading
        as="h1"
        mb={4}
        fontSize={{
          base: "3xl",
          md: "4xl",
        }}
        fontWeight="bold"
        lineHeight={{
          base: "shorter",
          md: "none",
        }}
        color="gray.900"
        letterSpacing={{
          base: "normal",
          md: "tight",
        }}
      >
        Ready to start learning?
      </Heading>
      <Text
        mb={{
          base: 10,
          md: 4,
        }}
        fontSize={{
          base: "lg",
          md: "xl",
        }}
        fontWeight="thin"
        color="gray.500"
        letterSpacing="wider"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet
        elementum tortor, at lacinia felis. Maecenas tortor dui, pulvinar eget
        ligula vel, accumsan imperdiet neque.
      </Text>
    </>
  );
};

export default LoginHeading;
