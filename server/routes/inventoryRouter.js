import express from 'express'
const router = express.Router()

import {
  getAllVehicles,
  postVehicle,
  getSingleVehicle,
} from '../controllers/inventoryController.js'

router.route('/').post(postVehicle)
router.route('/all').get(getAllVehicles)
router.route('/:id').get(getSingleVehicle)

export default router
