import { Request, Response } from 'express'
import { isValidObjectId } from 'mongoose'

import { saltPassword } from '../../handlers/encryptUser'
import { emailValidate, passwordValidate } from '../../handlers/userValidator'
import UserModelDTO, { User } from '../../models/User'

export async function updateUser(req: Request, res: Response) {
  const userUpdated: User = req.body
  const userId = req.params.id
  const authenticated = { status: true, userId: userId }
  if (!isValidObjectId(userId) || !userUpdated) {
    return res
      .status(400)
      .json({ code: 400, errorMessage: 'Invalid parameters' })
  }
  if (!authenticated.status) {
    return res
      .status(401)
      .json({ code: 401, errorMessage: 'Access denied,unauthenticated user' })
  }
  if (userId != authenticated.userId) {
    return res
      .status(403)
      .json({ code: 403, errorMessage: 'Unauthorized user' })
  }
  try {
    const user = await UserModelDTO.findOne({ id: userId }).select(
      'name email password'
    )
    if (!user) {
      return res.status(404).json({ code: 404, errorMessage: 'User not found' })
    }
    if (userUpdated.password) {
      passwordValidate(userUpdated.password, userUpdated.passwordConfirmation)
      emailValidate(userUpdated.email)
      userUpdated.password = await saltPassword(user.password)
    }
    await user.updateOne({
      $set: {
        name: userUpdated?.name,
        email: userUpdated?.email,
        password: userUpdated.password,
      },
    })
    return res.status(200).json({
      code: 200,
      message: `${userUpdated.name ? 'name' : ''}was updated\n 
      ${userUpdated.password ? 'password' : ''} was updated\n
      ${userUpdated.email ? 'email' : ''} was updated`,
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      code: 500,
      errorMessage: error || 'Internal server Error',
    })
  }
}
