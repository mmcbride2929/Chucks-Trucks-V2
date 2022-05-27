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
        py={4}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.a href="/" display="flex" alignItems="center">
              <Image
                src={logo}
                alt="logo"
                maxW={{ base: '185px', sm: '225px' }}
              />
            </chakra.a>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="white"
              display={{ base: 'none', md: 'inline-flex' }}
            >
              <Button
                onClick={() => navigate('/inventory')}
                variant="ghost"
                _hover={{ color: 'black', bg: 'white' }}
              >
                Inventory
              </Button>
              <Button
                onClick={() => navigate('/finance')}
                variant="ghost"
                _hover={{ color: 'black', bg: 'white' }}
              >
                Finance
              </Button>
              <Button
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
                  border="1px solid white"
                  _hover={{ color: 'black', bg: 'white' }}
                  variant="ghost"
                  onClick={mobileNav.onClose}
                >
                  <Link onClick={() => navigate('/inventory')}>Inventory</Link>
                </Button>
                <Button
                  w="30%"
                  border="1px solid white"
                  _hover={{ color: 'black', bg: 'white' }}
                  variant="ghost"
                  onClick={mobileNav.onClose}
                >
                  <Link onClick={() => navigate('/finance')}>Finance</Link>
                </Button>

                <Button
                  w="30%"
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
