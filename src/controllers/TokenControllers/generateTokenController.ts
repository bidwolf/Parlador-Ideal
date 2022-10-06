import { Request, Response } from 'express'

const refreshToken = (req: Request, res: Response) => {
  const token: string = req.body.token
  if (!token) {
    res.status(401).json({ code: 401, message: 'Unauthorized access' })
  }
}
export default refreshToken
