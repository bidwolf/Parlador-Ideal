import { Request, Response } from 'express'

import UserModelDTO from '../../models/User'

export async function deleteUser(req: Request, res: Response) {
  const userId = req.params
  if (userId) {
    try {
      const result = await UserModelDTO.deleteOne({ id: userId })
      if (result.deletedCount == 0) {
        return res.status(400).json({ code: 400, message: 'Invalid User' })
      }
      return res
        .status(200)
        .json({ code: 200, message: 'User has been deleted' })
    } catch (error) {
      console.error(error)
      return res.status(400).json({ error })
    }
  }
  return res.status(500)
}
