import { NextFunction, Request, Response } from 'express'
import { decode } from 'jsonwebtoken'

import { validateToken } from '../handlers/validateToke'

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
    return res.status(400).json({ code: 401, message: 'Access Denied' })
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
    return res.status(401).json({ code: 401, message: 'Access Denied' })
  }
  const userId = decode(TOKEN, { json: true })?.sub
  if (userId !== userSlug) {
    return res.status(403).json({ code: 403, message: 'Unauthorized access' })
  }
  next()
}
