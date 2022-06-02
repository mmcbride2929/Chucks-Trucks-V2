import axios from 'axios'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  Link,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  List,
  ListItem,
} from '@chakra-ui/react'

const SingleVehicle = () => {
  const [vehicle, setVehicle] = useState({})
  const [loading, setLoading] = useState(true)
  const location = useLocation()
  const path = location.pathname.split('/')[2]

  // navigate with react-router
  const navigate = useNavigate()

  useEffect(() => {
    const fetchVehicle = async () => {
      const response = await axios.get(
        `https://chucks-trucks.herokuapp.com/api/v1/inventory/${path}`
      )

      setVehicle(response.data)
      setLoading(false)
    }
    fetchVehicle()
  }, [path])

  const { name, miles, year, photo, price, condition, _id, description } =
    vehicle

  return (
    <Container maxW={'7xl'}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 6, md: 10 }}
        p={{ base: 5, sm: 5, lg: 6 }}
      >
        <Flex>
          {loading ? (
            <chakra.p>loading</chakra.p>
          ) : (
            <Image
              rounded={'md'}
              alt={'product image'}
              src={require(`../img/photos/${photo}`)}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          )}
        </Flex>
        <Stack spacing={{ base: 6, md: 6 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={700}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
            >
              {year} - {name}
            </Heading>
            {loading ? (
              <chakra.p>Loading</chakra.p>
            ) : (
              <Text fontWeight={500} fontSize={'2xl'}>
                ${price.toLocaleString('en-US')}
              </Text>
            )}
          </Box>
          <Stack
            spacing={{ base: 4, sm: 2 }}
            direction={'column'}
            divider={<StackDivider borderColor="whitesmoke" />}
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text fontSize={'lg'}>{description}</Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: '16px', sm: '22px', lg: '28px' }}
                fontWeight={'700'}
                textTransform={'uppercase'}
                mb={'4'}
              >
                Product Details
              </Text>
              <List spacing={2}>
                <ListItem display="flex">
                  <Text as={'span'} fontWeight={'bold'} mx={1}>
                    Price:
                  </Text>{' '}
                  {loading ? (
                    <chakra.p>Loading</chakra.p>
                  ) : (
                    <chakra.p>${price.toLocaleString('en-US')}</chakra.p>
                  )}
                </ListItem>
                <ListItem display="flex">
                  <Text as={'span'} fontWeight={'bold'}>
                    Sale Price:
                  </Text>{' '}
                  {loading ? (
                    <chakra.p>Loading</chakra.p>
                  ) : (
                    <Text color="red" fontWeight={'bold'} mx={1}>
                      {vehicle.sale.salePrice === 'n/a' ? <></> : <>$</>}
                      {vehicle.sale.salePrice.toLocaleString('en-US')}
                    </Text>
                  )}
                </ListItem>
                <ListItem display="flex">
                  <Text as={'span'} fontWeight={'bold'}>
                    Miles:
                  </Text>{' '}
                  {loading ? (
                    <chakra.p>Loading</chakra.p>
                  ) : (
                    <Text mx={1}>{miles.toLocaleString('en-US')}</Text>
                  )}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Driving Condition:
                  </Text>{' '}
                  {condition}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    VIN:
                  </Text>{' '}
                  {_id}
                </ListItem>
              </List>
            </Box>
          </Stack>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Button
              w="125px"
              mt={{ base: '35px', sm: '5px', md: '25px' }}
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
              <Link onClick={() => navigate(`/inventory`)}>INVENTORY</Link>
            </Button>
          </Box>

          <Stack direction="row" alignItems="center" justifyContent={'center'}>
            <Text fontWeight={500} fontSize={12} fontStyle="italic">
              Vehicle may need towed off the lot.
            </Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  )
}
export default SingleVehicle
