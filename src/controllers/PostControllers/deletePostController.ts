import { Request, Response } from 'express'

import PostModelDTO from '../../models/post'

export default async function deletePostController(
  req: Request,
  res: Response
) {
  const postId = req.params
  if (postId) {
    try {
      const result = await PostModelDTO.deleteOne({ id: postId })
      if (result.deletedCount == 0) {
        return res.status(400).json({ code: 400, message: 'Invalid Post' })
      }
      return res
        .status(200)
        .json({ code: 200, message: 'Post has been deleted' })
    } catch (error) {
      console.error(error)
      return res.status(400).json({ error })
    }
  }
  return res.status(500)
}
