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
    img: "/path/to/rome.jpg",
  },
  {
    city: "Lisbon",
    country: "Portugal",
    price: "$110",
    img: "/path/to/lisbon.jpg",
  },
  {
    city: "Amsterdam",
    country: "Netherlands",
    price: "$110",
    img: "/path/to/amsterdam.jpg",
  },
];

const PopularDestinations = () => {
  return (
    <Box mt={8} textAlign="center">
      <Text textColor="grey" fontSize="xl" fontWeight="800" mb={8}>
        Popular right now
      </Text>
      <Flex justify="space-around">
        {destinations.map((dest) => (
          <Box key={dest.city} textAlign="center">
            <Image
              height="200px"
              src={dest.img}
              alt={dest.city}
              borderRadius="md"
            />
            <Text mt={2} fontWeight="bold">
              {dest.city}
            </Text>
            <Text>{dest.country}</Text>
            <Text color="blue.500">{dest.price}</Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default PopularDestinations;
