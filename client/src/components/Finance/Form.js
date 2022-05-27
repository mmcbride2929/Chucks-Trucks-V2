import {
  chakra,
  Box,
  SimpleGrid,
  GridItem,
  Text,
  Select,
  Heading,
  Stack,
  Button,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react'

const Form = () => {
  return (
    <Box p={8} maxW="900px" m="0 auto">
      <Box
        px={{ base: '0px', md: '20px' }}
        textAlign={{ base: 'center', md: null }}
      >
        <Heading
          fontSize={{ base: '1.1rem', sm: '1.3rem', md: '2rem' }}
          fontWeight="500"
        >
          Personal Information
        </Heading>
        <Text mt={1} fontSize={{ base: '0.85rem', sm: '1rem', md: '1.2rem' }}>
          Use a permanent address where you can receive mail.
        </Text>
      </Box>
      <SimpleGrid
        display={{ base: 'initial', md: 'grid' }}
        columns={{ md: 2 }}
        spacing={{ md: 6 }}
      >
        <GridItem mt={{ base: '20px', md: null }} colSpan={{ md: 2 }}>
          <chakra.form
            border="1px solid grey"
            method="POST"
            shadow="xl"
            rounded={[null, 'md']}
            overflow={{ sm: 'hidden' }}
            mb={{ base: '10px', md: '' }}
          >
            <Stack
              px={4}
              py={5}
              p={[null, 6]}
              bg="whitesmoke"
              boxShadow="lg"
              spacing={6}
            >
              <SimpleGrid columns={6} spacing={6}>
                <FormControl as={GridItem} colSpan={[6, 3]}>
                  <FormLabel
                    htmlFor="first_name"
                    fontSize="1rem"
                    fontWeight="semibold"
                    color="black"
                  >
                    First name
                  </FormLabel>
                  <Input
                    type="text"
                    name="first_name"
                    id="first_name"
                    autoComplete="given-name"
                    mt={1}
                    borderColor="black"
                    bg="white"
                    focusBorderColor="brand.800"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                  />
                </FormControl>

                <FormControl as={GridItem} colSpan={[6, 3]}>
                  <FormLabel
                    htmlFor="last_name"
                    fontSize="1rem"
                    fontWeight="semibold"
                    color="black"
                  >
                    Last name
                  </FormLabel>
                  <Input
                    type="text"
                    name="last_name"
                    id="last_name"
                    autoComplete="family-name"
                    mt={1}
                    borderColor="black"
                    bg="white"
                    focusBorderColor="brand.800"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                  />
                </FormControl>

                <FormControl as={GridItem} colSpan={[6, 4]}>
                  <FormLabel
                    htmlFor="email_address"
                    fontSize="1rem"
                    fontWeight="semibold"
                    color="black"
                  >
                    Email address
                  </FormLabel>
                  <Input
                    type="text"
                    name="email_address"
                    id="email_address"
                    autoComplete="email"
                    mt={1}
                    borderColor="black"
                    bg="white"
                    focusBorderColor="brand.800"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                  />
                </FormControl>

                <FormControl as={GridItem} colSpan={[6, 3]}>
                  <FormLabel
                    htmlFor="country"
                    fontSize="1rem"
                    fontWeight="semibold"
                    color="black"
                  >
                    Country / Region
                  </FormLabel>
                  <Select
                    id="country"
                    name="country"
                    autoComplete="country"
                    placeholder="Select option"
                    mt={1}
                    borderColor="black"
                    bg="white"
                    focusBorderColor="brand.800"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </Select>
                </FormControl>

                <FormControl as={GridItem} colSpan={6}>
                  <FormLabel
                    htmlFor="street_address"
                    fontSize="1rem"
                    fontWeight="semibold"
                    color="black"
                  >
                    Street address
                  </FormLabel>
                  <Input
                    type="text"
                    name="street_address"
                    id="street_address"
                    autoComplete="street-address"
                    mt={1}
                    borderColor="black"
                    bg="white"
                    focusBorderColor="brand.800"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                  />
                </FormControl>

                <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
                  <FormLabel
                    htmlFor="city"
                    fontSize="1rem"
                    fontWeight="semibold"
                    color="black"
                  >
                    City
                  </FormLabel>
                  <Input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="city"
                    mt={1}
                    borderColor="black"
                    bg="white"
                    focusBorderColor="brand.800"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                  />
                </FormControl>

                <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                  <FormLabel
                    htmlFor="state"
                    fontSize="1rem"
                    fontWeight="semibold"
                    color="black"
                  >
                    State / Province
                  </FormLabel>
                  <Input
                    type="text"
                    name="state"
                    id="state"
                    autoComplete="state"
                    mt={1}
                    borderColor="black"
                    bg="white"
                    focusBorderColor="brand.800"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                  />
                </FormControl>

                <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                  <FormLabel
                    htmlFor="postal_code"
                    fontSize="1rem"
                    fontWeight="semibold"
                    color="black"
                  >
                    ZIP / Postal
                  </FormLabel>
                  <Input
                    type="text"
                    name="postal_code"
                    id="postal_code"
                    autoComplete="postal-code"
                    mt={1}
                    borderColor="black"
                    bg="white"
                    focusBorderColor="brand.800"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                  />
                </FormControl>
              </SimpleGrid>
            </Stack>
            <Box px={{ base: 4, sm: 6 }} py={3} bg="red" textAlign="center">
              <Button
                mx="15px"
                bg="white"
                color="red"
                _hover={{
                  color: 'black',
                  boxShadow: 'xl',
                }}
              >
                Submit
              </Button>
            </Box>
          </chakra.form>
        </GridItem>
      </SimpleGrid>
    </Box>
  )
}
export default Form
