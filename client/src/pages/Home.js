import { useEffect, useState } from 'react'
import axios from 'axios'

import SaleContainer from '../components/Home/SaleContainer'
import Hero from '../components/Home/Hero'

const Home = () => {
  const [forSaleVehicles, setForSaleVehicles] = useState([])

  // fetching all vehicles on sale on page load
  useEffect(() => {
    const fetchSaleVehicles = async () => {
      const vehicles = await axios.get(
        'http://localhost:5000/api/v1/home/forsalevehicles'
      )
      setForSaleVehicles(vehicles.data)
    }
    fetchSaleVehicles()
  }, [])

  return (
    <>
      <Hero />
      <SaleContainer forSaleVehicles={forSaleVehicles} />
    </>
  )
}
export default Home
