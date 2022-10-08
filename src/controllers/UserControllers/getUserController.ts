import { Request, Response } from 'express'

import UserModelDTO from '../../models/User'
export default async function getUser(
  req: Request,
  res: Response
): Promise<Response> {
  const userSlug = req.params.id
  // Verifica se existe um usuário com o id fornecido
  try {
    const user = await UserModelDTO.findById(userSlug, '-password')
    if (!user) {
      throw { code: 404, message: 'Page not found' }
    }
  } catch (error) {
    return res.status(404).json(error)
  }
  return res.status(200).json({ code: 200, message: 'Success user found' })
}
