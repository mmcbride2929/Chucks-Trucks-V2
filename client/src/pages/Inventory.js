import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import TestBtn from '../components/inventory/TestBtn'
import Vehicles from '../components/inventory/Vehicles'
import { useLocation } from 'react-router-dom'
import InventoryContext from '../context/InventoryContext'

const Inventory = () => {
  const { search } = useLocation()
  const { inventory, setInventory, penguin } = useContext(InventoryContext)

  // fetching all vehicles on page load
  useEffect(() => {
    const fetchInventory = async () => {
      const response = await axios.get('/inventory' + search)

      setInventory(response.data)
    }
    fetchInventory()
    console.log(penguin())
  }, [search])

  return (
    <div>
      <Vehicles vehicles={inventory} />
      <TestBtn />
    </div>
  )
}
export default Inventory
