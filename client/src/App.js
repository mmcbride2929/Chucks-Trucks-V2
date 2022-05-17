import { ChakraProvider } from '@chakra-ui/react'
import { InventoryProvider } from './context/InventoryContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import SingleVehicle from './components/inventory/SingleVehicle'
import Home from './pages/Home'
import Inventory from './pages/Inventory'
import InventoryContext from './context/InventoryContext'

const app = () => {
  return (
    <InventoryProvider>
      <ChakraProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="inventory/:name" element={<SingleVehicle />} />
          </Routes>
        </Router>
      </ChakraProvider>
    </InventoryProvider>
  )
}

export default app
