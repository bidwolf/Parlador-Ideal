import { model, Schema } from 'mongoose'
export interface UserLogin {
  email: string
  password: string
}
export interface UserDTO {
  email: string
  name: string
  password: string
}
export interface User {
  email: string
  name: string
  password: string
  passwordConfirmation: string
}
const UserSchema = new Schema<UserDTO>({
  email: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
})

const UserImp = model<UserDTO>('User', UserSchema)
export default UserImp
