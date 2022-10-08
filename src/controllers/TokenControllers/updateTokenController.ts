import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { isValidObjectId } from 'mongoose'

import refreshTokenModel from '../../models/refreshToken'
export const generateToken = (
  userId: string,
  expiresIn: string,
  secret: string
) => {
  const token = jwt.sign({ id: userId }, secret, {
    subject: userId,
    expiresIn: expiresIn,
  })
  return token
}

export const updateTokenController = async (req: Request, res: Response) => {
  const userId = req.body.userId
  const tokenId = req.body.tokenId
  if (!isValidObjectId(userId) || !isValidObjectId(tokenId)) {
    return res.status(400).json({ code: 400, message: 'Invalid parameters' })
  }
  const secret = process.env.REFRESH_TOKEN_SECRET || ''
  const token = generateToken(userId, '3600s', secret)
  const updatedTokenResponse = await refreshTokenModel.updateOne(
    { id: tokenId },
    {
      user: userId,
      expiresAt: Date.now(),
      token,
    }
  )
  if (updatedTokenResponse.modifiedCount == 0) {
    return res.status(404).json({ code: 404, message: 'Token not found' })
  }
  return res.status(200).json({ code: 200, token: updatedTokenResponse })
}
