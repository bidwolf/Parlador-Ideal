import { Router } from 'express'

import { createTokenController } from '../controllers/TokenControllers/createTokenController'
import { deleteToken } from '../controllers/TokenControllers/deleteTokenController'
import { getTokenController } from '../controllers/TokenControllers/getTokenController'
import { updateTokenController } from '../controllers/TokenControllers/updateTokenController'
import login from '../controllers/UserControllers/loginUserController'
const router = Router()
router.post('/login', login)
router.get('/token', getTokenController)
router.post('/token', createTokenController)
router.put('/token', updateTokenController)
router.delete('/token', deleteToken)

export default router
