import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";

const deals = [
  { country: "France", price: "$110", flag: "/path/to/france.png" },
  { country: "Italy", price: "$110", flag: "/path/to/italy.png" },
  // Add more deals here
];

const Deals = () => {
  return (
    <Box mt={8}>
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Great deals on plane tickets
      </Text>
      <Grid templateColumns="repeat(auto-fit, minmax(150px, 1fr))" gap={6}>
        {deals.map((deal) => (
          <GridItem key={deal.country} textAlign="center">
            <Image
              src={deal.flag}
              alt={deal.country}
              boxSize="40px"
              mx="auto"
            />
            <Text mt={2} fontWeight="bold">
              {deal.country}
            </Text>
            <Text color="blue.500">{deal.price}</Text>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Deals;
