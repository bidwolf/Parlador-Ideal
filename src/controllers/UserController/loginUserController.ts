import bcrypt from 'bcrypt'
import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'

import UserImp, { UserLogin } from '../../models/User'
export default async function login(
  req: Request,
  res: Response
): Promise<Response> {
  const authUser: UserLogin = req.body
  const user = await UserImp.findOne({ email: authUser.email })
  // Verifica se existe um usuário com o email solicitado
  try {
    if (!user) {
      throw { code: 404, message: 'Email invalid!' }
    }
  } catch (error) {
    return res.status(404).json(error)
  }
  const checkPassword = await bcrypt.compare(authUser.password, user.password)
  // Verifica se a senha está correta
  try {
    if (!checkPassword) {
      throw { code: 422, message: 'Invalid password!' }
    }
  } catch (error) {
    return res.status(422).json(error)
  }
  try {
    const SECRET = process.env.SECRET || ''
    const TOKEN = jwt.sign({ id: user._id }, SECRET, { expiresIn: 300 })
    res.cookie('access_token', TOKEN, { signed: true, path: '/' })
    return res
      .status(200)
      .json({ code: 200, message: 'Authentication done successfully', TOKEN })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      code: 500,
      message: 'Something was wrong, please try again later.',
    })
  }
}
