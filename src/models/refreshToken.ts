import { Date, model, ObjectId, Schema } from 'mongoose'

import { UserLogin as User } from './User'
export interface refreshToken {
  _id: ObjectId
  user: User
  expiresAt: Date
  token: string
}
const refreshTokenSchema = new Schema<refreshToken>({
  expiresAt: { type: Date, expires: 0.5, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'user', required: true },
  token: { type: String, required: true },
})
const refreshTokenModel = model<refreshToken>(
  'refreshToken',
  refreshTokenSchema
)
export default refreshTokenModel
