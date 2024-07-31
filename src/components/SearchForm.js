import { Box, Button, Flex, Input, Select } from "@chakra-ui/react";
import React from "react";

const SearchForm = () => {
  return (
    <Box>
      <Box position={"absolute"} mx="520px">
        <Flex borderRadius={50} mb={4}>
          <Button bgColor="blue.300" flex="1" mr={1} color="white">
            Return
          </Button>
          <Button flex="1" colorScheme="gray">
            One way
          </Button>
        </Flex>
      </Box>
      <Box
        width="800px"
        bg="white"
        borderRadius="10px"
        ml="220px"
        boxShadow="2xl"
        mt="100px"
      >
        <Flex position={"relative"} mx="30px" pt="80px">
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
          <Button bgColor="blue.300" colorScheme="blue" mx="20px" width="20%">
            Search
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default SearchForm;
