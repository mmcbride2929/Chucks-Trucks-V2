import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import SingleVehicle from './components/inventory/SingleVehicle'
import Home from './pages/Home'
import Inventory from './pages/Inventory'

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="inventory/:name" element={<SingleVehicle />} />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  )
}

export default App
