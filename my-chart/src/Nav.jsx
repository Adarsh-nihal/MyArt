import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Nav = () => {
  return (
    <Box
      position="fixed"
      bottom="10px"
      left="10px"
      right="10px"
      boxShadow="rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset"
      borderRadius={"20px"}
      padding="5px"
      bg="white"
    >
      <Flex w="90%" margin="auto" justify={"space-evenly"} textAlign={"center"}>
        <Box>
          <HamburgerIcon fontSize={"25px"} />
          <Text fontWeight={"800"} fontSize={"12px"}>
            Home
          </Text>
        </Box>
        <Box>
          <HamburgerIcon fontSize={"25px"} />
          <Text fontWeight={"800"} fontSize={"12px"}>
            Home
          </Text>
        </Box>
        <Box>
          <HamburgerIcon fontSize={"25px"} />
          <Text fontWeight={"800"} fontSize={"12px"}>
            Home
          </Text>
        </Box>
        <Box>
          <HamburgerIcon fontSize={"25px"} />
          <Text fontWeight={"800"} fontSize={"12px"}>
            Home
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Nav;
