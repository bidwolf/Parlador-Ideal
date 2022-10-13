import { Request, Response } from 'express'

import { createRefreshToken } from '../../handlers/createRefreshToken'
import { generateToken } from '../../handlers/generateToken'
import { validateLogin } from '../../handlers/validateLogin'
import refreshTokenModel from '../../models/refreshToken'
import UserModel, { UserLogin } from '../../models/User'

// deleta um refresh token salvo no cache do navegador
export default async function login(
  req: Request,
  res: Response
): Promise<Response> {
  // Caso o usuário esteja fazendo logout
  const authUser: UserLogin = req.body
  const user = await UserModel.findOne({ email: authUser.email }).select(
    'email refreshToken name'
  )
  const SECRET = process.env.SECRET || ''
  // Verifica se existe um usuário com o email solicitado
  try {
    await validateLogin(authUser)
  } catch (error) {
    return res.status(401).json({ error })
  }
  try {
    const token = generateToken(user?.id, '60s', SECRET)
    // Criando token de acesso e salvando REFRESH_TOKEN no banco de dados
    if (user?.refreshToken) {
      await createRefreshToken(user.refreshToken._id, authUser.email)
      return res.status(200).json({
        token,
        user: {
          id: user._id,
          userEmail: user.email,
          userName: user.name,


        }
      })
    } else {
      const newRefreshToken = await refreshTokenModel.create({
        user,
        expiresAt: Date.now(),
        token,
      })
      await user?.updateOne({ $set: { refreshToken: newRefreshToken } })
      return res.status(200).json({
        token,
        user: {
          userEmail: user?.email,
          userName: user?.name

        }
      })
    }
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      code: 500,
      message: 'Something was wrong, please try again later.',
    })
  }
}
