import { Heading, Text, chakra, Flex, Box } from '@chakra-ui/react'

const Header = () => {
  return (
    <Heading
      pt={{ base: 0, md: 10 }}
      fontWeight="bold"
      fontSize={{ base: '1.7rem', sm: '2.2rem', lg: '2.6rem' }}
      textAlign="center"
      letterSpacing="tight"
    >
      Getting A Truck You{' '}
      <Text as={'span'} color="red">
        Love{' '}
      </Text>
      Has Never Been So{' '}
      <Text as={'span'} color="red">
        Easy
      </Text>
      .
      <Flex justifyContent="center" mt={2} direction="column">
        <Box
          fontWeight="500"
          fontSize={{ base: '1rem', sm: '1.5rem', lg: '1.8rem' }}
          letterSpacing="normal"
        >
          <chakra.h3>
            "My name is Chuck, and I{' '}
            <chakra.span fontWeight="700" color="red">
              know
            </chakra.span>{' '}
            trucks."
          </chakra.h3>
          <chakra.p>- Chuck HiggleBottom</chakra.p>
        </Box>
      </Flex>
    </Heading>
  )
}
export default Header
