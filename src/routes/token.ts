import { Router } from 'express'

import { createTokenController } from '../controllers/TokenControllers/createTokenController'
import { deleteToken } from '../controllers/TokenControllers/deleteTokenController'
import { getTokenController } from '../controllers/TokenControllers/getTokenController'
import { refreshTokenController } from '../controllers/TokenControllers/refreshTokenController'
import { updateTokenController } from '../controllers/TokenControllers/updateTokenController'
const router = Router()
router.get('/', getTokenController)
router.get('/refresh', refreshTokenController)
router.post('/', createTokenController)
router.put('/', updateTokenController)
router.delete('/', deleteToken)

export default router
