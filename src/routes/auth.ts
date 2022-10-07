import { Router } from 'express'

import { refreshToken } from '../controllers/TokenControllers/tokenController'
import login from '../controllers/UserControllers/loginUserController'
const router = Router()
router.post('/login', login)
router.post('/token', refreshToken)
export default router
