import { Request, Response } from 'express'
import { isValidObjectId } from 'mongoose'

import PostModelDTO from '../../models/post'

export default async function getPostsByUserId(req: Request, res: Response) {
  const userId = req.params.id
  if (!userId || !isValidObjectId(userId)) {
    return res.status(400).json({ code: 400, message: 'Invalid post id' })
  }
  try {
    const post = await PostModelDTO.find({ user: userId }).select(
      'postContent likes createdAt -_id'
    )
    if (!post || post.length == 0) {
      return res.status(404).json({
        code: 404,
        message: "User don't have any post or don't exists",
      })
    }
    return res.status(200).json({ posts: post })
  } catch (error) {
    console.error(error)
  }
}
