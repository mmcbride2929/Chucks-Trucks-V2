import { useEffect, useState } from 'react'
import axios from 'axios'
import TestBtn from '../components/inventory/TestBtn'
import Vehicles from '../components/inventory/Vehicles'

const Inventory = () => {
  const [inventory, setInventory] = useState([])

  // fetching all vehicles on page load
  useEffect(() => {
    const fetchInventory = async () => {
      const response = await axios.get('/inventory/all')
      console.log(response)
      setInventory(response.data)
    }
    fetchInventory()
  }, [])

  return (
    <div>
      <Vehicles vehicles={inventory} />
      <TestBtn />
    </div>
  )
}
export default Inventory
