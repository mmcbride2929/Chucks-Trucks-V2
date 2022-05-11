const notFoundMiddleware = (req, res) =>
  res.status(404).send('Route Does Not Exist')

export default notFoundMiddleware
