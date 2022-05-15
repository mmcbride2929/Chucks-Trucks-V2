import express from 'express'
const router = express.Router()

import {
  getAllVehicles,
  postVehicle,
  getSingleVehicle,
  sortByMilesLow,
  sortByPriceLow,
  sortByYearsLow,
  sortByMilesHigh,
  sortByPriceHigh,
  sortByYearsHigh,
} from '../controllers/inventoryController.js'

// sorted
router.route('/sortBy=miles').get(sortByMilesLow)
router.route('/sortBy=milesReverse').get(sortByMilesHigh)

router.route('/sortBy=price').get(sortByPriceLow)
router.route('/sortBy=priceReverse').get(sortByPriceHigh)

router.route('/sortBy=years').get(sortByYearsLow)
router.route('/sortBy=yearsReverse').get(sortByYearsHigh)

// all
router.route('/').post(postVehicle).get(getAllVehicles)

// single
router.route('/:id').get(getSingleVehicle)

export default router
