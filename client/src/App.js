import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import SingleVehicle from './components/inventory/SingleVehicle'
import Home from './pages/Home'
import Inventory from './pages/Inventory'
import { InventoryProvider } from './context/InventoryContext'

function App() {
  return (
    <BrowserRouter>
      <InventoryProvider>
        <ChakraProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="inventory/:name" element={<SingleVehicle />} />
          </Routes>
        </ChakraProvider>
      </InventoryProvider>
    </BrowserRouter>
  )
}

export default App
