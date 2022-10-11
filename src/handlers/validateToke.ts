import { verify } from 'jsonwebtoken'

export const validateToken = (token: string) => {
  const SECRET = process.env.SECRET || ''
  verify(token, SECRET)
}
export const validateRefreshToken = (token: string) => {
  const SECRET = process.env.REFRESH_TOKEN_SECRET || ''
  verify(token, SECRET)
}
