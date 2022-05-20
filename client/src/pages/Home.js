import { useEffect, useState } from 'react'
import axios from 'axios'

import Sale from '../components/Home/Sale'
import Hero from '../components/Home/Hero'
import Reviews from '../components/Home/Reviews'

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
      <Sale forSaleVehicles={forSaleVehicles} />
      <Reviews />
    </>
  )
}
export default Home
