import logo from '../../img/logo/logo.png'

import { AiOutlineCheckCircle } from 'react-icons/ai'

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  SimpleGrid,
  Button,
  VStack,
  Image,
} from '@chakra-ui/react'
const FeatureList = () => {
  return (
    <Box
      d="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      shadow="xl"
      bg="red"
      p={4}
      py={8}
    >
      <chakra.h2
        mb={3}
        fontSize={{ base: '', lg: '1.6rem' }}
        fontWeight="bold"
        textAlign={{ base: '', lg: 'center' }}
        color="white"
        lineHeight="shorter"
        letterSpacing="tight"
      >
        We Promise
      </chakra.h2>
      <Box
        color="white"
        fontSize={{ base: '', lg: '0.9rem' }}
        w="150px"
        m="0 auto"
      >
        <Box display="flex" alignItems="center">
          <AiOutlineCheckCircle size={20} />
          <chakra.p m={2}>No Warranties</chakra.p>
        </Box>
        <Box display="flex" alignItems="center">
          <AiOutlineCheckCircle size={20} />
          <chakra.p m={2}>Semi-Clean Titles</chakra.p>
        </Box>
        <Box display="flex" alignItems="center">
          <AiOutlineCheckCircle size={20} />
          <chakra.p m={2}>No Test Drives</chakra.p>
        </Box>
        <Box display="flex" alignItems="center">
          <AiOutlineCheckCircle size={20} />
          <chakra.p m={2}>Free Oil Changes</chakra.p>
        </Box>
        <Box display="flex" alignItems="center">
          <AiOutlineCheckCircle size={20} />
          <chakra.p m={2}>Fair Rates*</chakra.p>
        </Box>
      </Box>
      <chakra.h2
        mt={8}
        mb={4}
        fontSize={{ base: '', lg: '1.2rem' }}
        fontWeight="bold"
        textAlign={{ base: '', lg: 'center' }}
        color="white"
        lineHeight="shorter"
        letterSpacing="tight"
      >
        Satisfaction Guaranteed
      </chakra.h2>
      <chakra.p color="white" fontSize={{ base: '', lg: '0.8rem' }}>
        Are you tired of buying trucks that break down after 5 or 6 years? Why
        do that when you can get a truck thats ALREADY broken down. It's only
        up-hill from here!
      </chakra.p>
      <Image src={logo} w="220px" m="0 auto" mt={4} />
    </Box>
  )
}
export default FeatureList
