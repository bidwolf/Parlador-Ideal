import { Request, Response } from 'express'

import UserModelDTO from '../../models/User'
export default async function getUser(
  req: Request,
  res: Response
): Promise<Response> {
  const id = req.params.id
  const user = await UserModelDTO.findById(id, '-password')
  // Verifica se existe um usuário com o id fornecido
  try {
    if (!user) {
      throw { code: 404, message: 'Page not found' }
    }
  } catch (error) {
    return res.status(404).json(error)
  }
  return res
    .status(200)
    .json({ code: 200, message: 'Success user found', user })
}
