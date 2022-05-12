import Vehicle from './Vehicle'

const Vehicles = ({ vehicles }) => {
  return (
    <>
      {vehicles.map((vehicle, index) => (
        <Vehicle key={index} vehicle={vehicle} />
      ))}
    </>
  )
}

export default Vehicles
