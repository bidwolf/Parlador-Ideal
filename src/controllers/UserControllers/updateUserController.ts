import { Request, Response } from 'express'

export async function updateUser(req: Request, res: Response) {
  return res.status(200).json({ message: 'User has been updated' })
}
