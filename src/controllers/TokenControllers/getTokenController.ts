import { Request, Response } from 'express'
import { isValidObjectId } from 'mongoose'

import refreshTokenModel from '../../models/refreshToken'

export const getTokenController = async (req: Request, res: Response) => {
  const tokenId = req.body.tokenId
  if (!isValidObjectId(tokenId)) {
    return res.status(400).json({ code: 400, message: 'Invalid parameter' })
  }
  try {
    const token = await refreshTokenModel
      .findById(tokenId)
      .select('token expiresAt user -_id')
    if (!token) {
      return res.status(404).json({ code: 404, message: 'Token not found' })
    }
    return res.status(200).json({ code: 200, token })
  } catch (error) {
    return res.status(500).json({ error })
  }
}
