import { Box, Container } from "@chakra-ui/react";
import React, { useState } from "react";
import Deals from "./components/Deals";
import EmailSubscription from "./components/EmailSubscription";
import FlightDetails from "./components/FlightDetails";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PopularDestinations from "./components/PopularDestinations";
import SearchForm from "./components/SearchForm";



const App = () => {
  const [showResults, setShowResults] = useState(false);

  const handleSearch = () => {
    setShowResults(true);
  };
  return (
    <Box bg="gray.50">
      <Header />
      <Container backgroundColor="azure" maxW="container.xl" p={4}>
        <SearchForm onSearch={handleSearch} />
        {showResults && <FlightDetails />}
        <PopularDestinations />
        <Deals />
        <EmailSubscription />
      </Container>
      <Footer />
    </Box>
  );
};

export default App;
