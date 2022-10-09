import { model, Schema } from 'mongoose'

import postSchemaDTO, { Post } from './post'
import { refreshToken } from './refreshToken'
export interface UserLogin {
  email: string
  password: string
  refreshToken?: refreshToken
  posts?: Post[]
}
export interface UserDTO extends UserLogin {
  name: string
}
export interface User extends UserDTO {
  passwordConfirmation: string
}
const UserSchema = new Schema<UserDTO>({
  email: { type: String, required: true, validate: /\S+@\S+\.\S+/, trim: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  refreshToken: {
    type: Schema.Types.ObjectId,
    ref: 'refreshToken',
    required: false,
  },
  posts: [postSchemaDTO],
})

const UserModelDTO = model<UserDTO>('User', UserSchema)
export default UserModelDTO
