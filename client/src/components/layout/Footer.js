import logo from '../../img/logo/logo.png'

import { chakra, Flex, Icon, Image } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Flex w="full" bg="red" p="5px" alignItems="center" justifyContent="center">
      <Flex
        h="5vh"
        w="full"
        as="footer"
        flexDir={{ base: 'column', sm: 'row' }}
        align="center"
        justify="center"
        px="2"
        py="2"
        bg="red"
      >
        <chakra.a href="/">
          <Image src={logo} alt="logo" maxW="185px" />
        </chakra.a>

        <chakra.p py={{ base: '2', sm: '0' }} color="white">
          All rights reserved
        </chakra.p>
      </Flex>
    </Flex>
  )
}

export default Footer
