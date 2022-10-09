import { model, ObjectId, Schema } from 'mongoose'

import { UserLogin as User } from './User'

export interface Post {
  _id: ObjectId
  user: User
  postContent: string
  likes?: number
  createdAt?: Date
  updatedAt?: Date
}
export const postSchema = new Schema<Post>(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    postContent: { type: String, minlength: 0, maxlength: 280 },
    likes: { type: Number, default: 0 },
  },
  { timestamps: true }
)
const PostModelDTO = model<Post>('Post', postSchema)
export default PostModelDTO
