import { compare } from 'bcrypt'

import UserModelDTO, { UserLogin } from '../models/User'
export const validateLogin = async (authUser: UserLogin) => {
  const user = await UserModelDTO.findOne<UserLogin>({ email: authUser.email })
  if (!user) {
    throw { code: 404, message: 'Email or Password invalid!' }
  }
  const checkPassword = await compare(authUser.password, user.password)
  if (!checkPassword) {
    throw { code: 422, message: 'Invalid password!' }
  }
}
