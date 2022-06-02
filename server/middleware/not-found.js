import path from 'path'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(filename)

const notFoundMiddleware = (req, res) =>
  res.sendFile(path.resolve(__dirname, '../../client/build/index.html'))

export default notFoundMiddleware
