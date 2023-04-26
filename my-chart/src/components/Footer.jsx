import {
  Button,
  Flex,
  HStack,
  Link,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  const dummyLinks = new Array(12).fill(0).map((_, i) => `Link ${i + 1}`);
  return (
    <VStack py={10} bg="gray.200" mt={8}>
      <Flex align="center" justify="center">
        <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing="2rem">
          {dummyLinks.map((el) => (
            <Link key={el}>
              <Button variant="ghost">{el}</Button>
            </Link>
          ))}
        </SimpleGrid>
      </Flex>
      <HStack>
        <Text>&copy;{new Date().getFullYear()} Gotham Coffee Shop</Text>
        <Text>|</Text>
        <Text>All rights reserved</Text>
      </HStack>
    </VStack>
  );
};

export default Footer;
