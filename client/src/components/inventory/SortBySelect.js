import { Select } from '@chakra-ui/react'
import { useContext } from 'react'
import InventoryContext from '../../context/InventoryContext'
import axios from 'axios'

const SortBySelect = () => {
  const { setInventory } = useContext(InventoryContext)

  // put methods in here... fetch and set inventory
  const handleSort = async (e) => {
    const sortType = e.target.value
    console.log(sortType)
    const response = await axios.get(
      `http://localhost:5000/api/v1/inventory/sortBy=${sortType}`
    )
    setInventory(response.data)
  }

  return (
    <div>
      <Select onChange={handleSort} size="md" placeholder="Select option">
        <option value="milesLow">Mileage - Lowest</option>
        <option value="milesHigh">Mileage - Highest</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
    </div>
  )
}
export default SortBySelect
