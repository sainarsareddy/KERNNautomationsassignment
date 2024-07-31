import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const destinations = [
  {
    city: "Paris",
    country: "France",
    price: "$110",
    img: "/images/paris.jpg",
  },
  {
    city: "Rome",
    country: "Italy",
    price: "$110",
    img: "/images/rome.jpg",
  },
  {
    city: "Lisbon",
    country: "Portugal",
    price: "$110",
    img: "/images/lisbon.jpg",
  },
  {
    city: "Amsterdam",
    country: "Netherlands",
    price: "$110",
    img: "/images/amsterdam.jpg",
  },
];

const PopularDestinations = () => {
  return (
    <Box mt={8} textAlign="center">
      <Text textColor="grey" fontSize="xl" fontWeight="800" my="50px">
        Popular right now
      </Text>
      <Flex
        direction={{ base: "column", md: "row" }}
        mx="80px"
        justify="space-around"
      >
        {destinations.map((dest) => (
          <Box
            _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
            transition="all 0.3s ease"
            borderRadius={20}
            boxShadow="xl"
            key={dest.city}
            textAlign="center"
          >
            <Image
              _hover={{ transform: "scale(1.10)", boxShadow: "lg" }}
              transition="all 0.3s ease"
              height="220px"
              src={dest.img}
              alt={dest.city}
              borderRadius={20}
            />
            <Flex padding={4} justifyContent="space-between">
              <Box>
                <Text fontWeight="bold">{dest.city}</Text>
                <Text>{dest.country}</Text>
              </Box>
              <Box>
                <Text fontWeight="900" color="blue.300">
                  {dest.price}
                </Text>
                <Text>Starting at</Text>
              </Box>
            </Flex>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default PopularDestinations;
