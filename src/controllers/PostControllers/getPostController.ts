import { Request, Response } from 'express'
import { isValidObjectId } from 'mongoose'

export default function getPostController(req: Request, res: Response) {
  const postId = req.params
  if (!postId || !isValidObjectId(postId)) {
    return res.status(400).json({ code: 400, message: 'Invalid post id' })
  }
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
