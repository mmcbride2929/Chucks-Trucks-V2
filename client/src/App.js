import { Box, ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { InventoryProvider } from './context/InventoryContext'

import Home from './pages/Home'
import Inventory from './pages/Inventory'
import Navbar from './components/layout/Navbar'
import { myTheme } from './theme/theme'
import Footer from './components/layout/Footer'
import About from './pages/About'
import SingleVehicle from './pages/SingleVehicle'
import Finance from './pages/Finance'
import Error from './pages/Error'

const app = () => {
  return (
    <InventoryProvider>
      <ChakraProvider theme={myTheme}>
        <Router>
          <Navbar />
          <Box as="body" minH="88vh">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/about" element={<About />} />
              <Route path="/finance" element={<Finance />} />
              <Route path="inventory/:id" element={<SingleVehicle />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </Box>
          <Footer />
        </Router>
      </ChakraProvider>
    </InventoryProvider>
  )
}

export default app
