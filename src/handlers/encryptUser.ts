import bcrypt from 'bcrypt'

import UserModelDTO, { UserDTO } from '../models/User'

export const saveUser = async (user: UserDTO, passwordHash: string) => {
  const { name, email } = user
  const encryptedUser: UserDTO = { name, email, password: passwordHash }
  await UserModelDTO.create(encryptedUser)
}
export const saltPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(12)
  const passwordHash = await bcrypt.hash(password, salt)
  return passwordHash
}
