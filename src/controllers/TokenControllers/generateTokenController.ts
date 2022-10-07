import dateFns from 'date-fns'
import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
const generateToken = (userId: string, expiresIn: string) => {
  const SECRET = process.env.SECRET || ''
  const token = jwt.sign({ id: userId }, SECRET, {
    subject: userId,
    expiresIn: expiresIn,
  })
  return token
}
export default function refreshToken(req: Request, res: Response) {
  const authHeader = req.headers['authorization']
  const [, token] = (authHeader && authHeader.split(' ')) || ['']
  const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET || ''
  try {
    const userId = jwt.decode(token, { json: true })
    if (userId) {
      // Usar dateFns
      console.log(userId)
    }
    return res.status(400).json({ userId: userId })
  } catch (error) {
    return res
      .status(403)
      .json({ code: 403, message: 'Forbidden token.', error })
  }
}
