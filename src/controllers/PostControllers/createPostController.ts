import { Request, Response } from 'express'
import { isValidObjectId } from 'mongoose'

import PostModelDTO, { Post } from '../../models/post'
import UserModelDTO from '../../models/User'

export default async function createPostController(
  req: Request,
  res: Response
) {
  const userId = req.params
  const postContent: string = req.body.postContent
  if (!userId || !isValidObjectId(userId) || !postContent) {
    return res
      .status(400)
      .json({ code: 400, message: 'Invalid parameter userId' })
  }
  if (postContent.length > 280) {
    return res.status(400).json({
      code: 400,
      message: 'Your text should contain at most 280 characters',
    })
  }
  try {
    const user = await UserModelDTO.findOne({ id: userId }).select(
      'name email posts'
    )
    if (!user) {
      return res.status(404).json({ code: 404, message: 'Not found user' })
    }
    const posts = await PostModelDTO.create({
      postContent: postContent,
      user: user,
    })
    posts.populate({ path: 'user', model: UserModelDTO, select: 'name' })
    await user?.updateOne({ $push: { posts: posts } })
    res.status(200).json({ code: 200, message: 'post has been created', posts })
  } catch (error) {
    console.error(error)
  }
}
