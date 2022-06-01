import { Box, Heading, Text } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'

const ContactPrompt = ({ promptActive }) => {
  return (
    <Box
      textAlign="center"
      bg="whitesmoke"
      border="1px solid silver"
      py={10}
      px={6}
      display={`${promptActive}`}
    >
      <CheckCircleIcon boxSize={'40px'} color={'green.500'} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        We've Received Your Info
      </Heading>
      <Text>
        Thank you for reaching out! We are processing your information and will
        have an estimate of a financial plan that fits you. Thanks again.
      </Text>
    </Box>
  )
}

export default ContactPrompt
