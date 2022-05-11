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

export { postVehicle, getAllVehicles }
