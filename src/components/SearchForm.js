import { Box, Button, Flex, Input, Select } from "@chakra-ui/react";
import React from "react";

const SearchForm = ({ onSearch }) => {
  return (
    <Box
      mt={{ base: "0", md: "-200px" }} // Adjust top margin for mobile
      px={{ base: "4", md: "0" }} // Padding for mobile view
    >
      <Box
        position="absolute"
        mt={{ base: "10px", md: "-20px" }} // Adjust margin top for mobile
        mx={{ base: "10px", md: "480px" }} // Center horizontally on mobile
        bgColor="white"
        borderRadius={8}
        padding="2px"
        width={{ base: "auto", md: "300px" }} // Adjust width for mobile
        zIndex={1} // Ensure it appears above other elements
      >
        <Flex
          ml={{ base: "20", md: "0" }}
          borderRadius={50}
          mb={4}
          direction={{ base: "row", md: "row" }}
        >
          <Button
            _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
            transition="all 0.3s ease"
            bgColor="blue.300"
            flex={{ base: "1", md: "1" }} // Flex grow to fill available space on mobile
            mb={{ base: 2, md: 0 }} // Margin bottom for mobile view
            mr={{ base: "1", md: "1" }} // Margin right for larger screens
            color="white"
          >
            Return
          </Button>
          <Button
            _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
            transition="all 0.3s ease"
            flex={{ base: "1", md: "1" }} // Flex grow to fill available space on mobile
            colorScheme="gray"
          >
            One way
          </Button>
        </Flex>
      </Box>
      <Box
        width={{ base: "100%", md: "800px" }} // Full width on mobile
        bg="white"
        borderRadius="10px"
        ml={{ base: "0", md: "220px" }} // Adjust left margin for larger screens
        boxShadow="2xl"
        mt={{ base: "20px", md: "100px" }} // Adjust top margin for mobile
        p={{ base: "4", md: "6" }} // Padding for mobile view
      >
        <Flex
          direction={{ base: "column", md: "row" }}
          position="relative"
          mx={{ base: "4", md: "20px" }} // Margin for mobile view
          pt="40px"
        >
          <Flex
            mb={4}
            direction={{ base: "column", md: "row" }} // Stack inputs vertically on mobile
            width="100%" // Full width on mobile
          >
            <Input
              _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
              transition="all 0.3s ease"
              placeholder="Gdansk (GDN)"
              mb={{ base: 2, md: 0 }}
              mr={{ base: "0", md: "2" }}
              width={{ base: "auto", md: "80%" }} // Full width on mobile
              zIndex={1}
            />
            <Input
              _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
              transition="all 0.3s ease"
              placeholder="Poznan (POZ)"
              width={{ base: "100%", md: "60%" }} // Full width on mobile
            />
          </Flex>
          <Flex
            mb={4}
            direction={{ base: "column", md: "row" }} // Stack inputs vertically on mobile
            width="100%" // Full width on mobile
          >
            <Input
              _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
              transition="all 0.3s ease"
              width={{ base: "100%", md: "150px" }} // Full width on mobile
              type="datetime-local"
              placeholder="Departure"
              mb={{ base: 2, md: 0 }}
              mx={{ base: "0", md: "2" }}
            />
            <Input
              _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
              transition="all 0.3s ease"
              width={{ base: "100%", md: "100px" }} // Full width on mobile
              textColor="black"
              placeholder="Return"
              mb={{ base: 2, md: 0 }}
              mr={{ base: "0", md: "2" }}
            />
          </Flex>
          <Flex>
            <Select
              _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
              transition="all 0.3s ease"
              placeholder="Passengers and class"
              width={{ base: "100%", md: "130px" }} // Full width on mobile
            />
          </Flex>
          <Button
            _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
            transition="all 0.3s ease"
            bgColor="blue.300"
            colorScheme="blue"
            width={{ base: "100%", md: "150px" }} // Full width on mobile
            ml={2}
            onClick={onSearch}
          >
            Search
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default SearchForm;
