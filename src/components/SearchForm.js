import { Box, Button, Flex, Input, Select } from "@chakra-ui/react";
import React from "react";

const SearchForm = () => {
  return (
    <Box mt="-200px">
      <Box
        position={"absolute"}
        mt="-20px"
        mx="480px"
        bgColor="white"
        borderRadius={8}
        padding="2px"
        width="300px"
      >
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
        <Flex position={"relative"} mx="30px" pt="60px">
          <Flex mb={4}>
            <Input placeholder="Gdansk (GDN)" mr={2} />
            <Input placeholder="Poznan (POZ)" />
          </Flex>
          <Flex mb={4}>
            <Input
              width="150px"
              type="datetime-local"
              placeholder="Departure"
              mx={2}
            />
            <Input
              width="100px"
              textColor="black"
              placeholder="Return"
              mr={2}
            />
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
