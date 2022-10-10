import { Request, Response } from 'express'

import UserModelDTO from '../../models/User'
export default async function getUser(
  req: Request,
  res: Response
): Promise<Response> {
  const userSlug = req.params.id
  // Verifica se existe um usuário com o id fornecido
  try {
    const user = await UserModelDTO.findById(userSlug).select(
      'name email posts'
    )
    const publications = user?.posts?.length || 0
    if (!user) {
      throw { code: 404, message: 'Page not found' }
    }
    return res.status(200).json({
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        publications: publications,
      },
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json(error)
  }
}
