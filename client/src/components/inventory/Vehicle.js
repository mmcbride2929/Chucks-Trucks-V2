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

const Vehicle = ({ vehicle }) => {
  const { name, miles, year, photo, price, condition, _id, description } =
    vehicle

  // navigate with react-router
  const navigate = useNavigate()

  return (
    <Box w="100%" display="flex" justifyContent="center" alignItems="center">
      <Box
        bg="white"
        maxW={{ base: 'sm' }}
        h={{ base: '500px', lg: '490px' }}
        borderWidth="1px"
        marginTop={5}
        marginBottom={10}
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
        <Box px={{ base: '20px', sm: '30px' }} pt="2" pb="4">
          <Box textAlign="center">
            <chakra.h1
              fontSize={['1.2rem', '1.25rem']}
              fontWeight="bold"
              mb={2}
            >
              {year} - {name}
            </chakra.h1>
            <Box
              mx={5}
              color="black"
              textAlign="center"
              fontSize="md"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <chakra.p fontWeight="bold"> Price: </chakra.p>

              <chakra.p
                mx="10px"
                py="1px"
                color="red"
                fontSize={'1rem'}
                fontWeight="bold"
              >
                ${price.toLocaleString('en-US')}
              </chakra.p>
            </Box>
            <chakra.p>
              <chakra.span fontWeight="bold"> Miles: </chakra.span>
              {miles.toLocaleString('en-US')}
            </chakra.p>
            <chakra.p>
              <chakra.span fontWeight="bold"> Condition: </chakra.span>
              {condition}
            </chakra.p>

            <chakra.p
              mt={4}
              fontSize={{ base: '0.9rem', sm: '1rem' }}
              fontWeight="500"
            >
              {description}
            </chakra.p>

            <Button
              position="absolute"
              left="50%"
              right="0%"
              transform="translate(-50%, -50%)"
              textAlign="center"
              bottom="10px"
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
      </Box>
    </Box>
  )
}
export default Vehicle
