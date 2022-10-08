import { NextFunction, Request, Response } from 'express'
import { decode, verify } from 'jsonwebtoken'
const validateToken = (token: string) => {
  const SECRET = process.env.SECRET || ''
  verify(token, SECRET)
}
export const ensureAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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
export const ensureAuthenticatedUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userSlug = req.params.id
  const authHeader = req.headers['authorization']
  const [, TOKEN] = (authHeader && authHeader.split(' ')) || ['']
  if (!TOKEN) {
    return res.status(404).json({ code: 404, message: 'NOT FOUND' })
  }
  const userId = decode(TOKEN, { json: true })?.sub
  if (userId !== userSlug) {
    return res.status(401).json({ code: 401, message: 'Access Denied' })
  }
  next()
}
