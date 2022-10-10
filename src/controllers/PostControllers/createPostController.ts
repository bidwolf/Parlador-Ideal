import { Request, Response } from 'express'
import { isValidObjectId } from 'mongoose'

import PostModelDTO from '../../models/post'
import UserModelDTO from '../../models/User'

export default async function createPostController(
  req: Request,
  res: Response
) {
  const userId = req.params.id
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
    const user = await UserModelDTO.findOne({ _id: userId }).select(
      'name email posts'
    )
    if (!user) {
      return res.status(404).json({ code: 404, message: 'Not found user' })
    }
    const post = await PostModelDTO.create({
      postContent: postContent,
      user: user,
    })
    post.populate({ path: 'user', model: UserModelDTO, select: 'name' })
    await user?.updateOne({ $push: { posts: post } })
    res.status(200).json({ code: 200, message: 'post has been created', post })
  } catch (error) {
    console.error(error)
  }
}
