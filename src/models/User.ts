import { model, Schema } from 'mongoose'

export interface UserLogin {
  email: string
  password: string
  token?: string
}
export interface UserDTO extends UserLogin {
  name: string
}
export interface User extends UserDTO {
  passwordConfirmation: string
}
const UserSchema = new Schema<UserDTO>({
  email: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  token: {
    type: 'string',
    ref: 'refreshToken',
    required: false,
  },
})

const UserModelDTO = model<UserDTO>('User', UserSchema)
export default UserModelDTO
