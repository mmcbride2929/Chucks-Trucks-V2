import { chakra, Box, Heading, Text } from '@chakra-ui/react'

import { WarningTwoIcon } from '@chakra-ui/icons'

const Error = () => {
  return (
    <Box
      h="88vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      textAlign="center"
      py={10}
      px={6}
    >
      <WarningTwoIcon boxSize={'75px'} color="red" />
      <Heading as="h2" size="xl" mt={6} mb={4}>
        Oops! We can't find the page you're looking for.
      </Heading>
      <Text color="black">
        Go Back{' '}
        <chakra.a
          href="/"
          textDecoration="underline"
          textDecorationColor="black"
        >
          Home
        </chakra.a>
      </Text>
    </Box>
  )
}

export default Error
