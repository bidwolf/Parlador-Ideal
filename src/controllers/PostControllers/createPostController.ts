import { Request, Response } from 'express'

export default function createPostController(req: Request, res: Response) {
  res.status(200).json({ code: 200, message: 'post has been created' })
}
