import Vehicle from '../models/vehicleModel.js'

// POST VEHICLE
const postVehicle = async (req, res) => {
  try {
    const vehicle = await Vehicle.create(req.body)
    res.status(201).json({ vehicle })
  } catch (error) {
    res.status(500).json({ msg: 'there was an error' })
  }
}

// GET VEHICLES
const getAllVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find()
    res.status(200).send(vehicles)
  } catch (error) {
    res.status(500).json({ msg: 'fetch failed: there was an error' })
  }
}

// GET VEHICLE
const getSingleVehicle = async (req, res) => {
  try {
    const singleVehicle = await Vehicle.findById(req.params.id)
    res.status(200).send(singleVehicle)
  } catch (error) {
    res.status(500).json({ msg: 'fetch failed: there was an error' })
  }
}

// SORT MILES
const sortByMilesLow = async (req, res) => {
  try {
    const vehicles = await Vehicle.find()
    const sorted = vehicles.sort((a, b) => (a.miles > b.miles ? 1 : -1))
    res.status(200).send(sorted)
  } catch (error) {
    res.status(500).json({ msg: 'fetch failed: there was an error' })
  }
}

const sortByMilesHigh = async (req, res) => {
  try {
    const vehicles = await Vehicle.find()
    const sorted = vehicles
      .sort((a, b) => (a.miles > b.miles ? 1 : -1))
      .reverse()
    res.status(200).send(sorted)
  } catch (error) {
    res.status(500).json({ msg: 'fetch failed: there was an error' })
  }
}

// SORT PRICE
const sortByPriceLow = async (req, res) => {
  try {
    const vehicles = await Vehicle.find()
    const sorted = vehicles.sort((a, b) => (a.price > b.price ? 1 : -1))
    res.status(200).send(sorted)
  } catch (error) {
    res.status(500).json({ msg: 'fetch failed: there was an error' })
  }
}

const sortByPriceHigh = async (req, res) => {
  try {
    const vehicles = await Vehicle.find()
    const sorted = vehicles
      .sort((a, b) => (a.price > b.price ? 1 : -1))
      .reverse()
    res.status(200).send(sorted)
  } catch (error) {
    res.status(500).json({ msg: 'fetch failed: there was an error' })
  }
}

// SORT YEARS
const sortByYearsLow = async (req, res) => {
  try {
    const vehicles = await Vehicle.find()
    const sorted = vehicles.sort((a, b) => (a.year > b.year ? 1 : -1))
    res.status(200).send(sorted)
  } catch (error) {
    res.status(500).json({ msg: 'fetch failed: there was an error' })
  }
}

const sortByYearsHigh = async (req, res) => {
  try {
    const vehicles = await Vehicle.find()
    const sorted = vehicles.sort((a, b) => (a.year > b.year ? 1 : -1)).reverse()
    res.status(200).send(sorted)
  } catch (error) {
    res.status(500).json({ msg: 'fetch failed: there was an error' })
  }
}

export {
  postVehicle,
  getAllVehicles,
  getSingleVehicle,
  sortByMilesLow,
  sortByPriceLow,
  sortByYearsLow,
  sortByMilesHigh,
  sortByPriceHigh,
  sortByYearsHigh,
}
