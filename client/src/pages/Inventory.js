import { useEffect, useState } from 'react'
import axios from 'axios'
import TestBtn from '../components/inventory/TestBtn'
import Vehicles from '../components/inventory/Vehicles'
import { useLocation } from 'react-router-dom'

const Inventory = () => {
  const [inventory, setInventory] = useState([])
  const { search } = useLocation()

  // fetching all vehicles on page load
  useEffect(() => {
    const fetchInventory = async () => {
      const response = await axios.get('/inventory' + search)
      console.log(response)
      setInventory(response.data)
    }
    fetchInventory()
  }, [search])

  return (
    <div>
      <Vehicles vehicles={inventory} />
      <TestBtn />
    </div>
  )
}
export default Inventory
