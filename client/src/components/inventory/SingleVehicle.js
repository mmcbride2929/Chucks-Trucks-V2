import axios from 'axios'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const SingleVehicle = () => {
  const [vehicle, setVehicle] = useState({})
  const location = useLocation()
  const path = location.pathname.split('/')[2]

  useEffect(() => {
    const fetchVehicle = async () => {
      const response = await axios.get(
        `http://localhost:5000/api/v1/inventory/${path}`
      )

      setVehicle(response.data)
    }
    fetchVehicle()
  }, [path])

  return <div>{vehicle.description}</div>
}
export default SingleVehicle
