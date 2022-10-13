import { Request, Response } from 'express'
import { isValidObjectId } from 'mongoose'

import PostModelDTO from '../../models/post'

export default async function getPostsByUserId(req: Request, res: Response) {
  const userId = req.params.id
  if (!userId || !isValidObjectId(userId)) {
    return res.status(400).json({ code: 400, message: 'Invalid user id' })
  }
  try {
    const post = await PostModelDTO.find({ user: userId }).select(
      'postContent likes createdAt user -_id'
    ).populate('user', 'name')
    if (!post) {
      return res.status(404).json({
        code: 404,
        message: 'User not found',
      })
    }
    return res.status(201).json({
      posts: post.map(post => {
        return { autor: post.user.name, postContent: post.postContent, createdAt: post.createdAt, likes: post.likes }
      })
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      code: 500,
      errorMessage: 'Internal server error, please try again later.',
    })
  }
}
