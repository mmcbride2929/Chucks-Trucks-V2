import Vehicle from '../models/vehicleModel.js'

const postVehicle = async (req, res) => {
  try {
    const vehicle = await Vehicle.create(req.body)
    res.status(201).json({ vehicle })
  } catch (error) {
    res.status(500).json({ msg: 'there was an error' })
  }
}

const getAllVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find()
    res.status(200).send(vehicles)
  } catch (error) {
    res.status(500).json({ msg: 'fetch failed: there was an error' })
  }
}

const getSingleVehicle = async (req, res) => {
  try {
    const path = req.url.replace('/', '')
    const yellow = decodeURI(path)

    const red = yellow.split(' ').join('')
    console.log(red)
    // need to delete % from path
    const singleVehicle = await Vehicle.findOne({ name: red })

    res.status(200).send(singleVehicle)
  } catch (error) {
    res.status(500).json({ msg: 'fetch failed: there was an error' })
  }
}

const sortVehiclesByMiles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find()
    const sorted = vehicles.filter((vehicle) => vehicle.miles < 50000)
    res.status(200).send(sorted)
  } catch (error) {
    res.status(500).json({ msg: 'fetch failed: there was an error' })
  }
}

export { postVehicle, getAllVehicles, getSingleVehicle, sortVehiclesByMiles }
