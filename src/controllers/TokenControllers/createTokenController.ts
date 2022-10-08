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

export const createTokenController = async (req: Request, res: Response) => {
  const userId = req.body.userId
  if (!isValidObjectId(userId)) {
    return res.status(400).json({ code: 400, message: 'Invalid parameter' })
  }
  const secret = process.env.REFRESH_TOKEN_SECRET || ''
  const token = generateToken(userId, '3600s', secret)
  const newToken = await refreshTokenModel.create({
    user: userId,
    expiresAt: Date.now(),
    token,
  })
  return res.status(200).json({ code: 200, token: newToken })
}
