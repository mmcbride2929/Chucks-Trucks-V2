import { chakra, Box, Flex, HStack } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'

const Review = ({ review }) => {
  const { name, title, description, rating, photo } = review

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      my={6}
      mx={{ base: 5, sm: '1px', md: '15px' }}
    >
      <Flex
        maxW="lg"
        mx="auto"
        bg="red"
        shadow="lg"
        rounded="lg"
        overflow="hidden"
        alignItems="center"
        flexDirection={{ base: 'column', sm: 'row' }}
      >
        <Box
          w={{ base: '50%', md: 1 / 3 }}
          mt={{ base: '10px', sm: 0 }}
          height={{ base: '200px', sm: '210px' }}
          borderRadius={{ base: 999, sm: 5 }}
          backgroundImage={require(`../../img/photos/${photo}`)}
          bgPos=" center"
          bgSize="cover"
          bgRepeat="no-repeat"
        ></Box>

        <Box
          w={{ base: '100%', md: 2 / 3 }}
          py={{ base: 2, md: 2 }}
          px={{ base: 5, md: 4 }}
        >
          <Flex
            spacing={1}
            flexDirection={{ base: 'column', md: 'row' }}
            alignItems="center"
            justifyContent={{ base: '', md: 'space-evenly' }}
            mt={2}
          >
            <Box>
              <chakra.h1 fontSize="2xl" fontWeight="bold" color="white">
                {name}
              </chakra.h1>
            </Box>
            <Box>
              {rating >= 1 ? (
                <StarIcon color="gold" />
              ) : (
                <StarIcon color="silver" />
              )}
              {rating >= 2 ? (
                <StarIcon color="gold" />
              ) : (
                <StarIcon color="silver" />
              )}
              {rating >= 3 ? (
                <StarIcon color="gold" />
              ) : (
                <StarIcon color="silver" />
              )}
              {rating >= 4 ? (
                <StarIcon color="gold" />
              ) : (
                <StarIcon color="silver" />
              )}
              {rating >= 5 ? (
                <StarIcon color="gold" />
              ) : (
                <StarIcon color="silver" />
              )}
            </Box>
          </Flex>

          <chakra.h1
            fontSize="2xl"
            fontWeight="bold"
            color="white"
            textAlign={{ base: 'center', md: '' }}
            mt={4}
          >
            "{title}"
          </chakra.h1>

          <chakra.p textAlign="center" mb={2} fontSize="0.9rem" color="white">
            "{description}"
          </chakra.p>
        </Box>
      </Flex>
    </Flex>
  )
}

export default Review
