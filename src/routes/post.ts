import cookieParser from 'cookie-parser'
import { Router } from 'express'

import createPostController from '../controllers/PostControllers/createPostController'
import deletePostController from '../controllers/PostControllers/deletePostController'
import getPostsByUserId from '../controllers/PostControllers/getPostController'
import updatePostController from '../controllers/PostControllers/updatePostController'
import {
  ensureAuthenticated,
  ensureAuthenticatedUser,
} from '../middlewares/EnsureAuthenticated'

const SECRET = process.env.SECRET || ''
const router = Router()
router.use(cookieParser(SECRET))
router.post('/:id', ensureAuthenticatedUser, createPostController)
router.get('/:id', ensureAuthenticated, getPostsByUserId)
router.put('/:id', ensureAuthenticatedUser, updatePostController)
router.delete('/:id', ensureAuthenticatedUser, deletePostController)
export default router
