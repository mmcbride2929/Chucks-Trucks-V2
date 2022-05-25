import TextBody from '../components/About/TextBody'
import Header from '../components/About/Header'
import CallToAction from '../components/About/CallToAction'
import { Box } from '@chakra-ui/react'
const About = () => {
  return (
    <Box bg="white" as="section" p={8} maxW="1200px" m="0 auto">
      <Header />
      <TextBody />
      <CallToAction />
    </Box>
  )
}
export default About
