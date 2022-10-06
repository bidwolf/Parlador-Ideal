import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'
const validateToken = (token: string) => {
  const SECRET = process.env.SECRET || ''
  verify(token, SECRET)
}
export const checkToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization']
  const [, TOKEN] = (authHeader && authHeader.split(' ')) || ['']
  if (!TOKEN) {
    return res.status(401).json({ code: 401, message: 'Access Denied' })
  }
  try {
    validateToken(TOKEN)
    next()
  } catch (error) {
    return res.status(400).json({ code: 400, message: 'Invalid token.' })
  }
}
