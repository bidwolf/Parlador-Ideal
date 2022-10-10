import cookieParser from 'cookie-parser'
import { Router } from 'express'

import createPostController from '../controllers/PostControllers/createPostController'
import deletePostController from '../controllers/PostControllers/deletePostController'
import getPostsByUserId from '../controllers/PostControllers/getPostController'
import updatePostController from '../controllers/PostControllers/updatePostController'

const SECRET = process.env.SECRET || ''
const router = Router()
router.use(cookieParser(SECRET))
router.post('/:id', createPostController)
router.get('/:id', getPostsByUserId)
router.put('/:id', updatePostController)
router.delete('/:id', deletePostController)
export default router
