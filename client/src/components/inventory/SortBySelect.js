import { Select } from '@chakra-ui/react'
import { useContext } from 'react'
import InventoryContext from '../../context/InventoryContext'
import axios from 'axios'

const SortBySelect = () => {
  const { setInventory } = useContext(InventoryContext)

  // put methods in here... fetch and set inventory
  const handleSort = async (e) => {
    const sortType = e.target.value
    const response = await axios.get(
      `https://chucks-trucks.herokuapp.com/api/v1/inventory/sortBy=${sortType}`
    )
    setInventory(response.data)
  }

  return (
    <div>
      <Select
        onChange={handleSort}
        w={{ base: '145px' }}
        fontSize={{ base: 'xs' }}
        size="md"
      >
        <option value="priceLow">Price - Lowest</option>
        <option value="priceHigh">Price - Highest</option>
        <option value="milesLow">Mileage - Lowest</option>
        <option value="milesHigh">Mileage - Highest</option>
        <option value="yearsLow">Year - Lowest</option>
        <option value="yearsHigh">Year - Highest</option>
      </Select>
    </div>
  )
}
export default SortBySelect
