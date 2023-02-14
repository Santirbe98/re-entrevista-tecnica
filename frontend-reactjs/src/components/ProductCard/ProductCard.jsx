import { Center, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';

export default function ProductCard({ id, name, price, image }) {
  return (
    <Center>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        maxWidth={250}
        maxH={250}
        direction={{ base: 'column', md: 'row' }}
        boxShadow={'md'}
        padding={4}
      >
        <Flex flex={1}>
          <Image objectFit="cover" boxSize="100%" src={image} />
        </Flex>
      </Stack>
      <Stack flex={1} flexDirection="column" p={1} pt={2}>
        <Heading fontSize={'xl'} fontFamily={'body'} textAlign="left" pl={2}>
          {name}
        </Heading>
        <Text fontSize="medium" textAlign="left" pl={2} color="gray.">
          {id}
        </Text>
        <Stack width={'100%'} mt={'2rem'} direction={'row'} padding={2}>
          <Text>Precio:</Text>
          <Text fontWeight={600}> ${price} </Text>
        </Stack>
      </Stack>
    </Center>
  );
}
