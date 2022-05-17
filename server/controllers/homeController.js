import Vehicle from '../models/vehicleModel.js'

const getOnSaleInventory = async (req, res) => {
  try {
    const vehicles = await Vehicle.find()

    // const onSaleVehicles = vehicles.filter(
    //   (vehicle) => vehicle.sale.onSale === 'yes'
    // )
    // console.log(onSaleVehicles)
    res.status(200).send(vehicles)
  } catch (error) {
    res.status(500).json({ msg: 'fetch failed: there was an error' })
  }
}

export { getOnSaleInventory }
