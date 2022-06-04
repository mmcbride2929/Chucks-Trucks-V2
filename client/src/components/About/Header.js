import { Heading, Text, chakra, Flex, Box } from '@chakra-ui/react'

const Header = () => {
  return (
    <Heading
      pt={{ base: 0, md: 10 }}
      fontWeight="bold"
      fontSize={{ base: '1.6rem', sm: '2.0rem', lg: '2.2rem' }}
      px={{ base: '25px', sm: '100px', lg: '150px' }}
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
          fontSize={{ base: '1rem', sm: '1.1rem', lg: '1.3rem' }}
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
