import { chakra, Box, Stack } from '@chakra-ui/react'
import SaleItems from './SaleItems'

const Sale = ({ forSaleVehicles }) => {
  return (
    <Box bg="red">
      <Box textAlign="center" p={{ base: 5, sm: 5, lg: 6 }}>
        <chakra.h1
          fontSize={{ base: '1.6rem', sm: '2rem' }}
          fontWeight="bold"
          color="white"
        >
          Featured Vehicles
        </chakra.h1>
        <chakra.p fontSize={{ base: '1rem', sm: '1.2rem' }} color="white">
          DON'T MISS OUT!
        </chakra.p>
      </Box>
      <Box
        as="section"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection={{ base: 'column', lg: 'row' }}
      >
        {forSaleVehicles.map((vehicle, index) => (
          <SaleItems key={index} vehicle={vehicle} />
        ))}
      </Box>
    </Box>
  )
}
export default Sale
