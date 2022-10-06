import { compare as bcrypt_compare } from 'bcrypt'
import { Request, Response } from 'express'
import { sign as jwt_sign } from 'jsonwebtoken'

import UserModel, { UserLogin } from '../../models/User'
const generateToken = (userId: string, expiresIn: string) => {
  const SECRET = process.env.SECRET || ''
  const token = jwt_sign({ id: userId }, SECRET, {
    subject: userId,
    expiresIn: expiresIn,
  })
  return token
}
export default async function login(
  req: Request,
  res: Response
): Promise<Response> {
  const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET || ''
  const authUser: UserLogin = req.body
  const user = await UserModel.findOne({ email: authUser.email })
  // Verifica se existe um usuário com o email solicitado
  try {
    if (!user) {
      throw { code: 404, message: 'Email invalid!' }
    }
  } catch (error) {
    return res.status(404).json(error)
  }
  const checkPassword = await bcrypt_compare(authUser.password, user.password)
  // Verifica se a senha está correta
  try {
    if (!checkPassword) {
      throw { code: 422, message: 'Invalid password!' }
    }
  } catch (error) {
    return res.status(422).json(error)
  }
  try {
    const token = generateToken(user.id, '60s')
    const refreshToken = jwt_sign(user, REFRESH_TOKEN_SECRET)
    await user.updateOne({ $set: { token: token } })
    return res
      .status(200)
      .json({ code: 200, message: 'Authentication done successfully', token })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      code: 500,
      message: 'Something was wrong, please try again later.',
    })
  }
}
