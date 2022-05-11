const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err)
  res.status(500).json({ msg: 'There Was an Error' })
}

export default errorHandlerMiddleware
