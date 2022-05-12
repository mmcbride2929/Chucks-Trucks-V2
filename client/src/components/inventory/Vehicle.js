const Vehicle = ({ vehicle }) => {
  const { name, miles, year, photo } = vehicle
  return (
    <>
      <p>{name}</p> <p>{miles}</p>
      {year}
    </>
  )
}
export default Vehicle
