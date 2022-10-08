import { Router } from 'express'

import { deleteToken } from '../controllers/TokenControllers/deleteTokenController'
import { refreshToken } from '../controllers/TokenControllers/tokenController'
import login from '../controllers/UserControllers/loginUserController'
const router = Router()
router.post('/login', login)
router.post('/token', refreshToken)
router.delete('/token/:id', deleteToken)
export default router
