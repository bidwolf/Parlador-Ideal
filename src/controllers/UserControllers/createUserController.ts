import { Request, Response } from 'express'

import { saltPassword, saveUser } from '../../handlers/encryptUser'
import { validateInput } from '../../handlers/userValidator'
import UserModelDTO, { User } from '../../models/User'

export default async function create(
  req: Request,
  res: Response
): Promise<Response> {
  const user: User = req.body
  // Validação dos dados
  try {
    validateInput(user)
  } catch (error) {
    return res.status(422).json(error)
  }
  // Criptografia da senha
  const passwordHash = await saltPassword(user.password)
  const userExists = await UserModelDTO.findOne({ email: user.email }).select(
    'name email'
  )
  // Cadastro do usuário

  if (userExists) {
    return res.status(422).json({
      code: 422,
      errorMessage: 'This email already exists, please, use another email',
    })
  }

  try {
    await saveUser(user, passwordHash)
    return res.status(201).json({
      code: res.statusCode,
      message: 'User registered',
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      code: 500,
      errorMessage: 'Internal server error, please try again later.',
    })
  }
}
