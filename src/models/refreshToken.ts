import { Date, model, Schema } from 'mongoose'

import { UserLogin as User } from './User'
export interface refreshToken {
  user: User
  expiresAt: Date
}
const refreshTokenSchema = new Schema<refreshToken>({
  expiresAt: { type: Date, expires: 240, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'user', required: true },
})
const refreshTokenModel = model<refreshToken>(
  'refreshToken',
  refreshTokenSchema
)
export default refreshTokenModel
