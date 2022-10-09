import { model, Schema } from 'mongoose'

import { Post } from './post'
import { refreshToken } from './refreshToken'
export interface UserLogin {
  email: string
  password: string
  refreshToken?: refreshToken
  posts?: Array<Post>
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
  posts: [
    {
      Post: { type: Schema.Types.ObjectId, required: true, ref: 'Post' },
      postContent: { type: String, required: true },
      likes: { type: Number, required: true },
    },
  ],
})

const UserModelDTO = model<UserDTO>('User', UserSchema)
export default UserModelDTO
