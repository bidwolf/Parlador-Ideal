import jwt from 'jsonwebtoken'
export const createToken = (
  userId: string,
  expiresIn: string,
  secret: string
) => {
  const token = jwt.sign({ id: userId }, secret, {
    subject: userId,
    expiresIn: expiresIn,
  })
  return token
}
