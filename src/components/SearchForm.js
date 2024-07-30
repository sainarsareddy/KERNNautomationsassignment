import { Box, Button, Flex, Input, Select } from "@chakra-ui/react";
import React from "react";

const SearchForm = () => {
  return (
    <Box bg="white" p={6} borderRadius="md" boxShadow="md" mt={4}>
      <Flex mb={4}>
        <Button flex="1" mr={2} colorScheme="blue">
          Return
        </Button>
        <Button flex="1" colorScheme="gray">
          One way
        </Button>
      </Flex>
      <Flex mb={4}>
        <Input placeholder="From" mr={2} />
        <Input placeholder="To" />
      </Flex>
      <Flex mb={4}>
        <Input placeholder="Departure" mr={2} />
        <Input placeholder="Return" />
      </Flex>
      <Flex mb={4}>
        <Select placeholder="Passengers and class" />
      </Flex>
      <Button colorScheme="blue" width="100%">
        Search
      </Button>
    </Box>
  );
};

export default SearchForm;
