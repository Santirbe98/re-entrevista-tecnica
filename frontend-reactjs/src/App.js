import React from 'react';
import { ChakraProvider, Box, Text } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Box textAlign="center" fontSize="xl">
        <Text fontSize="3xl">Entrevista tecnica</Text>
      </Box>
    </ChakraProvider>
  );
}

export default App;
