import { Request, Response } from 'express'

import UserModelDTO from '../../models/User'

export async function deleteUser(req: Request, res: Response) {
  const userId = req.params.id
  const authenticated = { value: true, user: userId }
  if (!userId) {
    return res.status(400).json({ errorMessage: 'Invalid parameters' })
  }
  try {
    if (authenticated.user !== userId) {
      return res.status(401).json({ code: 401, errorMessage: 'Access Denied' })
    }
    const result = await UserModelDTO.deleteOne({ id: userId })
    if (result.deletedCount == 0) {
      return res.status(500).json({
        code: 500,
        errorMessage: 'Internal error, please try again later',
      })
    }
    return res.status(200).json({ code: 200, message: 'User has been deleted' })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      code: 500,
      errorMessage: 'Internal error, please try again later',
    })
  }
}
