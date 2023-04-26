import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";

const About = () => {
  const buttonTextSize = useBreakpointValue({
    base: "sm",
    md: "md",
    lg: "lg",
  });
  return (
    <VStack minHeight="70vh" align="center" justify="center">
      <Box>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to Gotham Coffee Shop
        </Heading>
        <Text fontSize="xl" textAlign="center">
          We are in this business since 1960
        </Text>
      </Box>
      <Flex mt={12}>
        <Button variant="outline" colorScheme="pink" size={buttonTextSize}>
          {" "}
          Continue Shopping{" "}
        </Button>
        <Button variant="outline" colorScheme="pink" size={buttonTextSize}>
          Learn More
        </Button>
      </Flex>
    </VStack>
  );
};

export default About;
