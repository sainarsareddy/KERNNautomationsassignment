import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import React from "react";

const EmailSubscription = () => {
  return (
    <Box bg="blue.50" p={10} borderRadius="md" mt={8} textAlign="center">
      <Text textColor="grey" fontSize="xl" fontWeight="900" mb={4}>
        Want to receive exclusive discounts and updates straight to your inbox?
      </Text>
      <Flex justify="center">
        <Input
          _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
          transition="all 0.3s ease"
          placeholder="Your Email"
          width="300px"
          mr={2}
        />
        <Button
          _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
          transition="all 0.3s ease"
          textColor="white"
          backgroundColor="blue.300"
        >
          Sign me up
        </Button>
      </Flex>
    </Box>
  );
};

export default EmailSubscription;
