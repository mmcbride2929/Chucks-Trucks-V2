import SaleItems from './SaleItems'

const SaleContainer = ({ forSaleVehicles }) => {
  return (
    <>
      {forSaleVehicles.map((vehicle, index) => (
        <SaleItems key={index} vehicle={vehicle} />
      ))}
    </>
  )
}
export default SaleContainer
