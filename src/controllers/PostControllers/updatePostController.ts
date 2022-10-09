import { Request, Response } from 'express'

export default function updatePostController(req: Request, res: Response) {
  res.status(200).json({ code: 200, message: 'post updated' })
}
