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
      maxW="500px"
      m="0 auto"
      bg="red"
      border="1px solid whitesmoke"
      boxShadow="xl"
      p={4}
    >
      <chakra.h1
        fontWeight="bold"
        fontSize={{ base: '1.7rem', sm: '2.2rem' }}
        textAlign="center"
        letterSpacing="tight"
        mb={4}
      >
        <chakra.h1>
          Ready To <chakra.span color="white">Upgrade?</chakra.span>
        </chakra.h1>
        <chakra.h1>
          Stop By Chucks <chakra.span color="white">Today!</chakra.span>
        </chakra.h1>
      </chakra.h1>
      <Box color="white">
        <Box display="flex" alignItems="center" justifyContent="center">
          <AiOutlineMail size={18} />{' '}
          <chakra.p mx={3}>Chuck@ChuxTrux.truck</chakra.p>
        </Box>

        <Box display="flex" alignItems="center" justifyContent="center">
          <PhoneIcon size={18} /> <chakra.p mx={3}>234-678-9567</chakra.p>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center">
          <FiMapPin size={18} />
          <chakra.p mx={3}>123 Big Truck St. Columbus, OH</chakra.p>
        </Box>
      </Box>
      <Box mt={{ base: 6, md: 10 }}>
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
