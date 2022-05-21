import { Box, Flex, chakra } from '@chakra-ui/react'
import SortBySelect from './SortBySelect'
import InventoryContext from '../../context/InventoryContext'
import { useContext } from 'react'

const Header = () => {
  const { inventory } = useContext(InventoryContext)

  return (
    <Box as="header">
      <Flex justifyContent="space-between">
        <chakra.h1
          fontSize={{ base: '1.6rem', sm: '2.2rem' }}
          fontWeight="semibold"
        >
          Inventory
        </chakra.h1>
        <SortBySelect />
      </Flex>
      <chakra.h3>{inventory.length} Results</chakra.h3>
    </Box>
  )
}
export default Header
