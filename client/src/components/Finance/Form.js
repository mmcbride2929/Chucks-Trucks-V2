import ContactPrompt from './ContactPrompt'

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
import { useState } from 'react'

const Form = () => {
  const [formInput, setFormInput] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    creditScore: '',
    downPayment: '',
    tradeIn: 'yes',
  })

  // form display control
  const [formActive, setFormActive] = useState('block')
  // form prompt display control
  const [promptActive, setPromptActive] = useState('none')

  const handleSubmit = async (e) => {
    e.preventDefault()

    // validating our form info with boolean
    const validInput = await UserSchema.validInput(formInput)

    // presenting user with success prompt
    setFormActive('none')
    setPromptActive('block')
  }

  const handleChange = (e) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value })
  }

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
            display={`${formActive}`}
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
                    htmlFor="firstName"
                    fontSize="1rem"
                    fontWeight="semibold"
                    color="black"
                  >
                    First name
                  </FormLabel>
                  <Input
                    value={formInput.firstName}
                    onChange={handleChange}
                    type="text"
                    name="firstName"
                    id="firstName"
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
                    htmlFor="lastName"
                    fontSize="1rem"
                    fontWeight="semibold"
                    color="black"
                  >
                    Last name
                  </FormLabel>
                  <Input
                    value={formInput.lastName}
                    onChange={handleChange}
                    type="text"
                    name="lastName"
                    id="lastName"
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
                    htmlFor="email"
                    fontSize="1rem"
                    fontWeight="semibold"
                    color="black"
                  >
                    Email address
                  </FormLabel>
                  <Input
                    value={formInput.email}
                    onChange={handleChange}
                    type="text"
                    name="email"
                    id="email"
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

                <FormControl as={GridItem} colSpan={6}>
                  <FormLabel
                    htmlFor="address"
                    fontSize="1rem"
                    fontWeight="semibold"
                    color="black"
                  >
                    Street address
                  </FormLabel>
                  <Input
                    value={formInput.address}
                    onChange={handleChange}
                    type="text"
                    name="address"
                    id="address"
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
                    htmlFor="creditScore"
                    fontSize="1rem"
                    fontWeight="semibold"
                    color="black"
                  >
                    Credit Score
                  </FormLabel>
                  <Input
                    value={formInput.creditScore}
                    onChange={handleChange}
                    type="text"
                    name="creditScore"
                    id="creditScore"
                    autoComplete="credit-score"
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
                    htmlFor="downPayment"
                    fontSize="1rem"
                    fontWeight="semibold"
                    color="black"
                  >
                    Down Payment
                  </FormLabel>
                  <Input
                    value={formInput.downPayment}
                    onChange={handleChange}
                    type="text"
                    name="downPayment"
                    id="downPayment"
                    autoComplete="down-payment"
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
                    htmlFor="tradeIn"
                    fontSize="1rem"
                    fontWeight="semibold"
                    color="black"
                  >
                    Trade-In
                  </FormLabel>
                  <Select
                    value={formInput.tradeIn}
                    onChange={handleChange}
                    type="text"
                    _placeholder="yes"
                    name="tradeIn"
                    id="tradeIn"
                    mt={1}
                    borderColor="black"
                    bg="white"
                    focusBorderColor="brand.800"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                  >
                    <option value="yes">yes</option>
                    <option value="no">no</option>
                  </Select>
                </FormControl>
              </SimpleGrid>
            </Stack>
            <Box px={{ base: 4, sm: 6 }} py={3} bg="red" textAlign="center">
              <Button
                onClick={handleSubmit}
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
      <ContactPrompt promptActive={`${promptActive}`} />
    </Box>
  )
}
export default Form
