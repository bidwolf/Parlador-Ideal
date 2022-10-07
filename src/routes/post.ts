import cookieParser from 'cookie-parser'
import { Router } from 'express'

import getPostController from '../controllers/PostControllers/getPostController'

const SECRET = process.env.SECRET || ''
const router = Router()
router.use(cookieParser(SECRET))
router.get('/:id', getPostController)
export default router
