import { Request, Response } from 'express'
import { isValidObjectId } from 'mongoose'

import PostModelDTO from '../../models/post'

export default async function getAllPosts(req: Request, res: Response) {
  try {
    const post = await PostModelDTO.find().select(
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
