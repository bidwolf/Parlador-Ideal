import { sign } from 'jsonwebtoken'
export const generateToken = (
  userId: string,
  expiresIn: string,
  secret: string
) => {
  const token = sign({ id: userId }, secret, {
    subject: userId,
    expiresIn: expiresIn,
  })
  return token
}
