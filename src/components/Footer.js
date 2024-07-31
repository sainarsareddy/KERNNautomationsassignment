import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box bg="darkblue" color="white" p={8} mt={8}>
      <Text fontSize="xl" fontWeight="bold">
        skychex
      </Text>
      <Flex justify="space-between" wrap="wrap">
        <Flex justify="space-between">
          <Text width="350px">
            Whether you’re planning a vacation, a business trip or simply on
            your way to your next adventure, skychex offers friendly and
            comprehensive solutions to meet your flight booking needs.
          </Text>

          <HStack mx="40" align="start" spacing={8}>
            <VStack align="start" spacing={2}>
              <Text fontWeight="bold">Book with us</Text>
              <Text>Home</Text>
              <Text>About us</Text>
              <Text>Contact</Text>
            </VStack>
            <VStack align="start" spacing={2}>
              <Text fontWeight="bold">My booking</Text>
              <Text>Manage my booking</Text>
              <Text>Help centre</Text>
              <Text>FAQs</Text>
            </VStack>
            <VStack align="start" spacing={2}>
              <Text fontWeight="bold">Company</Text>
              <Text>About us</Text>
              <Text>Reviews</Text>
              <Text>Careers</Text>
            </VStack>
          </HStack>
        </Flex>
      </Flex>
      <Flex px={40} justify="space-around" mt={8}>
        <Text>Privacy</Text>
        <Text>|</Text>
        <Text>Terms</Text>
        <Text>|</Text>
        <Text>Sitemap</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
