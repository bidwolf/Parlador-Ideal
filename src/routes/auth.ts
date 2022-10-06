import { Router } from 'express'

import refreshToken from '../controllers/TokenControllers/generateTokenController'
import createUserController from '../controllers/UserControllers/createUserController'
import login from '../controllers/UserControllers/loginUserController'
import { ensureAuthenticated } from '../middlewares/EnsureAuthenticated'
const router = Router()
router.post('/register', createUserController)
router.post('/login', login)
router.post('/token', ensureAuthenticated, refreshToken)
export default router
