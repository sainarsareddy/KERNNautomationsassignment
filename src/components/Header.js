import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import React from "react";

const Header = () => {
  return (
    <Box
      height="300px"
      bg="white"
      boxShadow="md"
      backgroundImage="url('/images/flight.jpg')" // Add the path to your background image here
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Flex p={4} alignItems="center" mr="100px">
        <Box textColor="grey" fontSize="larger" fontWeight="900" ml="50px">
          <h1>SKYCHEX</h1>
        </Box>
        <Spacer />
        <Button
          _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
          transition="all 0.3s ease"
          colorScheme="black"
          variant="outline"
          mr={4}
        >
          Sign Up
        </Button>
        <Button
          _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
          transition="all 0.3s ease"
          textColor="black"
          bgColor="white"
          paddingX="30px"
          colorScheme="blue"
        >
          Login
        </Button>
      </Flex>
    </Box>
  );
};

export default Header;
