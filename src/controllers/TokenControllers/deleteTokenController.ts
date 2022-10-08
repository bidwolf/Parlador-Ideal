import { Request, Response } from 'express'

import refreshTokenModel from '../../models/refreshToken'

export async function deleteToken(req: Request, res: Response) {
  try {
    const tokenId = req.params
    if (tokenId) {
      try {
        const result = await refreshTokenModel.deleteOne({ _id: tokenId })
        if (result.deletedCount == 0) {
          return res.status(400).json({ code: 400, message: 'Invalid Token' })
        }
        return res
          .status(200)
          .json({ code: 200, message: 'Token has been deleted' })
      } catch (error) {
        console.error(error)
      }
      return res.status(404).json({ code: 404, message: 'Invalid token' })
    }
  } catch (error) {
    return res.status(500).json(error)
  }
}
