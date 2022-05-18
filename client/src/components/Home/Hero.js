import heroPhoto from '../../img/misc/trucks-hero.jpg'

import { chakra, Box, Flex, Heading, Stack } from '@chakra-ui/react'

const Hero = () => {
  return (
    <Box
      w="full"
      h="container.sm"
      backgroundImage={heroPhoto}
      bgPos="center"
      bgSize="cover"
    >
      <Flex
        align="center"
        pos="relative"
        justify="center"
        boxSize="full"
        bg="blackAlpha.700"
      >
        <Stack textAlign="center" alignItems="center" spacing={6}>
          <Heading
            fontSize={['2xl', , '3xl']}
            fontWeight="semibold"
            color="white"
            textTransform="uppercase"
          >
            Build Your new
            <chakra.span color="blue.400" textDecor="underline">
              Saas
            </chakra.span>
          </Heading>
        </Stack>
      </Flex>
    </Box>
  )
}

export default Hero
