import mongoose from 'mongoose'

const Vehicle = new mongoose.Schema({
  name: { type: String, required: true },
  miles: { type: Number, required: true },
  year: { type: Number, required: true },
  photo: { type: String, required: true },
  price: { type: Number, required: true },
  sale: { type: Object, required: true },
  size: { type: String, required: true },
  condition: { type: String, required: true },
  description: { type: String, required: true },
})

export default mongoose.model('vehicles', Vehicle)
