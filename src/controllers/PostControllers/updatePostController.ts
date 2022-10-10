import { Request, Response } from 'express'
import { isValidObjectId } from 'mongoose'

import PostModelDTO, { Post } from '../../models/post'

export default async function updatePostController(
  req: Request,
  res: Response
) {
  const contentUpdated: Post = req.body
  const postId = req.params.id
  if (!isValidObjectId(postId) || !contentUpdated) {
    return res.status(400).json({ code: 400, message: 'Invalid parameters' })
  }
  try {
    const post = await PostModelDTO.findOne({ _id: postId }).select(
      'postContent,likes'
    )
    if (!post) {
      return res.status(404).json({ code: 404, message: 'Post not found' })
    }
    await post.updateOne({
      $set: {
        postContent: contentUpdated?.postContent,
        likes: contentUpdated?.likes,
      },
    })
    return res
      .status(200)
      .json({ code: 200, message: `Post was updated`, postUpdated: post })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ code: 500, message: 'Something was wrong' })
  }
}
