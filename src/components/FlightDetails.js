import { Box, Button, Flex, Grid, Text } from "@chakra-ui/react";
import React from "react";

const FlightDetails = () => {
  const flightData = [
    {
      date: "Wed, Oct 18",
      outbound: "Gdansk Lech Walesa GDN",
      inbound: "Poznan - Lawica POZ",
      outboundTime: "21:50",
      inboundTime: "23:00",
      duration: "1h10m",
      stops: "Direct",
      price: "$110",
      included: "Included: 1",
    },
    {
      date: "Wed, Oct 18",
      outbound: "Gdansk Lech Walesa GDN",
      inbound: "Poznan - Lawica POZ",
      outboundTime: "21:50",
      inboundTime: "23:00",
      duration: "1h10m",
      stops: "Direct",
      price: "$110",
      included: "Included: 1",
    },
    {
      date: "Wed, Oct 18",
      outbound: "Gdansk Lech Walesa GDN",
      inbound: "Poznan - Lawica POZ",
      outboundTime: "21:50",
      inboundTime: "23:00",
      duration: "1h10m",
      stops: "Direct",
      price: "$110",
      included: "Included: 1",
    },
    {
      date: "Wed, Oct 18",
      outbound: "Gdansk Lech Walesa GDN",
      inbound: "Poznan - Lawica POZ",
      outboundTime: "21:50",
      inboundTime: "23:00",
      duration: "1h10m",
      stops: "Direct",
      price: "$110",
      included: "Included: 1",
    },
  ];

  return (
    <Box p={4}>
      {flightData.map((flight, index) => (
        <Box
          key={index}
          bg="white"
          boxShadow="md"
          borderRadius="md"
          p={4}
          mb={4}
          _hover={{ transform: "scale(1.02)", boxShadow: "lg" }}
          transition="all 0.3s ease"
        >
          <Grid
            templateColumns={{ base: "1fr", md: "1fr 1fr 1fr auto" }}
            gap={4}
            alignItems="center"
          >
            <Box>
              <Text fontWeight="bold">{flight.date}</Text>
              <Text>{flight.outbound}</Text>
              <Text>{flight.inbound}</Text>
            </Box>
            <Box>
              <Text>
                {flight.outboundTime} - {flight.inboundTime}
              </Text>
              <Text>{flight.duration}</Text>
              <Text color="blue.500">{flight.stops}</Text>
            </Box>
            <Box>
              <Text>
                {flight.inboundTime} - {flight.outboundTime}
              </Text>
              <Text>{flight.duration}</Text>
              <Text color="blue.500">{flight.stops}</Text>
            </Box>
            <Flex direction="column" alignItems="flex-end">
              <Text>{flight.included}</Text>
              <Text fontWeight="bold" fontSize="xl">
                {flight.price}
              </Text>
              <Button colorScheme="blue">Book Now</Button>
            </Flex>
          </Grid>
        </Box>
      ))}
    </Box>
  );
};

export default FlightDetails;
