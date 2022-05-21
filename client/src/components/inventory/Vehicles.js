import { SimpleGrid } from '@chakra-ui/react'
import Vehicle from './Vehicle'

const Vehicles = ({ vehicles }) => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
      {vehicles.map((vehicle, index) => (
        <Vehicle key={index} vehicle={vehicle} />
      ))}
    </SimpleGrid>
  )
}

export default Vehicles
// how to display them, shape wise
