import { Box, Container } from "@chakra-ui/react";
import React from "react";
import Deals from "./components/Deals";
import EmailSubscription from "./components/EmailSubscription";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PopularDestinations from "./components/PopularDestinations";
import SearchForm from "./components/SearchForm";

const App = () => {
  return (
    <Box bg="gray.50">
      <Header />
      <Container maxW="container.xl" p={4}>
        <SearchForm />
        <PopularDestinations />
        <Deals />
        <EmailSubscription />
      </Container>
      <Footer />
    </Box>
  );
};

export default App;
