import { useContext, useEffect } from 'react'
import axios from 'axios'

import Vehicles from '../components/inventory/Vehicles'
import InventoryContext from '../context/InventoryContext'
import SortBySelect from '../components/inventory/SortBySelect'

const Inventory = () => {
  const { inventory, setInventory } = useContext(InventoryContext)

  // fetching all vehicles on page load
  useEffect(() => {
    const fetchInventory = async () => {
      const response = await axios.get('/inventory')
      setInventory(response.data)
    }
    fetchInventory()
  }, [])

  return (
    <div>
      <Vehicles vehicles={inventory} />
      <SortBySelect />
    </div>
  )
}
export default Inventory
