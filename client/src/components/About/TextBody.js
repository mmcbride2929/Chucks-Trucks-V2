import chuck from '../../img/photos/Chuck.jpg'

import { Flex, Container, Text, Image, Box } from '@chakra-ui/react'
const TextBody = () => {
  return (
    <Container my={8} maxW={'1200px'} textAlign="center" bg="red">
      <Flex
        w={'full'}
        flexDirection={{ base: 'column', md: 'row' }}
        alignItems="center"
      >
        <Box w={{ base: '100%', md: '50%' }}>
          <Image
            p={8}
            m="0 auto"
            src={chuck}
            w={{ base: '24rem', base: '28rem', md: '30rem', lg: '35rem' }}
          />
        </Box>
        <Box
          py={6}
          px={4}
          w={{ base: '100%', md: '50%' }}
          fontWeight="500"
          fontSize={{ sm: '1rem', md: '1.1rem' }}
        >
          {' '}
          <Text
            color="white"
            fontWeight="500"
            fontSize={{ base: '1rem', sm: '1.2rem' }}
          >
            Chuck's Trucks has been an established{' '}
            <Text as={'span'} fontStyle="italic" color="black">
              family owned
            </Text>{' '}
            business for over two weeks now. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ipsa facere laboriosam nisi doloremque
            asperiores. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Natus praise.
          </Text>
        </Box>
      </Flex>
    </Container>
  )
}
export default TextBody
