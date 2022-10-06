import bcrypt from 'bcrypt'
import { Request, Response } from 'express'

import UserModel, { User, UserDTO } from '../../models/User'
const emailValidate = (email: string) => {
  const isValidEmail = (email: string) => {
    const regexEmail = RegExp(/\S+@\S+\.\S+/)
    return regexEmail.test(email)
  }
  if (!email) {
    throw {
      code: 422,
      message:
        'User cannot be registered, you need to provide an email to register.',
    }
  }
  if (!isValidEmail(email)) {
    throw {
      code: 422,
      message: 'User cannot be registered, you need to provide an valid email.',
    }
  }
}
const passwordValidate = (password: string, passwordConfirmation?: string) => {
  if (!password || password.length == 0) {
    throw { code: 422, message: 'You need to provide an password.' }
  }
  if (password.length < 8) {
    throw { code: 422, message: 'Your password must be 8 characters or more.' }
  }
  if (password !== passwordConfirmation) {
    throw { code: 422, message: 'You need to confirm your password.' }
  }
}
const nameValidate = (name: string) => {
  //implementar parser de string sanitizeName(name:string):string
  if (!name || name == '') {
    throw { code: 422, message: 'You must enter a name in the register.' }
  }
}
const saveUser = async (user: UserDTO, passwordHash: string) => {
  const { name, email } = user
  const encryptedUser: UserDTO = { name, email, password: passwordHash }
  await UserModel.create(encryptedUser)
}
export default async function create(
  req: Request,
  res: Response
): Promise<Response> {
  const user: User = req.body
  // Validação dos dados
  try {
    emailValidate(user.email)
    passwordValidate(user.password, user.passwordConfirmation)
    nameValidate(user.name)
  } catch (error) {
    return res.status(422).json(error)
  }
  // Criptografia da senha
  const salt = await bcrypt.genSalt(12)
  const passwordHash = await bcrypt.hash(user.password, salt)
  const userExists = await UserModel.findOne({ email: user.email }, '-password')
  // Cadastro do usuário
  try {
    if (userExists) {
      throw {
        code: 422,
        message: 'This email already exists, please, use another email',
      }
    }
  } catch (error) {
    return res.status(422).json(error)
  }
  try {
    await saveUser(user, passwordHash)
    return res.status(201).json({
      code: res.statusCode,
      message: 'User registered',
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json('Something was wrong, please try again later.')
  }
}
