import express from 'express'
const router = express.Router()

import { getOnSaleInventory } from '../controllers/homeController.js'

// sorted
router.route('/forSaleVehicles').get(getOnSaleInventory)

export default router
