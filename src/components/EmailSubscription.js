import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import React from "react";

const EmailSubscription = () => {
  return (
    <Box bg="blue.50" p={6} borderRadius="md" mt={8} textAlign="center">
      <Text fontSize="lg" fontWeight="bold" mb={4}>
        Want to receive exclusive discounts and updates straight to your inbox?
      </Text>
      <Flex justify="center">
        <Input placeholder="Your Email" width="300px" mr={2} />
        <Button colorScheme="blue">Sign me up</Button>
      </Flex>
    </Box>
  );
};

export default EmailSubscription;
