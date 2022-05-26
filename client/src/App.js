import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { InventoryProvider } from './context/InventoryContext'
import SingleVehicle from './components/inventory/SingleVehicle'
import Home from './pages/Home'
import Inventory from './pages/Inventory'
import Navbar from './components/layout/Navbar'
import { myTheme } from './theme/theme'
import Footer from './components/layout/Footer'
import About from './pages/About'

const app = () => {
  return (
    <InventoryProvider>
      <ChakraProvider theme={myTheme}>
        <Router>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/about" element={<About />} />
              <Route path="inventory/:id" element={<SingleVehicle />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </ChakraProvider>
    </InventoryProvider>
  )
}

export default app
