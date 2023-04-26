import {
  Box,
  Button,
  CloseButton,
  Flex,
  IconButton,
  Link,
  useBoolean,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const [flag, setFlag] = useBoolean(false);
  const links = [
    {
      to: "/",
      label: "Home",
    },
    {
      to: "/about",
      label: "About",
    },
    {
      to: "/content",
      label: "Content",
    },
    {
      to: "/login",
      label: "Login",
    },
  ];
  return (
    <Box>
      <Box pos="fixed" top="1rem" right="1rem" align="center" zIndex="20">
        <Flex display={{ base: "none", md: "flex" }}>
          {links.map((link) => (
            <Link key={link.to} as={ReactRouterLink} to={link.to}>
              <Button variant="ghost">{link.label}</Button>
            </Link>
          ))}
        </Flex>
        <IconButton
          onClick={setFlag.on}
          display={{ base: "block", md: "none" }}
          icon={<HamburgerIcon />}
        ></IconButton>
      </Box>
      {flag && (
        <Box
          pos="fixed"
          top="0"
          left="0"
          w="100vw"
          h="100vh"
          bgColor="white"
          zIndex="20"
          overflowY="auto"
          display={{ base: "block", md: "none" }}
        >
          <Flex>
            <Box pos="fixed" top="1rem" right="1rem">
              <IconButton
                icon={<CloseButton />}
                onClick={setFlag.off}
              ></IconButton>
            </Box>
          </Flex>
          <Flex mt="2rem" justifyContent="center">
            <Flex direction="column" align="center">
              {links.map((link) => (
                <Link key={link.to} as={ReactRouterLink} to={link.to}>
                  <Button variant="ghost">{link.label}</Button>
                </Link>
              ))}
            </Flex>
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;


// `https://stock-server.onrender.com/products?category=${category}&_limit=12&_page=${page}&_sort=price&_order=${order}`