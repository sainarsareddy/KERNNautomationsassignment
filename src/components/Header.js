import {
  Box,
  Button,
  Flex,
  Spacer,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";

const Header = () => {
  const headerMargin = useBreakpointValue({ base: "20px", md: "100px" });
  const fontSize = useBreakpointValue({ base: "lg", md: "larger" });

  return (
    <Box
      height={{ base: "200px", md: "300px" }}
      bg="white"
      boxShadow="md"
      backgroundImage="url('/images/flight.jpg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Flex
        p={4}
        alignItems="center"
        mr={headerMargin}
        flexDirection={{ base: "column", md: "row" }}
        textAlign={{ base: "center", md: "left" }} // Center text on mobile
      >
        <Box
          textColor="grey"
          fontSize={fontSize}
          fontWeight="900"
          mb={{ base: 4, md: 0 }} 
        >
          <h1>SKYCHEX</h1>
        </Box>
        <Spacer />
        <Flex
          direction={{ base: "column", md: "row" }}
          alignItems={{ base: "center", md: "center" }} 
          mt={{ base: 4, md: 0 }} 
        >
          <Button
            _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
            transition="all 0.3s ease"
            colorScheme="black"
            variant="outline"
            mb={{ base: 2, md: 0 }} // Margin bottom on mobile
            mr={{ base: 0, md: 2 }}
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
      </Flex>
    </Box>
  );
};

export default Header;
