import { Router } from 'express'

import login from '../controllers/AuthControllers/loginUserController'
import { logout } from '../controllers/AuthControllers/logoutUserController'
const router = Router()
router.post('/login', login)
router.post('/logout', logout)
export default router
