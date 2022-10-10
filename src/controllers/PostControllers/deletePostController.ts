import { Request, Response } from 'express'

import PostModelDTO from '../../models/post'
import UserModelDTO from '../../models/User'

export default async function deletePostController(
  req: Request,
  res: Response
) {
  const postId = req.params.id
  if (postId) {
    try {
      const post = await PostModelDTO.findOne({ id: postId })
      if (!post) {
        return res.status(404).json({ code: 404, message: 'post not found' })
      }
      try {
        const user = await UserModelDTO.findOne({ id: post?.user })
        user?.posts?.push(post)
      } catch (error) {
        console.error(error)
      }
      const result = await post?.deleteOne()
      if (result.deletedCount == 0) {
        return res
          .status(400)
          .json({ code: 400, message: 'Invalid Post', result })
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
