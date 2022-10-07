import { Request, Response } from 'express'

export async function deleteUser(req: Request, res: Response) {
  res.status(200).json({ message: 'User has been deleted' })
}
