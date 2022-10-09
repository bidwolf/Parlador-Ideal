import cookieParser from 'cookie-parser'
import { Router } from 'express'

import createPostController from '../controllers/PostControllers/createPostController'
import deletePostController from '../controllers/PostControllers/deletePostController'
import getPostController from '../controllers/PostControllers/getPostController'
import updatePostController from '../controllers/PostControllers/updatePostController'

const SECRET = process.env.SECRET || ''
const router = Router()
router.use(cookieParser(SECRET))
router.post('/', createPostController)
router.get('/:id', getPostController)
router.put('/:id', updatePostController)
router.delete('/:id', deletePostController)
export default router
