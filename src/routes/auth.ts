import { Router } from 'express'

import createUserController from '../controllers/UserController/createUserController'
import login from '../controllers/UserController/loginUserController'
const router = Router()
router.post('/register', createUserController)
router.post('/user', login)
export default router
