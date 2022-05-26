import { Box, Flex, chakra } from '@chakra-ui/react'
import SortBySelect from './SortBySelect'
import InventoryContext from '../../context/InventoryContext'
import { useContext } from 'react'

const Header = () => {
  const { inventory } = useContext(InventoryContext)

  return (
    <Box as="header" mb={{ base: 0, sm: 10 }} paddingLeft={{ base: 0, md: 8 }}>
      <Flex justifyContent="space-between">
        <chakra.h1
          fontSize={{ base: '1.6rem', sm: '2.2rem' }}
          fontWeight="semibold"
        >
          Inventory
        </chakra.h1>
        <SortBySelect />
      </Flex>
      <chakra.h3 borderBottom="2px solid whitesmoke">
        {inventory.length} Results
      </chakra.h3>
    </Box>
  )
}
export default Header
