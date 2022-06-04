import { PhoneIcon } from '@chakra-ui/icons'
import { FiMapPin } from 'react-icons/fi'
import { AiOutlineMail } from 'react-icons/ai'
import { chakra, Box, Stack, Flex, Button, Link } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const CallToAction = () => {
  // navigate with react-router
  const navigate = useNavigate()

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDir="column"
      m="0 auto"
      bg="red"
      border="1px solid whitesmoke"
      boxShadow="xl"
      p={4}
    >
      <chakra.h1
        fontWeight="bold"
        fontSize={{ base: '1.4rem', sm: '1.8rem' }}
        textAlign="center"
        letterSpacing="tight"
        mb={4}
      >
        <chakra.h1 color="white">
          Ready To <chakra.span color="black">Upgrade?</chakra.span>
        </chakra.h1>
        <chakra.h1 color="white">
          Stop By Chucks <chakra.span color="black">Today!</chakra.span>
        </chakra.h1>
      </chakra.h1>
      <Box color="white">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize={{ base: '0.9rem' }}
        >
          <AiOutlineMail size={18} />{' '}
          <chakra.p mx={3}>Chuck@ChuxTrux.truck</chakra.p>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize={{ base: '1rem', sm: '0.9rem' }}
        >
          <PhoneIcon size={18} /> <chakra.p mx={3}>234-678-9567</chakra.p>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize={{ base: '1rem', sm: '0.9rem' }}
        >
          <FiMapPin size={18} />
          <chakra.p mx={2}>123 Big Truck St. Columbus, OH</chakra.p>
        </Box>
      </Box>
      <Box mt={{ base: 6, md: 8 }}>
        <Button
          mx="15px"
          bg="white"
          color="red"
          variant="solid"
          _hover={{
            color: 'black',
            boxShadow: 'xl',
          }}
        >
          <Link
            _hover={{ textDecoration: 'none' }}
            onClick={() => navigate('/inventory')}
          >
            SHOP NOW
          </Link>
        </Button>
        <Button
          mx="15px"
          bg="white"
          color="red"
          variant="solid"
          _hover={{
            color: 'black',
            boxShadow: 'xl',
          }}
        >
          <Link
            _hover={{ textDecoration: 'none' }}
            onClick={() => navigate('/finance')}
          >
            FINANCE
          </Link>
        </Button>
      </Box>
    </Flex>
  )
}

export default CallToAction
