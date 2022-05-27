import bgPhoto from '../../img/photos/Finance-Hero.jpg'
import logo from '../../img/logo/logoRED.png'

import { chakra, Box, Flex, Heading, Stack, Image } from '@chakra-ui/react'

const Header = () => {
  return (
    <Box
      w="full"
      h="500px"
      backgroundImage={bgPhoto}
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
            <Image
              src={logo}
              w={{ base: '325px', md: '375px' }}
              boxShadow="lg"
            />
            <Heading
              fontSize={{ base: '1.8rem', md: '2.2rem' }}
              fontWeight="bold"
              color="white"
              textTransform="uppercase"
            >
              FINANCING
            </Heading>
          </Stack>
          <Box textAlign="center" alignItems="center" mb={['65px', , '']}>
            <chakra.h3
              fontSize={{ base: '1.4rem', md: '2.2rem' }}
              fontWeight="semibold"
              color="white"
              textTransform="uppercase"
            >
              We're Here To{' '}
              <chakra.span color="red" fontWeight="bold">
                Help.
              </chakra.span>
            </chakra.h3>
            <chakra.p
              fontSize={{ base: '1.1rem', md: '1.5rem' }}
              color="white"
              py={1}
              px={{ base: 6, sm: 14 }}
              maxW="800px"
            >
              Applying for a loan through Chuck's Trucks is quick and easy. Just
              answer a few questions and we'll have a report ready for you when
              you come in.
            </chakra.p>
          </Box>
        </Stack>
      </Flex>
    </Box>
  )
}
export default Header
