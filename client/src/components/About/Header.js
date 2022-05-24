import { Heading, Text } from '@chakra-ui/react'

const Header = () => {
  return (
    <Heading
      m={{ base: 8, sm: 12, md: 16 }}
      mb={{ base: 6, sm: 8, md: 10 }}
      fontWeight={600}
      fontSize={{ base: '1.7rem', sm: '2.2rem' }}
      textAlign="center"
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
    </Heading>
  )
}
export default Header
