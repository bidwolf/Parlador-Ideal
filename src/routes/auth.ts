import { Router } from 'express'

import { refreshToken } from '../controllers/TokenControllers/tokenController'
import createUserController from '../controllers/UserControllers/createUserController'
import login from '../controllers/UserControllers/loginUserController'
const router = Router()
router.post('/register', createUserController)
router.post('/login', login)
router.post('/token', refreshToken)
export default router
