import express from 'express'
const router = express.Router()

import {
  getAllVehicles,
  postVehicle,
} from '../controllers/inventoryController.js'

router.route('/').post(postVehicle)
router.route('/all').get(getAllVehicles)

export default router
