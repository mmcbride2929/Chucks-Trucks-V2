import { Link } from 'react-router-dom'
const Vehicle = ({ vehicle }) => {
  const { name, miles, year, photo } = vehicle
  return (
    <>
      <Link to={`/inventory/${vehicle._id}`}>
        <p>{name}</p>
      </Link>
      <p>{miles}</p>
      {year}
    </>
  )
}
export default Vehicle
