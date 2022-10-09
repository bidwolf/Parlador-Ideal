import { model, ObjectId, Schema } from 'mongoose'

import { UserLogin as User } from './User'

export interface Post {
  _id: ObjectId
  user: User
  postContent: string
  likes?: number
}
const postSchema = new Schema<Post>(
  {
    user: { type: Schema.Types.ObjectId, ref: 'user', required: true },
    postContent: { type: 'string', minlength: 0, maxlength: 280 },
    likes: { type: 'number', default: 0 },
  },
  { timestamps: true }
)
const postSchemaDTO = model<Post>('Post', postSchema)
export default postSchemaDTO
