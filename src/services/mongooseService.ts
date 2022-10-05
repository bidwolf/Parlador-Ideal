import dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config()

const { MONGODB_USER } = process.env
const MONGODB_PASSWORD =
  encodeURIComponent(
    process.env.MONGODB_PASSWORD ? process.env.MONGODB_PASSWORD : false
  ) || process.env.MONGODB_PASSWORD
const MONGODB_URI = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@cluster0.4p6vxw7.mongodb.net/?retryWrites=true&w=majority`
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('Mongo db conectado')
  })
  .catch((err) => console.error(err))
export default mongoose
