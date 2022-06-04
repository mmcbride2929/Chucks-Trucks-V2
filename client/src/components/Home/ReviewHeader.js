import { chakra, Box } from '@chakra-ui/react'

const ReviewHeader = () => {
  return (
    <Box as="header" textAlign="center" color="white">
      <chakra.h1
        color="black"
        fontSize={{ base: '1.6rem', sm: '2rem' }}
        fontWeight="semibold"
      >
        Customer Reviews
      </chakra.h1>
      <chakra.h2 color="black" fontSize={{ base: '1.1rem', sm: '1.1rem' }}>
        What Our Customers Are Saying
      </chakra.h2>
    </Box>
  )
}
export default ReviewHeader
