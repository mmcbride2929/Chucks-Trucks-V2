import chuck from '../../img/photos/Chuck.jpg'
import engine from '../../img/photos/engine-stock.jpg'

import {
  Flex,
  Container,
  chakra,
  Text,
  Button,
  Image,
  Link,
  Box,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const TextBody = () => {
  // navigate with react-router
  const navigate = useNavigate()

  return (
    <Container maxW={'1200px'} textAlign="center" p={8} pt={0}>
      <Text
        color="black"
        fontWeight="500"
        fontSize={{ base: '1rem', sm: '1.2rem' }}
      >
        Chuck's Trucks has been an established{' '}
        <Text as={'span'} fontStyle="italic" color="red">
          family owned
        </Text>{' '}
        business for over two weeks now. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ipsa facere laboriosam nisi doloremque asperiores.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus pra.
      </Text>
      <Flex direction={'row'} justifyContent="center" mt={6}>
        <Button
          mx="15px"
          bg="red"
          color="white"
          variant="solid"
          _hover={{
            bg: 'whitesmoke',
            color: 'red',
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
          bg="red"
          color="white"
          variant="solid"
          _hover={{
            bg: 'whitesmoke',
            color: 'red',
            boxShadow: 'xl',
          }}
        >
          <Link
            _hover={{ textDecoration: 'none' }}
            onClick={() => navigate('/inventory')}
          >
            FINANCE
          </Link>
        </Button>
      </Flex>
      <Flex
        mt={{ base: '5px', md: '50px' }}
        border="1px solid whitesmoke"
        boxShadow="xl"
        w={'full'}
        flexDirection={{ base: 'column', md: 'row' }}
        alignItems="center"
      >
        <Box w={{ base: '100%', md: '50%' }}>
          <Image
            src={chuck}
            height={{ sm: '24rem', md: '30rem', lg: '35rem' }}
            mt={{ base: 12, sm: 0 }}
          />
        </Box>
        <Box
          w={{ base: '100%', md: '50%' }}
          mt={2}
          fontWeight="500"
          fontSize={{ sm: '1rem', md: '1.1rem' }}
        >
          {' '}
          <Image
            src={engine}
            height={{ sm: '24rem', md: '30rem', lg: '35rem' }}
            mt={{ base: 12, sm: 0 }}
          />
        </Box>
      </Flex>
      <chakra.h3>
        "My name is Chuck, and I{' '}
        <chakra.span fontWeight="700">know</chakra.span> trucks."
      </chakra.h3>
      <chakra.p>- Chuck HiggleBottom</chakra.p>
    </Container>
  )
}
export default TextBody
