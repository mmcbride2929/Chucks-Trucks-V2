import { useContext, useEffect } from 'react'
import axios from 'axios'

import Vehicles from '../components/inventory/Vehicles'
import InventoryContext from '../context/InventoryContext'
import Header from '../components/inventory/Header'
import { Box } from '@chakra-ui/react'

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
    <Box as="section" p={8} maxW="1200px" m="0 auto">
      <Header />
      <Vehicles vehicles={inventory} />
    </Box>
  )
}
export default Inventory
