import React, { useEffect, useState } from 'react';
import {
  Box,
  Center,
  Divider,
  Input,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import ProductCard from '../ProductCard/ProductCard';
import { productos } from '../../data';

const ProductCards = () => {
  const [products, setProduct] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    setProduct(productos);
    setFilterProducts(productos);
  }, []);

  const handleChange = e => {
    e.preventDefault();
    setInput(e.target.value);
    filter(e.target.value);
  };

  const filter = termOfSearch => {
    const result = products.filter(product => {
      if (
        product.name
          .toString()
          .toLowerCase()
          .includes(termOfSearch.toString().toLowerCase())
      ) {
        return product;
      }
    });
    if (result.length >= 0) {
      setFilterProducts(result);
    }
  };

  return (
    <Box pt={50}>
      <Box>
        <Input
          placeholder="Buscar producto por nombre"
          width="60%"
          value={input}
          onChange={handleChange}
        />
      </Box>
      <SimpleGrid
        pt={10}
        columns={{ base: 1, sm: 1, md: 2 }}
        spacingX="40px"
        spacingY="20px"
      >
        {filterProducts &&
          filterProducts.map(p => (
            <ProductCard
              key={p.id}
              name={p.name}
              id={p.id}
              price={p.price}
              image={p.img}
            />
          ))}
      </SimpleGrid>
      {filterProducts.length === 0 && (
        <Center>
          <Text>No se encontraron productos...</Text>
        </Center>
      )}
      <Divider pt={10} mb={3} />
      <Text textAlign="left" pl={10} mb={100} color="gray.500">
        Productos encontrados {filterProducts.length}
      </Text>
    </Box>
  );
};

export default ProductCards;
