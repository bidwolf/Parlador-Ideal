import { sign } from 'jsonwebtoken'
import { ObjectId } from 'mongoose'

import refreshTokenModel from '../models/refreshToken'
import UserModelDTO from '../models/User'
export const createRefreshToken = async (tokenId: ObjectId, email: string) => {
  const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET || ''
  const user = await UserModelDTO.findOne({ email }, '-password')
  const token = sign({ id: user?._id }, REFRESH_TOKEN_SECRET, {
    subject: user?.id,
    expiresIn: '30s',
  })
  const refreshToken = await refreshTokenModel.findById(tokenId)
  if (!refreshToken) {
    const newRefreshToken = await refreshTokenModel.create({
      user,
      expiresAt: Date.now(),
      token,
    })
    return user?.updateOne({ $set: { refreshToken: newRefreshToken } })
  }
  return refreshToken?.updateOne({ $set: { token: token } })
}
