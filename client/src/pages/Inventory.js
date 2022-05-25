import { useContext, useEffect } from 'react'
import axios from 'axios'

import Vehicles from '../components/inventory/Vehicles'
import InventoryContext from '../context/InventoryContext'
import Header from '../components/inventory/Header'
import { Box } from '@chakra-ui/react'
import FeatureList from '../components/inventory/FeatureList'

const Inventory = () => {
  const { inventory, setInventory } = useContext(InventoryContext)

  // fetching all vehicles on page load
  useEffect(() => {
    const fetchInventory = async () => {
      const response = await axios.get('/inventory/sortBy=priceLow')
      setInventory(response.data)
    }
    fetchInventory()
  }, [])

  return (
    <Box as="section" p={8} m="0 auto">
      <Header />
      <Box display="flex">
        <Box display={{ base: 'none', md: 'block' }} w="33%">
          <FeatureList />
        </Box>
        <Box w={{ base: '', md: '66%' }} margin="0 auto">
          <Vehicles vehicles={inventory} />
        </Box>
      </Box>
    </Box>
  )
}
export default Inventory
