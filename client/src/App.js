import { ChakraProvider } from '@chakra-ui/react'
import { InventoryProvider } from './context/InventoryContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import SingleVehicle from './components/inventory/SingleVehicle'
import Home from './pages/Home'
import Inventory from './pages/Inventory'
import InventoryContext from './context/InventoryContext'
import Navbar from './components/layout/Navbar'

const app = () => {
  return (
    <InventoryProvider>
      <ChakraProvider>
        <Router>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="inventory/:name" element={<SingleVehicle />} />
            </Routes>
          </main>
        </Router>
      </ChakraProvider>
    </InventoryProvider>
  )
}

export default app
