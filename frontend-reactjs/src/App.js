import React from 'react';
import { ChakraProvider, Box, Heading } from '@chakra-ui/react';
import ProductCards from './components/ProductCards/ProductCards';

function App() {
  return (
    <ChakraProvider>
      <Box textAlign="center" fontSize="xl">
        <Heading>Entrevista tecnica</Heading>
        <ProductCards />
      </Box>
    </ChakraProvider>
  );
}

export default App;
