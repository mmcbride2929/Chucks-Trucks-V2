import { useNavigate } from 'react-router-dom'

import heroPhoto from '../../img/photos/trucks-hero.jpg'
import logo from '../../img/logo/logoRED.png'
import {
  chakra,
  Box,
  Flex,
  Heading,
  Stack,
  Image,
  Button,
  Link,
} from '@chakra-ui/react'

const Hero = () => {
  // navigate with react-router
  const navigate = useNavigate()

  return (
    <Box
      w="full"
      h="500px"
      backgroundImage={heroPhoto}
      bgPos="center"
      bgSize="cover"
    >
      <Flex
        flexDirection="column"
        align="center"
        pos="relative"
        justify="center"
        boxSize="full"
        bg="blackAlpha.700"
      >
        <Stack>
          <Stack
            textAlign="center"
            alignItems="center"
            spacing={2}
            mb={['25px', , '']}
          >
            <chakra.h2
              fontSize={{ base: '1.6rem', sm: '2rem' }}
              fontWeight="semibold"
              color="white"
              textTransform="uppercase"
            >
              welcome to
            </chakra.h2>
            <Image
              src={logo}
              w={{ base: '320px', sm: '350px' }}
              boxShadow="lg"
            />
          </Stack>
          <Box textAlign="center" alignItems="center" mb={['65px', , '']}>
            <chakra.h3
              fontSize={{ base: '1.5rem', sm: '2rem' }}
              fontWeight="bold"
              color="white"
              textTransform="uppercase"
            >
              celebrating 2 weeks
            </chakra.h3>
            <chakra.p
              fontSize={{ base: '1rem', sm: '1.3rem' }}
              fontWeight="semibold"
              color="white"
            >
              of service with a
            </chakra.p>
            <chakra.h2
              fontSize={{ base: '1.5rem', sm: '2rem' }}
              fontWeight="bold"
              color="white"
              textTransform="uppercase"
            >
              monster sale
            </chakra.h2>
            <Button
              mt="20px"
              color="white"
              variant="outline"
              _hover={{
                bg: 'white',
                color: 'red',
              }}
            >
              <Link fontSize="0.8rem" onClick={() => navigate('/inventory')}>
                SHOP NOW
              </Link>
            </Button>
          </Box>
        </Stack>
      </Flex>
    </Box>
  )
}

export default Hero
