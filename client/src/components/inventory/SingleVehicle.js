import axios from 'axios'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from '@chakra-ui/react'

const SingleVehicle = () => {
  const [vehicle, setVehicle] = useState({})
  const location = useLocation()
  const path = location.pathname.split('/')[2]

  useEffect(() => {
    const fetchVehicle = async () => {
      const response = await axios.get(
        `http://localhost:5000/api/v1/inventory/${path}`
      )

      setVehicle(response.data)
    }
    fetchVehicle()
  }, [path])

  const { name, miles, year, photo, price, condition, _id, description } =
    vehicle

  return (
    <Container maxW={'7xl'}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={'md'}
            alt={'product image'}
            // src={require(`../../img/photos/${photo}`)}
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={700}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
            >
              {year} - {name}
            </Heading>
            <Text fontWeight={500} fontSize={'2xl'}>
              {/* ${price.toLocaleString('en-US')} */}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
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
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Price:
                  </Text>{' '}
                  {/* ${price.toLocaleString('en-US')} */}
                </ListItem>
                <ListItem display="flex">
                  <Text as={'span'} fontWeight={'bold'}>
                    Sale Price:
                  </Text>{' '}
                  <Text color="red" fontWeight={'bold'} mx={1}>
                    {/* {vehicle.sale.salePrice.toLocaleString('en-US')} */}
                  </Text>
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Case:
                  </Text>{' '}
                  Steel
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Case diameter:
                  </Text>{' '}
                  42 mm
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Dial color:
                  </Text>{' '}
                  Black
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Crystal:
                  </Text>{' '}
                  Domed, scratch‑resistant sapphire crystal with anti‑reflective
                  treatment inside
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Water resistance:
                  </Text>{' '}
                  5 bar (50 metres / 167 feet){' '}
                </ListItem>
              </List>
            </Box>
          </Stack>

          <Button
            rounded={'none'}
            w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            bg="blue"
            color="pink"
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}
          >
            Add to cart
          </Button>

          <Stack direction="row" alignItems="center" justifyContent={'center'}>
            fgh
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  )
}
export default SingleVehicle
