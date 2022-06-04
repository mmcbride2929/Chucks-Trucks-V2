import logo from '../../img/logo/logo.png'

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  Image,
  Link,
} from '@chakra-ui/react'
import { AiOutlineMenu } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const mobileNav = useDisclosure()

  // navigate with react-router
  const navigate = useNavigate()

  return (
    <>
      <chakra.header
        bg="red"
        w="full"
        px={{ base: 2, sm: 4 }}
        py={2}
        shadow="md"
        // display="flex"
      >
        <Flex
          alignItems="center"
          justifyContent="space-between"
          mx="auto"
          p={1}
        >
          <Flex>
            <chakra.a href="/" display="flex" alignItems="center">
              <Image
                src={logo}
                alt="logo"
                maxW={{ base: '175px', sm: '225px' }}
              />
            </chakra.a>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={3}
              mr={1}
              color="white"
              display={{ base: 'none', md: 'inline-flex' }}
            >
              <Button
                h="30px"
                w="80px"
                fontSize="14px"
                onClick={() => navigate('/inventory')}
                variant="ghost"
                _hover={{ color: 'black', bg: 'white' }}
              >
                Inventory
              </Button>
              <Button
                h="30px"
                w="80px"
                fontSize="14px"
                onClick={() => navigate('/finance')}
                variant="ghost"
                _hover={{ color: 'black', bg: 'white' }}
              >
                Finance
              </Button>
              <Button
                h="30px"
                w="80px"
                fontSize="14px"
                onClick={() => navigate('/about')}
                variant="ghost"
                _hover={{ color: 'black', bg: 'white' }}
              >
                About
              </Button>
            </HStack>
            <Box display={{ base: 'inline-flex', md: 'none' }}>
              <IconButton
                display={{ base: 'flex', md: 'none' }}
                aria-label="Open menu"
                fontSize="20px"
                color="white"
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
                _hover={{ color: 'black', bg: 'white' }}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? 'flex' : 'none'}
                flexDirection="column"
                p={2}
                pb={4}
                bg="red"
                spacing={3}
                rounded="sm"
                shadow="sm"
                zIndex="2"
                color="white"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />

                <Button
                  fontSize="0.9rem"
                  w="30%"
                  variant="ghost"
                  border="1px solid white"
                  _hover={{ color: 'black', bg: 'white' }}
                  onClick={mobileNav.onClose}
                >
                  <Link onClick={() => navigate('/')}>Home</Link>
                </Button>
                <Button
                  w="30%"
                  fontSize="0.9rem"
                  border="1px solid white"
                  _hover={{ color: 'black', bg: 'white' }}
                  variant="ghost"
                  onClick={mobileNav.onClose}
                >
                  <Link onClick={() => navigate('/inventory')}>Inventory</Link>
                </Button>
                <Button
                  w="30%"
                  fontSize="0.9rem"
                  border="1px solid white"
                  _hover={{ color: 'black', bg: 'white' }}
                  variant="ghost"
                  onClick={mobileNav.onClose}
                >
                  <Link onClick={() => navigate('/finance')}>Finance</Link>
                </Button>

                <Button
                  w="30%"
                  fontSize="0.9rem"
                  variant="ghost"
                  border="1px solid white"
                  _hover={{ color: 'black', bg: 'white' }}
                  onClick={mobileNav.onClose}
                >
                  <Link onClick={() => navigate('/about')}>About</Link>
                </Button>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </>
  )
}
export default Navbar
