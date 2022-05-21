import { useNavigate } from 'react-router-dom'
import {
  chakra,
  Box,
  Flex,
  Image,
  Badge,
  Stack,
  Button,
  Link,
} from '@chakra-ui/react'

const SaleItems = ({ vehicle }) => {
  const { name, miles, year, photo, price, condition, _id } = vehicle

  // navigate with react-router
  const navigate = useNavigate()

  return (
    <Box
      bg="whitesmoke"
      maxW="md"
      borderWidth="1px"
      marginTop={5}
      marginBottom={10}
      mx={4}
      rounded="lg"
      boxShadow="xl"
      position="relative"
    >
      <Box
        h="200px"
        w="100%"
        backgroundImage={require(`../../img/photos/${photo}`)}
        bgPos="center"
        bgSize="cover"
      ></Box>
      <Badge
        position="absolute"
        right="5"
        top="165"
        px="2"
        py="1px"
        color="white"
        bg="red"
        fontSize={'1rem'}
        fontWeight="bold"
        borderRadius="3px"
        textDecoration="solid line-through whitesmoke 3px"
      >
        ${price}
      </Badge>

      <Box px="10px" pt="2" pb="4" w="350px" textAlign="center">
        <Box>
          <chakra.h1 fontSize={['1.2rem', '1.25rem']} fontWeight="bold">
            {year} - {name}
          </chakra.h1>

          <Box
            mx={20}
            color="black"
            textAlign="center"
            fontSize="sm"
            display="flex"
            alignItems="center"
            justifyContent="space-evenly"
          >
            <chakra.p fontWeight="bold">Sale price: </chakra.p>
            <Badge
              mx="10px"
              py="1px"
              color="white"
              borderRadius="3px"
              bg="red"
              fontSize={'1rem'}
              fontWeight="bold"
            >
              ${vehicle.sale.salePrice}
            </Badge>
          </Box>
        </Box>
        <chakra.p>
          <chakra.span fontWeight="bold"> Miles: </chakra.span>
          {miles.toLocaleString('en-US')}
        </chakra.p>
        <chakra.p>
          <chakra.span fontWeight="bold"> Condition: </chakra.span>
          {condition}
        </chakra.p>

        <Button
          mt="20px"
          bg="red"
          color="white"
          fontSize="0.9rem"
          variant="solid"
          boxShadow="lg"
          _hover={{
            bg: 'black',
            color: 'white',
          }}
        >
          <Link onClick={() => navigate(`inventory/${_id}`)}>
            CHECK AVAILABILITY
          </Link>
        </Button>
      </Box>
    </Box>
  )
}
export default SaleItems
