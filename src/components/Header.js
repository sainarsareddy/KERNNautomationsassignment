import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import React from "react";

const Header = () => {
  return (
    <Box
      bg="white"
      boxShadow="md"
      borderRadius="md"
      mb={8}
      backgroundImage="url('/public/images/flight.jpg')" // Add the path to your background image here
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Flex p={4} alignItems="center">
        <Box>
          <h1>SKYCHEX</h1>
        </Box>
        <Spacer />
        <Button colorScheme="black" variant="outline" mr={4}>
          Sign Up
        </Button>
        <Button textColor="black" bgColor="white" colorScheme="blue">
          Login
        </Button>
      </Flex>
    </Box>
  );
};

export default Header;
