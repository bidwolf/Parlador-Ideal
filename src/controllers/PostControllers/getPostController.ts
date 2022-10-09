import { Request, Response } from 'express'

export default function getPostController(req: Request, res: Response) {
  res.status(200).json({
    code: 200,
    message: 'post found',
    content: {
      postContent: ' example of post',
      userId: 'user id',
      lastUpdate: '10-08-2022',
    },
  })
}
