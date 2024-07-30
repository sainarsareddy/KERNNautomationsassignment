import { Box, Button, Flex, Image, Spacer } from "@chakra-ui/react";
import React from "react";

const Header = () => {
  return (
    <Flex bg="blue.50" p={4} alignItems="center">
      <Box>
        <Image src="/path/to/logo.png" alt="Logo" boxSize="40px" />
      </Box>
      <Spacer />
      <Button colorScheme="blue" variant="outline" mr={4}>
        USD
      </Button>
      <Button colorScheme="blue">Sign Up</Button>
    </Flex>
  );
};

export default Header;
