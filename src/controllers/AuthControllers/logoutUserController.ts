import { Request, Response } from 'express'
import Jwt from 'jsonwebtoken'

import refreshTokenModel from '../../models/refreshToken'
import UserModelDTO from '../../models/User'
export async function logout(req: Request, res: Response) {
  const authHeader = req.headers['authorization']
  const [, refreshToken] = (authHeader && authHeader.split(' ')) || ['']
  const deleteToken = async (token: string) => {
    if (token) {
      const jwToken = Jwt.decode(token, { json: true })
      if (jwToken && jwToken.sub) {
        const userId = jwToken.sub
        const user = await UserModelDTO.findById(userId, '-password')
        const refreshToken = user?.refreshToken
        if (refreshToken) {
          await refreshTokenModel.findByIdAndDelete(refreshToken)
        }
        await user?.updateOne({ $set: { refreshToken: null } })
        return res.redirect('/login')
      }
    }
    return res.status(403).json({ code: 403, message: 'Unauthorized' })
  }
  try {
    await deleteToken(refreshToken)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ code: 500, message: 'Internal Error' })
  }
}
