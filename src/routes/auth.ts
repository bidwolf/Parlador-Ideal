import { Router } from 'express'

import login from '../controllers/AuthControllers/loginUserController'
const router = Router()
router.post('/login', login)
export default router
