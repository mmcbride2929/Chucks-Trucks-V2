import express from 'express'
const router = express.Router()

import { getOnSaleInventory } from '../controllers/homeController.js'

// sorted
router.route('/').get(getOnSaleInventory)

export default router
