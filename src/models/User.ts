import { model, Schema } from 'mongoose'

import { refreshToken } from './refreshToken'
export interface UserLogin {
  email: string
  password: string
  refreshToken?: refreshToken
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
  refreshToken: {
    type: Schema.Types.ObjectId,
    ref: 'refreshToken',
    required: false,
  },
})

const UserModel = model<UserDTO>('User', UserSchema)
export default UserModel
