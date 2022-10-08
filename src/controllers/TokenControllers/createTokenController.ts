import { Request, Response } from 'express'
import { isValidObjectId } from 'mongoose'

import { generateToken } from '../../handlers/generateToken'
import refreshTokenModel from '../../models/refreshToken'

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
