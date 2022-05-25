import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  SimpleGrid,
  Button,
  VStack,
} from '@chakra-ui/react'
const FeatureList = () => {
  return (
    <Flex
      bg={useColorModeValue('#F9FAFB', 'gray.600')}
      p={20}
      justifyContent="center"
      alignItems="center"
    >
      <Box
        shadow="xl"
        bg={useColorModeValue('white', 'gray.800')}
        px={8}
        py={20}
        mx="auto"
      >
        <SimpleGrid
          alignItems="center"
          columns={{ base: 1, lg: 2 }}
          spacingY={{ base: 10, lg: 32 }}
          spacingX={{ base: 10, lg: 24 }}
        >
          <Box>
            <chakra.h2
              mb={3}
              fontSize={{ base: '3xl', md: '4xl' }}
              fontWeight="extrabold"
              textAlign={{ base: 'center', sm: 'left' }}
              color={useColorModeValue('black')}
              lineHeight="shorter"
              letterSpacing="tight"
            >
              Become a Partner
            </chakra.h2>
            <chakra.p
              mb={6}
              fontSize={{ base: 'lg', md: 'xl' }}
              textAlign={{ base: 'center', sm: 'left' }}
              color={useColorModeValue('gray.600', 'gray.500')}
            >
              Let's put our heads together to build a successful partnership to
              benefit both your customers and your business.
            </chakra.p>
            <Button
              as="a"
              variant="solid"
              w={{ base: 'full', sm: 'auto' }}
              colorScheme="brand"
              size="lg"
            >
              Become a Partner
            </Button>
          </Box>
          <VStack
            direction="column"
            flexGrow={1}
            spacing={5}
            alignItems="start"
          >
            <chakra.h4>Email APIs, SMTP Relay, and Webhooks</chakra.h4>
          </VStack>
        </SimpleGrid>
      </Box>
    </Flex>
  )
}
export default FeatureList
