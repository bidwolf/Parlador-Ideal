import { Request, Response } from 'express'
import { isValidObjectId } from 'mongoose'

import { saltPassword } from '../../handlers/encriptUser'
import UserModelDTO, { UserDTO } from '../../models/User'

export async function updateUser(req: Request, res: Response) {
  const userUpdated: UserDTO = req.body
  const userId = req.params
  if (!isValidObjectId(userId) || !userUpdated) {
    return res.status(400).json({ code: 400, message: 'Invalid parameters' })
  }
  try {
    const user = await UserModelDTO.findOne({ id: userId }).select(
      'name email password'
    )
    if (!user) {
      return res.status(404).json({ code: 404, message: 'User not found' })
    }
    if (userUpdated.password) {
      userUpdated.password = await saltPassword(user.password)
    }
    const result = await user.updateOne({
      $set: {
        name: userUpdated?.name,
        email: userUpdated?.email,
        password: userUpdated.password,
      },
    })
    console.log(result)

    return res.status(200).json({ code: 200, oldUser: user, userUpdated })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ code: 500, message: 'Something was wrong' })
  }
}
