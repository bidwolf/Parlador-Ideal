import { Request, Response } from 'express'
import { decode } from 'jsonwebtoken'
import { isValidObjectId } from 'mongoose'

import { generateToken } from '../../handlers/generateToken'
import refreshTokenModel from '../../models/refreshToken'

export const refreshTokenController = async (req: Request, res: Response) => {
  const userId = req.body.userId
  if (!isValidObjectId(userId)) {
    return res.status(400).json({ code: 400, message: 'Invalid parameter' })
  }
  const SECRET = process.env.SECRET || ''
  const refreshToken = await refreshTokenModel
    .findOne({ user: userId })
    .select('token')
  if (!refreshToken) {
    return res.status(404).json({ code: 404, message: 'Not found' })
  }
  const userTokenId = decode(refreshToken.token, { json: true })?.sub
  if (userId !== userTokenId) {
    return res.status(403).json({ code: 403, message: 'Unauthorized access' })
  }
  const token = generateToken(userId, '60s', SECRET)
  return res.status(200).json({ code: 200, token })
}
