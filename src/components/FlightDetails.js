import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const FlightDetails = () => {
  const flights = [
    {
      outbound: {
        time: "21:50",
        from: "Gdansk Lech Walesa GDN",
        duration: "1h 10m",
        to: "Poznan - Lawica POZ",
        direct: true,
      },
      inbound: {
        time: "21:50",
        from: "Poznan - Lawica POZ",
        duration: "1h 10m",
        to: "Gdansk Lech Walesa GDN",
        direct: true,
      },
      price: "$110",
      luggage: "Included: 1 bag",
    },
    {
      outbound: {
        time: "21:50",
        from: "Gdansk Lech Walesa GDN",
        duration: "1h 10m",
        to: "Poznan - Lawica POZ",
        direct: true,
      },
      inbound: {
        time: "21:50",
        from: "Poznan - Lawica POZ",
        duration: "1h 10m",
        to: "Gdansk Lech Walesa GDN",
        direct: true,
      },
      price: "$110",
      luggage: "Included: 1 bag",
    },
    {
      outbound: {
        time: "21:50",
        from: "Gdansk Lech Walesa GDN",
        duration: "1h 10m",
        to: "Poznan - Lawica POZ",
        direct: true,
      },
      inbound: {
        time: "21:50",
        from: "Poznan - Lawica POZ",
        duration: "1h 10m",
        to: "Gdansk Lech Walesa GDN",
        direct: true,
      },
      price: "$110",
      luggage: "Included: 1 bag",
    },
    {
      outbound: {
        time: "21:50",
        from: "Gdansk Lech Walesa GDN",
        duration: "1h 10m",
        to: "Poznan - Lawica POZ",
        direct: true,
      },
      inbound: {
        time: "21:50",
        from: "Poznan - Lawica POZ",
        duration: "1h 10m",
        to: "Gdansk Lech Walesa GDN",
        direct: true,
      },
      price: "$110",
      luggage: "Included: 1 bag",
    },
    // ... Add more flight data as needed
  ];

  return (
    <Box p={5}>
      <Flex mt={{ base: 10 }} justify={{ base: "space-around" }} mb={5}>
        <Button
          _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
          transition="all 0.3s ease"
          mr={2}
          variant="outline"
          colorScheme="blue"
        >
          Cheapest
        </Button>
        <Button
          _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
          transition="all 0.3s ease"
          variant="outline"
          colorScheme="blue"
        >
          Fastest
        </Button>
      </Flex>
      {flights.map((flight, index) => (
        <Box
          _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
          transition="all 0.3s ease"
          bgColor="white"
          key={index}
          border="1px solid #E2E8F0"
          borderRadius="md"
          overflow="hidden"
          mb={5}
        >
          <Grid
            templateColumns={{ base: "1fr", md: "2fr 2fr 1fr" }}
            gap={6}
            p={5}
          >
            <Box ml={{ base: 8, md: 0 }}>
              <GridItem>
                <Text fontWeight="bold">Wed, Oct 18 - Outbound</Text>
                <Text>
                  {flight.outbound.time} - {flight.outbound.from}
                </Text>
                <HStack>
                  <Text>{flight.outbound.duration}</Text>
                  {flight.outbound.direct && (
                    <Text color="blue.500">Direct</Text>
                  )}
                </HStack>
                <Text>{flight.outbound.to}</Text>
              </GridItem>
              <GridItem>
                <Text fontWeight="bold">Wed, Oct 20 - Inbound</Text>
                <Text>
                  {flight.inbound.time} - {flight.inbound.from}
                </Text>
                <HStack>
                  <Text>{flight.inbound.duration}</Text>
                  {flight.inbound.direct && (
                    <Text color="blue.500">Direct</Text>
                  )}
                </HStack>
                <Text>{flight.inbound.to}</Text>
              </GridItem>
            </Box>
            <GridItem textAlign="center">
              <Text>{flight.luggage}</Text>
              <Text fontSize="2xl" fontWeight="bold">
                {flight.price}
              </Text>
              <Button
                _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
                transition="all 0.3s ease"
                colorScheme="blue"
                mt={2}
              >
                Book Now
              </Button>
            </GridItem>
          </Grid>
          <Divider />
        </Box>
      ))}
    </Box>
  );
};

export default FlightDetails;
