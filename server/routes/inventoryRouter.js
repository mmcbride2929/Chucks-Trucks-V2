import express from 'express'
const router = express.Router()

import {
  getAllVehicles,
  postVehicle,
  getSingleVehicle,
  sortVehiclesByMiles,
} from '../controllers/inventoryController.js'

router.route('/').post(postVehicle).get(getAllVehicles)
router.route('/sort').get(sortVehiclesByMiles)
router.route('/:name').get(getSingleVehicle)

export default router
