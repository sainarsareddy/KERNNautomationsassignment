import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import React from "react";

const Header = () => {
  return (
    <Flex bgImage={"/"} p={4} alignItems="center">
      <Box>
        <h1>SKYCHEX</h1>
      </Box>
      <Spacer />
      <Button colorScheme="black" variant="outline" mr={4}>
        Login
      </Button>
      <Button colorScheme="black">Sign Up</Button>
    </Flex>
  );
};

export default Header;
