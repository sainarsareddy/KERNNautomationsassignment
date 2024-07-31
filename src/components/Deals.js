import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";

const deals = [
  { country: "Paris", price: "$110", flag: "/images/paris.jpg" },
  { country: "Paris", price: "$110", flag: "/images/paris.jpg" },
  { country: "Paris", price: "$110", flag: "/images/paris.jpg" },
  { country: "Paris", price: "$110", flag: "/images/paris.jpg" },
  { country: "Paris", price: "$110", flag: "/images/paris.jpg" },
  { country: "Paris", price: "$110", flag: "/images/paris.jpg" },
  { country: "Paris", price: "$110", flag: "/images/paris.jpg" },
  { country: "Paris", price: "$110", flag: "/images/paris.jpg" },
  { country: "Paris", price: "$110", flag: "/images/paris.jpg" },
  { country: "Paris", price: "$110", flag: "/images/paris.jpg" },
  { country: "Paris", price: "$110", flag: "/images/paris.jpg" },
  { country: "Paris", price: "$110", flag: "/images/paris.jpg" },
  { country: "Paris", price: "$110", flag: "/images/paris.jpg" },
  { country: "Paris", price: "$110", flag: "/images/paris.jpg" },
  { country: "Paris", price: "$110", flag: "/images/paris.jpg" },
];

const Deals = () => {
  return (
    <Box textAlign="center">
      <Text textColor="grey" fontWeight="800" marginTop={20} fontSize="xl">
        Great deals on plane tickets
      </Text>
      <Grid
        mr={{ base: 10 }}
        p={10}
        mx={{ base: 0, md: 40 }}
        templateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(3, minmax(150px, 1fr))",
        }}
        gap={6}
      >
        {deals.map((deal) => (
          <GridItem width="280px" key={deal.country} textAlign="center">
            <Box
              _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
              transition="all 0.3s ease"
              mx={2}
              borderRadius="10"
              padding={3}
              boxShadow="md"
            >
              <Flex
                boxShadow={5}
                textAlign="center"
                justifyContent="space-between"
              >
                <Flex>
                  <Image
                    src={deal.flag}
                    alt={deal.country}
                    boxSize="30px"
                    mx="auto"
                  />
                  <Text ml={5} textColor="gray" fontWeight="500">
                    {deal.country}
                  </Text>
                </Flex>
                <Text fontWeight="900" color="blue.300">
                  {deal.price}
                </Text>
              </Flex>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Deals;
